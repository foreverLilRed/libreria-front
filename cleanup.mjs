import fs from 'fs/promises';

async function cleanup() {
  const dir = 'src/views';
  const files = await fs.readdir(dir);
  for (const file of files) {
    if (file.endsWith('.vue')) {
      const filePath = `${dir}/${file}`;
      let content = await fs.readFile(filePath, 'utf-8');
      
      if (file !== 'LibraryLogin.vue') {
        // Strip out the sidebars
        content = content.replace(/<aside[\s\S]*?<\/aside>/i, '');
        // Strip out the header
        content = content.replace(/<header[\s\S]*?<\/header>/i, '');
        
        // Strip out <main class="..."> and matching </main>
        // Use a simpler approach: 
        content = content.replace(/<main[^>]*>/i, '');
        const lastMainIndex = content.lastIndexOf('</main>');
        if (lastMainIndex !== -1) {
          content = content.substring(0, lastMainIndex) + content.substring(lastMainIndex + 7);
        }
      }

      // Strip out the outer formatting wrapper I added incorrectly for components in the layout
      content = content.replace('<div class="font-inter bg-[#fcf9f4] text-[#1c1c19] min-h-screen">', '');
      const lastDivIndex = content.lastIndexOf('</div>');
      if (lastDivIndex !== -1) {
        content = content.substring(0, lastDivIndex) + content.substring(lastDivIndex + 6);
      }

      // Clean up common comments that aren't needed anymore
      content = content.replace(/<!-- SideNavBar -->/gi, '');
      content = content.replace(/<!-- TopAppBar -->/gi, '');
      content = content.replace(/<!-- Main Content Canvas -->/gi, '');
      
      await fs.writeFile(filePath, content, 'utf-8');
      console.log(`Cleaned up layout references in ${filePath}`);
    }
  }
}

cleanup();
