import { stitch } from "@google/stitch-sdk";

// Create a project for Jerry's website redesign
const project = await stitch.callTool("create_project", { 
  title: "Life of Jerry - AI Agent Business Website" 
});

console.log("Project created:", JSON.stringify(project, null, 2));