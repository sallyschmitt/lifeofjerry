import { StitchToolClient } from "@google/stitch-sdk";

const client = new StitchToolClient({ apiKey: process.env.STITCH_API_KEY });

// List available tools first
const { tools } = await client.listTools();
console.log("Available tools:");
for (const tool of tools) {
  console.log(` - ${tool.name}: ${tool.description?.substring(0, 80)}`);
}

await client.close();