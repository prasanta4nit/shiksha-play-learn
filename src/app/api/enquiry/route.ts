import { NextRequest, NextResponse } from "next/server";

// Minimal enquiry endpoint. Validates and logs submissions server-side.
// TODO: connect to a real destination (email, CRM, Google Sheet, database)
// before launch — this currently only logs to the server console.
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { parentName, childName, phone, classInterested, website, formRenderedAt } = body;

  // Honeypot field — real users never fill a visually hidden field.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  // Basic bot heuristic: reject submissions filled in under 2 seconds.
  if (typeof formRenderedAt === "number" && Date.now() - formRenderedAt < 2000) {
    return NextResponse.json({ error: "Please try again." }, { status: 400 });
  }

  if (!parentName || !childName || !phone || !classInterested) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  console.log("New admission enquiry received:", {
    ...body,
    website: undefined,
    formRenderedAt: undefined,
  });

  return NextResponse.json({ ok: true });
}
