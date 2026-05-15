-- Growthera Service Lifecycle ERP database foundation.
-- Target database: PostgreSQL 15+.
-- Enable pgcrypto for UUID generation and encrypted-field support.

CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE EXTENSION IF NOT EXISTS citext;

CREATE TABLE organizations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  legal_name text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE branches (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  name text NOT NULL,
  city text,
  state text,
  country text NOT NULL DEFAULT 'India',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE departments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  branch_id uuid REFERENCES branches(id) ON DELETE SET NULL,
  name text NOT NULL,
  code text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (organization_id, code)
);

CREATE TABLE roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  name text NOT NULL,
  description text,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (organization_id, name)
);

CREATE TABLE permissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text NOT NULL UNIQUE,
  description text
);

CREATE TABLE role_permissions (
  role_id uuid NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
  permission_id uuid NOT NULL REFERENCES permissions(id) ON DELETE CASCADE,
  PRIMARY KEY (role_id, permission_id)
);

CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  role_id uuid NOT NULL REFERENCES roles(id),
  email citext NOT NULL,
  password_hash text NOT NULL,
  full_name text NOT NULL,
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'suspended')),
  last_login_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (organization_id, email)
);

CREATE TABLE employees (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  user_id uuid UNIQUE REFERENCES users(id) ON DELETE SET NULL,
  department_id uuid REFERENCES departments(id) ON DELETE SET NULL,
  branch_id uuid REFERENCES branches(id) ON DELETE SET NULL,
  employee_code text NOT NULL,
  full_name text NOT NULL,
  mobile text,
  designation text,
  joining_date date,
  target_amount numeric(14,2) NOT NULL DEFAULT 0,
  target_leads integer NOT NULL DEFAULT 0,
  incentive_plan jsonb NOT NULL DEFAULT '{}'::jsonb,
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'left')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (organization_id, employee_code)
);

CREATE TABLE login_activities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  ip_address inet,
  user_agent text,
  success boolean NOT NULL,
  failure_reason text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  name text NOT NULL,
  category text NOT NULL,
  default_sla_days integer NOT NULL DEFAULT 7,
  base_price numeric(14,2) NOT NULL DEFAULT 0,
  active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (organization_id, name)
);

CREATE TABLE leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  lead_number text NOT NULL,
  name text NOT NULL,
  company_name text,
  mobile text NOT NULL,
  email citext NOT NULL,
  city text,
  state text,
  industry text,
  business_type text,
  requirement text,
  service_id uuid REFERENCES services(id) ON DELETE SET NULL,
  service_interested text,
  lead_source text NOT NULL,
  priority text NOT NULL DEFAULT 'Medium' CHECK (priority IN ('Low', 'Medium', 'High', 'Critical')),
  assigned_employee_id uuid REFERENCES employees(id) ON DELETE SET NULL,
  assigned_department_id uuid REFERENCES departments(id) ON DELETE SET NULL,
  status text NOT NULL DEFAULT 'New' CHECK (
    status IN (
      'New',
      'Attempted',
      'Connected',
      'Interested',
      'Follow-up',
      'Proposal Sent',
      'Documentation Pending',
      'Negotiation',
      'Converted',
      'Not Interested',
      'Invalid',
      'Dropped'
    )
  ),
  follow_up_at timestamptz,
  notes text,
  duplicate_of_lead_id uuid REFERENCES leads(id) ON DELETE SET NULL,
  created_by uuid REFERENCES users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (organization_id, lead_number)
);

CREATE TABLE lead_activities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id uuid NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  employee_id uuid REFERENCES employees(id) ON DELETE SET NULL,
  activity_type text NOT NULL,
  old_status text,
  new_status text,
  note text,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE lead_assignments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id uuid NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  from_employee_id uuid REFERENCES employees(id) ON DELETE SET NULL,
  to_employee_id uuid REFERENCES employees(id) ON DELETE SET NULL,
  assigned_by uuid REFERENCES users(id) ON DELETE SET NULL,
  reason text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE clients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  source_lead_id uuid UNIQUE REFERENCES leads(id) ON DELETE SET NULL,
  client_number text NOT NULL,
  company_name text NOT NULL,
  cin text,
  gst text,
  pan text,
  industry text,
  business_type text,
  city text,
  state text,
  assigned_backend_employee_id uuid REFERENCES employees(id) ON DELETE SET NULL,
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'on_hold')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (organization_id, client_number)
);

