import { recursiveReaddir } from "https://deno.land/x/recursive_readdir/mod.ts";
import { join, extname } from "https://deno.land/std/path/mod.ts";
import { titleCase } from "https://deno.land/x/case/mod.ts";

const markdownFiles = (await recursiveReaddir(join("."))).filter(
  (file: string) => extname(file) === ".md"
);

async function iterateFolder(path: any) {
  let indexFile = `# ${titleCase(path)} `;
  for await (const f of Deno.readDir(path)) {
    if (!f.isFile){
      iterateFolder(`${path}/${f.name}`)
      continue
    }
    if (f.name.includes("readme")) continue;
    indexFile += `\n- [${titleCase(f.name.split('.').slice(0, -1).join('.')
    )}](${f.name})`;
  }
  await Deno.writeTextFile(`${path}/readme.md`, indexFile);
}

for (const file of markdownFiles) {
  const filePath = file.split("/")
  filePath.pop()
  const path = filePath[0]
  if(!path) continue;
  if (path === "readme.md" || path === "SUMMARY.md") continue;
  iterateFolder(`${path}`)
}

