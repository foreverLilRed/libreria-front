import fs from 'fs/promises';

const urls = {
  "Reportes y Análisis": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzdjZDM1ZjIzYjc3MjQzNDA5NDY1ZGY4MWYzMTdlYmViEgsSBxCGxuPA8QEYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzgyMDkyMDk4MjUxNzc3ODg3NA&filename=&opi=89354086",
  "Historial y Detalle de Ventas": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzQyMzRlZDExMDA3YTQ4NWQ4MWI0Mjg0MjBiNzE5N2RmEgsSBxCGxuPA8QEYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzgyMDkyMDk4MjUxNzc3ODg3NA&filename=&opi=89354086",
  "Gestión de Inventario (Actualizado)": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2M0ODUzOTcyYTgyZjRhYmE5YzU4MThjMzhiNzM5ZTIyEgsSBxCGxuPA8QEYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzgyMDkyMDk4MjUxNzc3ODg3NA&filename=&opi=89354086",
  "Gestión de Clientes": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzM0ZmY3MzJiNjg0NDRlMjM5MzJlYjIxOWM2MmQ0NzA1EgsSBxCGxuPA8QEYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzgyMDkyMDk4MjUxNzc3ODg3NA&filename=&opi=89354086",
  "Library Login": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzlkZmY2ZDRjMjliMjQ1Nzc5ZGI1ZjllZWE5ZDA3YWE2EgsSBxCGxuPA8QEYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzgyMDkyMDk4MjUxNzc3ODg3NA&filename=&opi=89354086",
  "Registro de Nueva Obra": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzBmOGM5YjhiMzg2NjQzNTA4YmYyODk5ZDJhNGViZmQ0EgsSBxCGxuPA8QEYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzgyMDkyMDk4MjUxNzc3ODg3NA&filename=&opi=89354086",
  "Registro de Ventas (POS)": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzBjZTJjZTAwYWM0NTRmMDhiNThiNjVmNDgwNzM4OWU2EgsSBxCGxuPA8QEYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzgyMDkyMDk4MjUxNzc3ODg3NA&filename=&opi=89354086",
  "Gestión de Inventario Completa": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzk2NDk0NmUyZGMwMjQxMDVhY2E2N2E5NDYyZDRlYzRiEgsSBxCGxuPA8QEYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzgyMDkyMDk4MjUxNzc3ODg3NA&filename=&opi=89354086"
};

async function download() {
  await fs.mkdir('src/views', { recursive: true });
  for (const [name, url] of Object.entries(urls)) {
    console.log(`Downloading ${name}...`);
    const res = await fetch(url);
    const text = await res.text();
    // Parse pure html from response, just keeping the body content typically
    const titleClean = name.replace(/[^a-zA-Z0-9]/g, '');
    const outPath = `src/views/${titleClean}.vue`;
    const vueContent = `<template>\n  ${text.replace(/</g, '<')}\n</template>\n\n<script setup>\n</script>\n\n<style scoped>\n</style>\n`;
    await fs.writeFile(outPath, vueContent);
    console.log(`Saved ${outPath}`);
  }
}
download();
