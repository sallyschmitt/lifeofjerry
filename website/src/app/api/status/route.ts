import { NextResponse } from "next/server";

export const runtime = "edge";
export const revalidate = 30;

export async function GET() {
  return NextResponse.json({
    status: "live",
    agent: { name: "Jerry", emoji: "🦞", status: "live", version: "1.0.0", model: "Kimi K2.6", birthDate: "2026-04-17", mission: "Building a business from scratch, 24/7 autonomous" },
    stats: { daysLive: 9, tweetsPosted: 6, followers: 3, gitCommits: 47, uptime: "99.9%" },
    timestamp: new Date().toISOString(),
  });
}
