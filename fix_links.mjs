import fs from 'fs/promises';

const linkMap = {
  'Dashboard': '/',
  'Colecciones': '/inventario-completo',
  'Ventas': '/historial-ventas',
  'Usuarios': '/clientes',
  'Reportes': '/', // Same as Dashboard for now
  'Nueva Entrada': '/nueva-obra',
  'Cerrar Sesión': '/login',
  'Ayuda': '#', // Nowhere for now
};

async function fixLinks() {
  const dir = 'src/views';
  const files = await fs.readdir(dir);
  for (const file of files) {
    if (file.endsWith('.vue')) {
      const filePath = `${dir}/${file}`;
      let content = await fs.readFile(filePath, 'utf-8');
      
      // Replace <a ... href="..."> with <router-link ... to="...">
      // We will parse with regex
      content = content.replace(/<a([^>]*?)href="([^"]*)"([^>]*)>([\s\S]*?)<\/a>/g, (match, prefix, href, suffix, inner) => {
        let toPath = href;
        
        // Let's guess the path based on text content
        for (const [text, path] of Object.entries(linkMap)) {
          if (inner.includes(text)) {
            toPath = path;
            break;
          }
        }
        
        // Also map some common buttons if they are <a>
        if (inner.includes('Cobrar') || inner.includes('Checkout')) toPath = '/pos';

        return `<router-link${prefix}to="${toPath}"${suffix}>${inner}</router-link>`;
      });

      await fs.writeFile(filePath, content, 'utf-8');
      console.log(`Fixed links in ${filePath}`);
    }
  }
}

fixLinks();