CREATE TABLE client_contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id uuid NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  name text NOT NULL,
  role text,
  mobile text,
  email citext,
  is_primary boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE service_cases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  client_id uuid NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  service_id uuid NOT NULL REFERENCES services(id),
  case_number text NOT NULL,
  assigned_employee_id uuid REFERENCES employees(id) ON DELETE SET NULL,
  status text NOT NULL DEFAULT 'Documentation Pending',
  priority text NOT NULL DEFAULT 'Medium' CHECK (priority IN ('Low', 'Medium', 'High', 'Critical')),
  sla_due_at timestamptz,
  started_at timestamptz NOT NULL DEFAULT now(),
  completed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (organization_id, case_number)
);

CREATE TABLE service_case_stages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_case_id uuid NOT NULL REFERENCES service_cases(id) ON DELETE CASCADE,
  name text NOT NULL,
  sequence integer NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'blocked', 'completed')),
  assigned_employee_id uuid REFERENCES employees(id) ON DELETE SET NULL,
  due_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (service_case_id, sequence)
);

CREATE TABLE tasks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  service_case_id uuid REFERENCES service_cases(id) ON DELETE CASCADE,
  lead_id uuid REFERENCES leads(id) ON DELETE CASCADE,
  client_id uuid REFERENCES clients(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  assigned_to_employee_id uuid REFERENCES employees(id) ON DELETE SET NULL,
  created_by uuid REFERENCES users(id) ON DELETE SET NULL,
  priority text NOT NULL DEFAULT 'Medium' CHECK (priority IN ('Low', 'Medium', 'High', 'Critical')),
  status text NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'blocked', 'completed', 'cancelled')),
  due_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  client_id uuid REFERENCES clients(id) ON DELETE CASCADE,
  lead_id uuid REFERENCES leads(id) ON DELETE CASCADE,
  service_case_id uuid REFERENCES service_cases(id) ON DELETE CASCADE,
  uploaded_by uuid REFERENCES users(id) ON DELETE SET NULL,
  document_type text NOT NULL,
  folder text NOT NULL,
  file_name text NOT NULL,
  storage_key text NOT NULL,
  mime_type text,
  size_bytes bigint,
  access_level text NOT NULL DEFAULT 'internal' CHECK (access_level IN ('internal', 'client', 'restricted')),
  ocr_text tsvector,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE document_versions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  document_id uuid NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
  version integer NOT NULL,
  file_name text NOT NULL,
  storage_key text NOT NULL,
  uploaded_by uuid REFERENCES users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (document_id, version)
);

CREATE TABLE agreements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id uuid NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  service_case_id uuid REFERENCES service_cases(id) ON DELETE SET NULL,
  document_id uuid REFERENCES documents(id) ON DELETE SET NULL,
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'sent', 'signed', 'void')),
  e_sign_provider text,
  signed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE invoices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  client_id uuid NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  service_case_id uuid REFERENCES service_cases(id) ON DELETE SET NULL,
  invoice_number text NOT NULL,
  subtotal numeric(14,2) NOT NULL DEFAULT 0,
  tax_amount numeric(14,2) NOT NULL DEFAULT 0,
  total_amount numeric(14,2) NOT NULL,
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'sent', 'partially_paid', 'paid', 'overdue', 'cancelled')),
  due_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (organization_id, invoice_number)
);

