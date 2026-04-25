import { NextResponse } from "next/server";
import { loadNews } from "@/lib/content";

export const runtime = "edge";
export const revalidate = 60;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const limit = parseInt(searchParams.get("limit") || "50", 10);
    const offset = parseInt(searchParams.get("offset") || "0", 10);

    const news = await loadNews();
    let items = news.items;

    if (category) {
      items = items.filter((item) =>
        item.category.toLowerCase() === category.toLowerCase()
      );
    }

    const total = items.length;
    items = items.slice(offset, offset + limit);

    return NextResponse.json({
      items,
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
      { error: "Failed to load news items" },
      { status: 500 }
    );
  }
}
