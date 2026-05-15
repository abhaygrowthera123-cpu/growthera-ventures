import { departments, leadStatuses, sampleEmployees, sampleLeads } from "@/lib/erp/platformData"

const HIGH_VALUE_TERMS = ["vc", "funding", "investor", "loan", "seed", "cgtmse"]
const DEFAULT_FOLLOW_UP_HOURS = 24

export function normalizeLeadPayload(payload = {}) {
  const name = String(payload.name || "").trim()
  const email = String(payload.email || "").trim().toLowerCase()
  const mobile = String(payload.mobile || payload.phone || "").trim()
  const requirement = String(payload.requirement || payload.message || "").trim()
  const serviceInterested = String(payload.serviceInterested || payload.service || "").trim()

  return {
    name,
    companyName: String(payload.companyName || payload.company || "").trim(),
    mobile,
    email,
    city: String(payload.city || "").trim(),
    state: String(payload.state || "").trim(),
    industry: String(payload.industry || "").trim(),
    businessType: String(payload.businessType || "").trim(),
    requirement,
    serviceInterested,
    source: String(payload.source || payload.leadSource || "Website forms").trim(),
    priority: String(payload.priority || inferPriority({ requirement, serviceInterested })).trim(),
    notes: String(payload.notes || payload.message || "").trim(),
    uploadedDocuments: Array.isArray(payload.uploadedDocuments) ? payload.uploadedDocuments : [],
  }
}

export function validateLeadPayload(lead) {
  const errors = []

  if (!lead.name) errors.push("Name is required.")
  if (!lead.email) errors.push("Email is required.")
  if (!lead.mobile) errors.push("Mobile number is required.")
  return errors
}

export function inferPriority({ requirement = "", serviceInterested = "" }) {
  const haystack = `${requirement} ${serviceInterested}`.toLowerCase()

  if (HIGH_VALUE_TERMS.some((term) => haystack.includes(term))) {
    return "High"
  }

  if (haystack.includes("urgent") || haystack.includes("deadline")) {
    return "High"
  }

  return "Medium"
}

export function detectDuplicateLead(lead, existingLeads = sampleLeads) {
  return existingLeads.find((existing) => {
    const sameEmail = lead.email && existing.email?.toLowerCase() === lead.email
    const sameMobile = lead.mobile && normalizePhone(existing.mobile) === normalizePhone(lead.mobile)
    const sameCompany =
      lead.companyName &&
      existing.companyName?.toLowerCase().trim() === lead.companyName.toLowerCase().trim()

    return sameEmail || sameMobile || sameCompany
  })
}

export function routeLeadToDepartment(lead) {
  const haystack = [
    lead.requirement,
    lead.serviceInterested,
    lead.industry,
    lead.businessType,
    lead.city,
    lead.state,
  ]
    .join(" ")
    .toLowerCase()

  return (
    departments.find((department) =>
      department.routeKeywords.some((keyword) => haystack.includes(keyword.toLowerCase()))
    ) || departments[0]
  )
}

export function assignLead(lead, employees = sampleEmployees) {
  const department = routeLeadToDepartment(lead)
  const eligibleEmployees = employees
    .filter((employee) => employee.departmentId === department.id)
    .sort((a, b) => a.activeLeadCount - b.activeLeadCount)

  const highValueLead = ["Critical", "High"].includes(lead.priority)
  const seniorEmployee = eligibleEmployees.find((employee) => employee.seniority === "senior")
  const assignedEmployee = highValueLead && seniorEmployee ? seniorEmployee : eligibleEmployees[0]

  return {
    department,
    assignedEmployee: assignedEmployee || null,
    strategy: assignedEmployee
      ? highValueLead
        ? "priority-based senior allocation"
        : "workload-based allocation"
      : "department routed, awaiting manual assignment",
  }
}

export function createLeadRecord(payload, options = {}) {
  const now = options.now ? new Date(options.now) : new Date()
  const normalizedLead = normalizeLeadPayload(payload)
  const validationErrors = validateLeadPayload(normalizedLead)

  if (validationErrors.length > 0) {
    return {
      ok: false,
      errors: validationErrors,
    }
  }

  const duplicate = detectDuplicateLead(normalizedLead, options.existingLeads || sampleLeads)
  const assignment = assignLead(normalizedLead, options.employees || sampleEmployees)
  const leadId = payload.id || buildLeadId(now, options.sequence || sampleLeads.length + 1)
  const followUpDate = payload.followUpDate || addHours(now, DEFAULT_FOLLOW_UP_HOURS).toISOString()

  const lead = {
    id: leadId,
    ...normalizedLead,
    assignedEmployeeId: assignment.assignedEmployee?.id || null,
    assignedEmployeeName: assignment.assignedEmployee?.name || null,
    assignedDepartmentId: assignment.department.id,
    assignedDepartmentName: assignment.department.name,
    status: payload.status && leadStatuses.includes(payload.status) ? payload.status : "New",
    followUpDate,
    timestamp: now.toISOString(),
    duplicateOfLeadId: duplicate?.id || null,
  }

  return {
    ok: true,
    lead,
    duplicate,
    assignment,
    activity: buildLeadActivity({
      leadId,
      status: lead.status,
      employeeName: assignment.assignedEmployee?.name || "System",
      note: duplicate
        ? `Possible duplicate of ${duplicate.id}; routed for review.`
        : `Lead created from ${lead.source} and assigned by ${assignment.strategy}.`,
      timestamp: now.toISOString(),
    }),
  }
}

export function buildLeadActivity({ leadId, status, employeeName, note, timestamp }) {
  return {
    id: `act-${leadId}-${Date.parse(timestamp) || Date.now()}`,
    leadId,
    status,
    employeeName,
    note,
    timestamp,
  }
}

export function convertLeadToClient(lead, backendExecutive = sampleEmployees.find((employee) => employee.role === "Backend Executive")) {
  return {
    client: {
      id: lead.id.replace("GVL", "GVC"),
      name: lead.companyName || lead.name,
      email: lead.email,
      mobile: lead.mobile,
      city: lead.city,
      state: lead.state,
      serviceHistory: [lead.serviceInterested].filter(Boolean),
      notes: lead.notes,
      sourceLeadId: lead.id,
      assignedBackendExecutiveId: backendExecutive?.id || null,
      assignedBackendExecutiveName: backendExecutive?.name || null,
    },
    serviceCase: {
      id: lead.id.replace("GVL", "GVS"),
      clientId: lead.id.replace("GVL", "GVC"),
      serviceName: lead.serviceInterested || "General business service",
      status: "Documentation Pending",
      assignedTo: backendExecutive?.name || "Backend team",
    },
    billingAccount: {
      clientId: lead.id.replace("GVL", "GVC"),
      status: "Pending invoice",
      outstandingAmount: 0,
    },
  }
}

export function summarizeLeadPipeline(leads = sampleLeads) {
  return leadStatuses.map((status) => ({
    status,
    count: leads.filter((lead) => lead.status === status).length,
  }))
}

function normalizePhone(value = "") {
  return String(value).replace(/\D/g, "")
}

function buildLeadId(date, sequence) {
  return `GVL-${date.getUTCFullYear()}-${String(sequence).padStart(3, "0")}`
}

function addHours(date, hours) {
  return new Date(date.getTime() + hours * 60 * 60 * 1000)
}
