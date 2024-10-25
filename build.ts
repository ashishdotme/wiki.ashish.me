import { recursiveReaddir } from "https://deno.land/x/recursive_readdir/mod.ts";
import { join, extname } from "https://deno.land/std/path/mod.ts";
import { titleCase } from "https://deno.land/x/case/mod.ts";

const markdownFiles = (await recursiveReaddir(join("."))).filter(
  (file: string) => extname(file) === ".md"
);

for (const file of markdownFiles) {
  var path = file.split("/")[0];
  console.log(path);
  let indexFile = `# ${path} `;
  if(!path) continue;
  if (path === "README.md" || path === "SUMMARY.md") continue;
  for await (const f of Deno.readDir(path)) {
    if (!f.isFile) continue;
    indexFile += `\n- [${titleCase(f.name.split('.').slice(0, -1).join('.')
    )}](${f.name})`;
  }

  await Deno.writeTextFile(`${path}/readme.md`, indexFile);
}

