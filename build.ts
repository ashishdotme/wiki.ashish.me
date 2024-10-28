import { recursiveReaddir } from "https://deno.land/x/recursive_readdir/mod.ts";
import { join, extname } from "https://deno.land/std/path/mod.ts";
import { titleCase } from "https://deno.land/x/case/mod.ts";

const markdownFiles = (await recursiveReaddir(join("."))).filter(
  (file: string) => extname(file) === ".md"
);

const getName = (name: string) => {
  if (name.includes(".")) {
    return titleCase(name.split('.').slice(0, -1).join('.'))
  }
  return titleCase(name)
}

const getHeader = (name: string) => {
  if(!name){
    return ''
  }
  if(name.includes("/")){
    return titleCase(name.split("/").pop() || '')
  }
  return titleCase(name)
}

const iterateFolder = async (path: any) => {
  let indexFile = `# ${(getHeader(path))} `;
  for await (const f of Deno.readDir(path)) {
    if (!f.isFile) {
      iterateFolder(`${path}/${f.name}`)
    }
    if (f.name.includes("readme")) continue;
    indexFile += `\n- [${getName(f.name)}](${f.name})`;
  }
  await Deno.writeTextFile(`${path}/readme.md`, indexFile);
}

for (const file of markdownFiles) {
  const filePath = file.split("/")
  filePath.pop()
  const path = filePath[0]
  if (!path) continue;
  if (path === "readme.md" || path === "SUMMARY.md") continue;
  iterateFolder(`${path}`)
}

