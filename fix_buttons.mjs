import fs from 'fs/promises';

async function fixButtons() {
  const dir = 'src/views';
  const files = await fs.readdir(dir);
  for (const file of files) {
    if (file.endsWith('.vue')) {
      const filePath = `${dir}/${file}`;
      let content = await fs.readFile(filePath, 'utf-8');
      
      // Convert specific buttons to router-link
      content = content.replace(
        /<button([^>]*)>([\s\S]*?)Nueva Entrada([\s\S]*?)<\/button>/g,
        '<router-link to="/nueva-obra"$1>$2Nueva Entrada$3</router-link>'
      );
      
      content = content.replace(
        /<button([^>]*)>([\s\S]*?)Cobrar([\s\S]*?)<\/button>/g,
        '<router-link to="/pos"$1>$2Cobrar$3</router-link>'
      );

      await fs.writeFile(filePath, content, 'utf-8');
      console.log(`Fixed buttons in ${filePath}`);
    }
  }
}

fixButtons();
