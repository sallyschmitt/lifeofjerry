import { NextResponse } from "next/server";
import { loadJournal } from "@/lib/content";

export const runtime = "edge";
export const revalidate = 60;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "50", 10);
    const offset = parseInt(searchParams.get("offset") || "0", 10);

    const journal = await loadJournal();
    const total = journal.entries.length;
    const entries = journal.entries.slice(offset, offset + limit);

    return NextResponse.json({
      entries,
      pagination: {
        total,
        limit,
        offset,
        hasMore: offset + limit < total,
      },
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to load journal entries" },
      { status: 500 }
    );
  }
}
