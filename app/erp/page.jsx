import {
  Activity,
  BarChart3,
  Bell,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ClipboardList,
  Database,
  FileText,
  Headphones,
  LockKeyhole,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards,
} from "lucide-react"
import {
  automationRules,
  dashboardMetrics,
  databaseTables,
  departments,
  erpRoles,
  leadFields,
  leadSources,
  leadStatuses,
  sampleClients,
  sampleEmployees,
  sampleLeads,
  serviceWorkflows,
} from "@/lib/erp/platformData"
import { summarizeLeadPipeline } from "@/lib/erp/leadEngine"

export const metadata = {
  title: "Service Lifecycle ERP",
  description:
    "Centralized ERP, CRM, lead management, service workflow, and reporting platform for Growthera Venture Private Limited.",
}

const modules = [
  {
    title: "Authentication & RBAC",
    icon: LockKeyhole,
    copy: "Secure login, sessions, role permissions, login activity, IP tracking, and audit trails.",
  },
  {
    title: "Lead Management",
    icon: Headphones,
    copy: "Central lead capture, Kanban statuses, follow-ups, notes, documents, and assignment history.",
  },
  {
    title: "CRM Clients",
    icon: Building2,
    copy: "Converted leads create client profiles, service cases, billing accounts, and communication logs.",
  },
  {
    title: "Backend Servicing",
    icon: ClipboardList,
    copy: "Task workflows, document collection, approvals, escalations, and SLA tracking for admin teams.",
  },
  {
    title: "Documents",
    icon: FileText,
    copy: "Versioned folders, access rules, e-sign readiness, OCR/search metadata, and compliance files.",
  },
  {
    title: "Payments & Invoices",
    icon: WalletCards,
    copy: "Invoices, collections, outstanding balances, reminders, profitability, and revenue reports.",
  },
  {
    title: "Employee Management",
    icon: Users,
    copy: "Employee profiles, departments, attendance, targets, incentives, leaves, and performance reports.",
  },
  {
    title: "Reports & Analytics",
    icon: BarChart3,
    copy: "Real-time management dashboards for sales, backend SLA, finance, and employee performance.",
  },
]

const securityItems = [
  "Role-based permissions by department, branch, client, and record ownership",
  "Secure API authentication with server-side secrets and no client-side webhook keys",
  "Activity logs for every status, assignment, document, payment, and approval change",
  "Encryption-ready fields for PAN, GST, bank statements, agreements, and investor data",
  "Backup, audit trail, GDPR/basic compliance support, and IP/session tracking",
]

const integrations = ["Exotel", "MyOperator", "Twilio", "Knowlarity", "WhatsApp API", "AWS S3", "OCR/Search", "E-sign"]

