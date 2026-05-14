/**
 * Google Apps Script — append website leads to "Website Leads Form"
 *
 * Setup:
 * 1. Open your sheet → Extensions → Apps Script
 * 2. Paste this file’s code into Code.gs (replace default)
 * 3. Project Settings (gear) → Script properties → Add property:
 *    Name: WEBHOOK_SECRET   Value: (create a long random string, same as GOOGLE_SHEET_WEBHOOK_SECRET on Vercel)
 * 4. Deploy → New deployment → Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the Web app URL → set as GOOGLE_SHEET_WEBHOOK_URL in hosting env
 *
 * Columns (Sheet1): A DateTime | B Phone | C Name | D Email | E Services | F Message
 */
var SPREADSHEET_ID = "10VDFY6TrshbPEWoO2rd3seKZYXsEpYJ4Ureg9qAEqz4"
var SHEET_NAME = "Sheet1"

function doPost(e) {
  try {
    var secret = PropertiesService.getScriptProperties().getProperty("WEBHOOK_SECRET")
    var data = JSON.parse(e.postData.contents)

    if (!secret || data.secret !== secret) {
      return jsonResponse({ ok: false, error: "unauthorized" })
    }

    var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME)
    var now = new Date()
    sheet.appendRow([
      now,
      String(data.phone || ""),
      String(data.name || ""),
      String(data.email || ""),
      String(data.service || ""),
      String(data.message || ""),
    ])

    return jsonResponse({ ok: true })
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err.message || err) })
  }
}

function doGet() {
  return ContentService.createTextOutput("Growthera contact webhook is deployed. Use POST.")
}

function jsonResponse(obj) {
  var out = ContentService.createTextOutput(JSON.stringify(obj))
  out.setMimeType(ContentService.MimeType.JSON)
  return out
}
