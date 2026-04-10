export interface OpenLibraryResult {
  title: string
  author: string
  year?: number
  cover?: string
  coverId?: number
  isbn?: string
}

interface OpenLibraryDoc {
  title?: string
  author_name?: string[]
  first_publish_year?: number
  cover_i?: number
  isbn?: string[]
}

export async function searchOpenLibrary(query: string): Promise<OpenLibraryResult[]> {
  const encoded = encodeURIComponent(query)
  const res = await fetch(`https://openlibrary.org/search.json?q=${encoded}&limit=12`)

  if (!res.ok) {
    throw new Error('Error al buscar en Open Library')
  }

  const data = await res.json()

  return (data.docs as OpenLibraryDoc[])
    .filter((doc) => doc.title)
    .slice(0, 12)
    .map((doc) => ({
      title: doc.title || 'Sin título',
      author: doc.author_name?.[0] || 'Autor desconocido',
      year: doc.first_publish_year,
      coverId: doc.cover_i,
      cover: doc.cover_i
        ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
        : undefined,
      isbn: doc.isbn?.[0]
    }))
}
