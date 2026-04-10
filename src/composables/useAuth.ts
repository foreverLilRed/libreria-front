import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isAuthenticated = ref(localStorage.getItem('isAuthenticated') === 'true')
const currentUser = ref(localStorage.getItem('currentUser') || '')

export function useAuth() {
  const router = useRouter()

  function login(username: string, _password: string) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        isAuthenticated.value = true
        currentUser.value = username || 'Elena Curator'
        localStorage.setItem('isAuthenticated', 'true')
        localStorage.setItem('currentUser', currentUser.value)
        resolve()
      }, 800)
    })
  }

  function logout() {
    isAuthenticated.value = false
    currentUser.value = ''
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('currentUser')
    router.push('/login')
  }

  return {
    isAuthenticated,
    currentUser,
    login,
    logout
  }
}
