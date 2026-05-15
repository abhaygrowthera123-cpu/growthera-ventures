import { NextResponse } from "next/server"
import { createLeadRecord, summarizeLeadPipeline } from "@/lib/erp/leadEngine"
import {
  dashboardMetrics,
  departments,
  leadFields,
  leadSources,
  leadStatuses,
  sampleLeads,
} from "@/lib/erp/platformData"

export async function GET() {
  return NextResponse.json({
    success: true,
    persistence: "design-ready",
    message:
      "Connect this endpoint to PostgreSQL using docs/erp-database-schema.sql for durable storage.",
    leadFields,
    leadSources,
    leadStatuses,
    departments,
    metrics: dashboardMetrics,
    pipeline: summarizeLeadPipeline(sampleLeads),
    leads: sampleLeads,
  })
}

export async function POST(request) {
  try {
    const payload = await request.json()
    const result = createLeadRecord(payload)

    if (!result.ok) {
      return NextResponse.json(
        {
          success: false,
          errors: result.errors,
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        persistence: "ephemeral-preview",
        message:
          "Lead normalized, duplicate-checked, routed, assigned, and activity-logged. Persist with the PostgreSQL schema before production use.",
        lead: result.lead,
        assignment: result.assignment,
        duplicate: result.duplicate
          ? {
              id: result.duplicate.id,
              name: result.duplicate.name,
              companyName: result.duplicate.companyName,
            }
          : null,
        activity: result.activity,
      },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Unable to create lead.",
      },
      { status: 500 }
    )
  }
}
