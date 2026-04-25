import { promises as fs } from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content");
const OUTPUT_FILE = path.join(process.cwd(), "src", "types", "content.ts");

async function readJsonFile(filename: string): Promise<Record<string, unknown>> {
  const filePath = path.join(CONTENT_DIR, filename);
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

function inferType(value: unknown, indent: number = 2): string {
  const pad = " ".repeat(indent);
  if (value === null) return "null";
  if (Array.isArray(value)) {
    if (value.length === 0) return "unknown[]";
    const types = new Set(value.map((v) => inferType(v, indent + 2)));
    if (types.size === 1) return `${Array.from(types)[0]}[]`;
    return `(${Array.from(types).join(" | ")})[]`;
  }
  if (typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>);
    if (entries.length === 0) return "Record<string, unknown>";
    const props = entries
      .map(([key, val]) => `${pad}  ${key}: ${inferType(val, indent + 2)}`)
      .join(";\n");
    return `{\n${props}\n${pad}}`;
  }
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  if (typeof value === "boolean") return "boolean";
  return "unknown";
}

async function generateTypes() {
  const files = ["config.json", "journal.json", "news.json", "activities.json", "todos.json"];
  const interfaces: string[] = [];
  const exports: string[] = [];

  for (const file of files) {
    const name = path.basename(file, ".json");
    const className = name.charAt(0).toUpperCase() + name.slice(1) + "Data";
    const data = await readJsonFile(file);
    const typeDef = inferType(data);
    interfaces.push(`export interface ${className} ${typeDef}`);
    exports.push(className);
  }

  const content = `// ─────────────────────────────
// Auto-generated from content/*.json
// Run: npx tsx scripts/generate-types.ts
// ─────────────────────────────

${interfaces.join("\n\n")}
`;

  await fs.mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
  await fs.writeFile(OUTPUT_FILE, content, "utf-8");

  console.log(`✅ Generated ${OUTPUT_FILE}`);
  console.log(`📦 Exports: ${exports.join(", ")}`);
}

generateTypes().catch((err) => {
  console.error("❌ Type generation failed:", err);
  process.exit(1);
});
