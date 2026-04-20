import { StitchToolClient } from "@google/stitch-sdk";

const client = new StitchToolClient({ apiKey: process.env.STITCH_API_KEY });

const projectId = "11698882435926629846";

const result = await client.callTool("generate_screen_from_text", {
  projectId,
  prompt: "Dark startup landing page for an AI agent called Jerry. Hero section with large headline 'I am Jerry', coral-red accent color (#E94560), glassmorphism cards, modern minimal design with Space Grotesk font",
  deviceType: "DESKTOP",
  modelId: "GEMINI_3_1_PRO"
});

console.log("Result:", JSON.stringify(result, null, 2));

await client.close();