CREATE TABLE payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  invoice_id uuid REFERENCES invoices(id) ON DELETE SET NULL,
  client_id uuid NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  amount numeric(14,2) NOT NULL,
  payment_mode text NOT NULL,
  transaction_reference text,
  status text NOT NULL DEFAULT 'received' CHECK (status IN ('received', 'pending', 'failed', 'refunded')),
  received_at timestamptz NOT NULL DEFAULT now(),
  recorded_by uuid REFERENCES users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE call_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  lead_id uuid REFERENCES leads(id) ON DELETE CASCADE,
  client_id uuid REFERENCES clients(id) ON DELETE CASCADE,
  employee_id uuid REFERENCES employees(id) ON DELETE SET NULL,
  provider text,
  provider_call_id text,
  direction text NOT NULL CHECK (direction IN ('inbound', 'outbound')),
  phone_number text NOT NULL,
  duration_seconds integer NOT NULL DEFAULT 0,
  recording_url text,
  outcome text,
  notes text,
  started_at timestamptz NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE tickets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  client_id uuid NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  service_case_id uuid REFERENCES service_cases(id) ON DELETE SET NULL,
  subject text NOT NULL,
  description text,
  status text NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'waiting_on_client', 'resolved', 'closed')),
  priority text NOT NULL DEFAULT 'Medium' CHECK (priority IN ('Low', 'Medium', 'High', 'Critical')),
  assigned_employee_id uuid REFERENCES employees(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE notifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  channel text NOT NULL CHECK (channel IN ('app', 'email', 'sms', 'whatsapp')),
  title text NOT NULL,
  body text,
  status text NOT NULL DEFAULT 'queued' CHECK (status IN ('queued', 'sent', 'read', 'failed')),
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  scheduled_at timestamptz,
  sent_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE attendance (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  employee_id uuid NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
  attendance_date date NOT NULL,
  check_in_at timestamptz,
  check_out_at timestamptz,
  status text NOT NULL DEFAULT 'present' CHECK (status IN ('present', 'absent', 'half_day', 'remote')),
  UNIQUE (employee_id, attendance_date)
);

CREATE TABLE leave_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  employee_id uuid NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
  leave_type text NOT NULL,
  start_date date NOT NULL,
  end_date date NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'cancelled')),
  approved_by uuid REFERENCES users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  report_type text NOT NULL,
  name text NOT NULL,
  parameters jsonb NOT NULL DEFAULT '{}'::jsonb,
  generated_by uuid REFERENCES users(id) ON DELETE SET NULL,
  generated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE audit_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  actor_user_id uuid REFERENCES users(id) ON DELETE SET NULL,
  entity_type text NOT NULL,
  entity_id uuid,
  action text NOT NULL,
  before_data jsonb,
  after_data jsonb,
  ip_address inet,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_users_org_role ON users (organization_id, role_id);
CREATE INDEX idx_employees_department ON employees (department_id, status);
CREATE INDEX idx_login_activities_user_created ON login_activities (user_id, created_at DESC);
CREATE INDEX idx_leads_org_status_followup ON leads (organization_id, status, follow_up_at);
CREATE INDEX idx_leads_assigned_employee ON leads (assigned_employee_id, status);
CREATE INDEX idx_leads_mobile ON leads (mobile);
CREATE INDEX idx_leads_email ON leads (email);
CREATE INDEX idx_lead_activities_lead_created ON lead_activities (lead_id, created_at DESC);
CREATE INDEX idx_clients_org_status ON clients (organization_id, status);
CREATE INDEX idx_service_cases_client_status ON service_cases (client_id, status);
CREATE INDEX idx_service_cases_assigned_sla ON service_cases (assigned_employee_id, sla_due_at);
CREATE INDEX idx_tasks_assigned_due ON tasks (assigned_to_employee_id, status, due_at);
CREATE INDEX idx_documents_client ON documents (client_id, document_type);
CREATE INDEX idx_documents_ocr ON documents USING gin (ocr_text);
CREATE INDEX idx_invoices_client_status ON invoices (client_id, status);
CREATE INDEX idx_payments_client_received ON payments (client_id, received_at DESC);
CREATE INDEX idx_call_logs_employee_started ON call_logs (employee_id, started_at DESC);
CREATE INDEX idx_notifications_user_status ON notifications (user_id, status, created_at DESC);
CREATE INDEX idx_tickets_client_status ON tickets (client_id, status);
CREATE INDEX idx_audit_logs_entity ON audit_logs (entity_type, entity_id, created_at DESC);
