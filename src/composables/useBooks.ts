import { ref, computed } from 'vue'

export interface Book {
  id: string
  title: string
  author: string
  price: number
  stock: number
  isbn?: string
  genre?: string
  cover?: string
  subtitle?: string
  year?: number
}

const STORAGE_KEY = 'libreria_books'

const SEED_BOOKS: Book[] = [
  {
    id: '1',
    title: 'Meditaciones',
    author: 'Marco Aurelio',
    isbn: '978-8424918842',
    genre: 'Filosofía',
    stock: 45,
    price: 24.90,
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnCq1JhTqyrEkkUREWCi0YCWMOw-gHv26s2eu7kgJqSV6nquFuxW_lm429q7StlR5utcCEXPfZyzxnUB6wKmMxvMoAiEATGIjVk4DV6RvmRwLHUDBogVzAlaNUmgeuNm_WukX-9DYVOkKzriS1D4MLrM3q56tiiO-bwRfvss8CVgiYFzJCbviqixLDtuzmNV_9rL_zxKdpeY_4XstL0oAKVl49V_ePCgwhBdI1xlmYa-pbage7B4DeZo5SCo4KCNHOo4E8yWasaGr6',
    subtitle: 'Edición de Coleccionista'
  },
  {
    id: '2',
    title: 'El Hobbit',
    author: 'J.R.R. Tolkien',
    isbn: '978-8445073803',
    genre: 'Fantasía',
    stock: 8,
    price: 18.50,
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOoFBzOfTGMZxsBWFBxExvhoFDAdmckyXHpJ2vBufANHYrKBafBOq5aHFlpVk7etpXqnUBvh-xD58UhLwCr_DyC7mna2fvICnjlxdEYGF29JpBykc6aOtgbK3ILB0HFSSvitwlVyug8pYgJj8C7NaTbeiWG0shxQvv9k6EQo0lSklAlObwLl2folCaDxv0EiQ8dqIZQ_Q6798N8HwoB8tJEpBYGn4cJfNKSA8UjOsD1J71eFb_nfqW7wc-YnBw7H6sJZs2sSgKS0mt',
    subtitle: 'Tapa Dura'
  },
  {
    id: '3',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    isbn: '978-8499926223',
    genre: 'Historia',
    stock: 0,
    price: 22.00,
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb4pzL-xoY2VwvCCd6JdawFrdqMEdQ2FpX7K4Mk1VyPc4oTv4_kVEiQgXbV_s2ZWbqqK05PIy4iVVwjJEpdIjKBF3vfAreQ5VY_UpS39YU70xs2IlyyCUiz_puuiSdsJgpJatVVZnOTX4Buvi8bQ4IoxdKCzgZSC0wAZroV9Rv9YWNNL8sITGY6w1gTBMPaipsvvky_LvbIQNsEl0gXk4df54EEukm65RtNc0MHcmcRsBQKSqRPkwua_dv3V69i_MKaHGPVu9EjU0W',
    subtitle: 'Historia de la humanidad'
  },
  {
    id: '4',
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    isbn: '978-8497592208',
    genre: 'Ficción',
    stock: 22,
    price: 19.95,
    cover: '',
    subtitle: 'Edición conmemorativa'
  },
  {
    id: '5',
    title: 'El Principito',
    author: 'Antoine de Saint-Exupéry',
    isbn: '978-8498381498',
    genre: 'Ficción',
    stock: 35,
    price: 12.50,
    cover: '',
    subtitle: 'Edición ilustrada'
  }
]

function loadBooks(): Book[] {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch {
      return [...SEED_BOOKS]
    }
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_BOOKS))
  return [...SEED_BOOKS]
}

const books = ref<Book[]>(loadBooks())

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books.value))
}

export function useBooks() {
  const searchQuery = ref('')

  const filteredBooks = computed(() => {
    const q = searchQuery.value.toLowerCase().trim()
    if (!q) return books.value
    return books.value.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        (b.isbn && b.isbn.includes(q))
    )
  })

  const totalBooks = computed(() => books.value.length)
  const lowStockBooks = computed(() => books.value.filter((b) => b.stock > 0 && b.stock <= 10).length)
  const outOfStockBooks = computed(() => books.value.filter((b) => b.stock === 0).length)

  function addBook(book: Omit<Book, 'id'>) {
    const newBook: Book = {
      ...book,
      id: Date.now().toString()
    }
    books.value.unshift(newBook)
    persist()
    return newBook
  }

  function deleteBook(id: string) {
    books.value = books.value.filter((b) => b.id !== id)
    persist()
  }

  return {
    books,
    searchQuery,
    filteredBooks,
    totalBooks,
    lowStockBooks,
    outOfStockBooks,
    addBook,
    deleteBook
  }
}