export default function ErpPage() {
  const pipeline = summarizeLeadPipeline(sampleLeads).filter((stage) => stage.count > 0)

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(181,42,52,0.35),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.24),_transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-orange-100">
              <Sparkles className="h-4 w-4" />
              Growthera Venture Private Limited
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
              Centralized Service Lifecycle ERP
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              A modular ERP + CRM + Lead Management System foundation for sales, calling,
              backend servicing, compliance, funding workflows, client communication,
              employee tracking, payments, documents, and management reporting.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/api/erp/leads"
                className="rounded-full bg-[#B52A34] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-red-950/40 transition hover:bg-[#8e1822]"
              >
                View lead API preview
              </a>
              <a
                href="/contact"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Capture a website lead
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dashboardMetrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="text-sm text-slate-300">{metric.label}</p>
                <p className="mt-2 text-3xl font-bold">{metric.value}</p>
                <p className="mt-1 text-sm text-orange-100">{metric.helper}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 text-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#8e1822]">System modules</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">One connected operating system</h2>
              <p className="mt-4 text-slate-600">
                The platform is structured around a single relational database, shared audit
                trail, and role-aware dashboards so every team sees the same client lifecycle.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {modules.map((module) => {
                const Icon = module.icon

                return (
                  <div key={module.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <Icon className="h-6 w-6 text-[#8e1822]" />
                    <h3 className="mt-4 font-bold text-[#191b47]">{module.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{module.copy}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#8e1822]">User management</p>
                <h3 className="mt-2 text-2xl font-bold text-[#191b47]">Role-based access matrix</h3>
              </div>
              <p className="max-w-2xl text-sm leading-6 text-slate-600">
                Every dashboard, workflow, document, payment, and report is permissioned by role,
                department, branch, ownership, and audit policy.
              </p>
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {erpRoles.map((role) => (
                <div key={role.name} className="rounded-2xl bg-slate-50 p-4">
                  <h4 className="font-bold text-[#191b47]">{role.name}</h4>
                  <p className="mt-2 text-sm text-slate-600">{role.scope}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#8e1822]">
                    {role.permissions.length} permissions
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#8e1822]">Lead lifecycle</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Capture, distribute, call, convert</h2>
            </div>
            <p className="max-w-2xl text-slate-600">
              Website, ads, referrals, IndiaMART, LinkedIn, manual entry, and CSV imports flow
              into the same lead engine for routing, assignment, duplicate checks, and logging.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-bold text-[#191b47]">Lead sources</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {leadSources.map((source) => (
                  <span key={source} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                    {source}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-bold text-[#191b47]">Pipeline statuses</h3>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {leadStatuses.map((status) => (
                  <span key={status} className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                    {status}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-bold text-[#191b47]">Required lead fields</h3>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {leadFields.slice(0, 12).map((field) => (
                  <span key={field} className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                    {field}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 px-5 py-4">
                <h3 className="font-bold text-[#191b47]">Active lead queue</h3>
              </div>
              <div className="divide-y divide-slate-100">
                {sampleLeads.map((lead) => (
                  <div key={lead.id} className="grid gap-4 p-5 md:grid-cols-[1fr_auto]">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-bold text-[#191b47]">{lead.companyName}</p>
                        <span className={priorityClassName(lead.priority)}>{lead.priority}</span>
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                          {lead.status}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-slate-600">{lead.requirement}</p>
                      <p className="mt-2 text-xs text-slate-500">
                        {lead.source} - {lead.city}, {lead.state} - Follow-up {lead.followUpDate}
                      </p>
                    </div>
                    <div className="text-sm font-semibold text-[#8e1822]">{lead.id}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-bold text-[#191b47]">Pipeline snapshot</h3>
              <div className="mt-5 space-y-4">
                {pipeline.map((stage) => (
                  <div key={stage.status}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="font-semibold text-slate-700">{stage.status}</span>
                      <span className="text-slate-500">{stage.count}</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200">
                      <div
                        className="h-2 rounded-full bg-[#8e1822]"
                        style={{ width: `${Math.max(16, stage.count * 28)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 text-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl bg-[#191b47] p-6 text-white lg:col-span-1">
              <Network className="h-8 w-8 text-orange-200" />
              <h2 className="mt-5 text-3xl font-bold">Intelligent lead distribution</h2>
              <p className="mt-4 text-slate-200">
                The routing engine supports department-wise rules, workload balancing, priority
                allocation, manual reassignment, and missed-follow-up reassignment.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
              {departments.map((department) => (
                <div key={department.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-[#191b47]">{department.name}</h3>
                      <p className="mt-1 text-sm text-slate-500">{department.branch}</p>
                    </div>
                    <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-[#8e1822]">
                      {department.dailyCapacity}/day
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-slate-600">Owner: {department.seniorOwner}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {department.routeKeywords.slice(0, 4).map((keyword) => (
                      <span key={keyword} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#8e1822]">CRM and backend servicing</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Converted leads become delivery cases</h2>
              <p className="mt-4 text-slate-600">
                Conversion creates a client profile, service case, billing account, assigned
                backend executive, document checklist, and communication timeline.
              </p>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-bold text-[#191b47]">Client profile coverage</h3>
                <div className="mt-4 grid gap-2 text-sm text-slate-700">
                  {[
                    "Company details, CIN, GST, PAN",
                    "Directors/partners and contacts",
                    "Service, agreements, documents, and notes",
                    "Payment history and invoices",
                    "Funding requirements and investor details",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {serviceWorkflows.map((workflow) => (
                <div key={workflow.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-bold text-[#191b47]">{workflow.name}</h3>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                      SLA {workflow.slaDays} days
                    </span>
                  </div>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {workflow.stages.map((stage, index) => (
                      <div key={stage} className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#8e1822] text-xs font-bold text-white">
                          {index + 1}
                        </span>
                        {stage}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-200">Operations center</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Calling, tasks, automations, reports</h2>
              <p className="mt-4 text-slate-300">
                Sales, backend, accounts, HR, clients, and management operate from the same
                activity timeline and notification engine.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
              {[
                ["Calling management", "Click-to-call, recordings, duration, daily call reports, missed follow-ups, and agent performance."],
                ["Task management", "Assignments, deadlines, priorities, internal comments, escalation alerts, and completion tracking."],
                ["Client portal", "Service status, document uploads, certificates, support tickets, payments, and assigned-manager chat."],
                ["Finance reports", "Invoices, outstanding payments, profitability, service-wise revenue, and daily collections."],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/10 p-5">
                  <Activity className="h-6 w-6 text-orange-200" />
                  <h3 className="mt-4 font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-orange-200" />
                <h3 className="font-bold">Automation rules</h3>
              </div>
              <div className="mt-4 space-y-3">
                {automationRules.map((rule) => (
                  <div key={rule} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-300" />
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-orange-200" />
                <h3 className="font-bold">Security baseline</h3>
              </div>
              <div className="mt-4 space-y-3">
                {securityItems.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 text-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#8e1822]">Master database</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Relational schema ready for PostgreSQL</h2>
              <p className="mt-4 text-slate-600">
                The table map includes users, employees, departments, leads, clients, services,
                tasks, documents, payments, agreements, calls, notifications, reports, tickets,
                and audit logs. See <code className="rounded bg-white px-1 py-0.5">docs/erp-database-schema.sql</code>.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {databaseTables.map((table) => (
                  <span key={table} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                    {table}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <Database className="h-7 w-7 text-[#8e1822]" />
                <h3 className="mt-4 font-bold text-[#191b47]">Multi-branch and multi-company ready</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Organization, branch, department, role, and ownership fields support future
                  branches, franchises, investor portals, AI integrations, WhatsApp, mobile apps,
                  and multi-language interfaces.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <BriefcaseBusiness className="h-7 w-7 text-[#8e1822]" />
                <h3 className="mt-4 font-bold text-[#191b47]">Active clients and employees</h3>
                <div className="mt-4 grid gap-3">
                  {sampleClients.map((client) => (
                    <div key={client.id} className="rounded-xl bg-slate-50 p-4 text-sm">
                      <p className="font-bold text-[#191b47]">{client.name}</p>
                      <p className="mt-1 text-slate-600">
                        {client.serviceStatus} - {client.paymentStatus}
                      </p>
                    </div>
                  ))}
                  <div className="grid gap-2 sm:grid-cols-2">
                    {sampleEmployees.map((employee) => (
                      <div key={employee.id} className="rounded-xl bg-slate-50 p-4 text-sm">
                        <p className="font-bold text-[#191b47]">{employee.name}</p>
                        <p className="mt-1 text-slate-600">
                          {employee.role} - {employee.todayCalls} calls today
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-bold text-[#191b47]">Integration-ready systems</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {integrations.map((integration) => (
                <span key={integration} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                  {integration}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function priorityClassName(priority) {
  if (priority === "Critical") {
    return "rounded-full bg-red-100 px-2.5 py-1 text-xs font-bold text-red-700"
  }

  if (priority === "High") {
    return "rounded-full bg-orange-100 px-2.5 py-1 text-xs font-bold text-orange-700"
  }

  return "rounded-full bg-blue-100 px-2.5 py-1 text-xs font-bold text-blue-700"
}
