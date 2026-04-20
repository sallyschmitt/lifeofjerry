import { StitchToolClient } from "@google/stitch-sdk";

const client = new StitchToolClient({ apiKey: process.env.STITCH_API_KEY });

// Use the raw tool to generate a screen
const result = await client.callTool("generate_screen_from_text", {
  parent: "projects/11698882435926629846",
  prompt: "Dark startup landing page for an AI agent called Jerry. Hero with large headline, coral-red accent, glassmorphism cards, minimal modern design.",
  deviceType: "DESKTOP"
});

console.log("Result:", JSON.stringify(result, null, 2));

await client.close();