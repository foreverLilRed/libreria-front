import fs from 'fs/promises';

async function parse() {
  const dir = 'src/views';
  const files = await fs.readdir(dir);
  for (const file of files) {
    if (file.endsWith('.vue')) {
      const filePath = `${dir}/${file}`;
      const content = await fs.readFile(filePath, 'utf-8');
      
      const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
      
      if (bodyMatch && bodyMatch[1]) {
        let insideBody = bodyMatch[1];
        // Ensure no stray html/head tags remains from template replacement, though our regex isolates body content
        const newVue = `<template>\n  <div class="font-inter bg-[#fcf9f4] text-[#1c1c19] min-h-screen">\n    ${insideBody}\n  </div>\n</template>\n\n<script setup>\n</script>\n\n<style scoped>\n</style>\n`;
        await fs.writeFile(filePath, newVue, 'utf-8');
        console.log(`Parsed ${filePath}`);
      }
    }
  }
}

parse();
