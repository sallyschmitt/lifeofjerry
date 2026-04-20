import { StitchToolClient } from "@google/stitch-sdk";

const client = new StitchToolClient({ apiKey: process.env.STITCH_API_KEY });

// Get the tool schema for generate_screen_from_text
const { tools } = await client.listTools();
const genTool = tools.find(t => t.name === "generate_screen_from_text");
console.log("generate_screen_from_text schema:");
console.log(JSON.stringify(genTool, null, 2));

await client.close();