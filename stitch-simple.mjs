import { stitch } from "@google/stitch-sdk";

const projectId = "11698882435926629846";
const project = stitch.project(projectId);

// Generate a simpler screen first
const screen = await project.generate(
  "Dark startup landing page for an AI agent called Jerry. Hero with large headline, coral-red accent, glassmorphism cards, minimal modern design.",
  "DESKTOP"
);

console.log("Screen generated!");
console.log("ID:", screen.id || screen.screenId);

const htmlUrl = await screen.getHtml();
const imageUrl = await screen.getImage();
console.log("HTML URL:", htmlUrl);
console.log("Image URL:", imageUrl);