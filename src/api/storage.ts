const USER_LOCALSTORAGE_KEY = 'lazyday_user';


export function getStoredUser(): any | null {
    const storedUser = localStorage.getItem(USER_LOCALSTORAGE_KEY)
    return storedUser ? JSON.parse(storedUser) : null
}
  
export function setStoredUser(user: any): void {
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user))
}
  
export function clearStoredUser(): void {
    localStorage.removeItem(USER_LOCALSTORAGE_KEY)
}