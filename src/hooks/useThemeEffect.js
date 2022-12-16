import { useEffect } from "react"
import CONFIG from 'morethan-log.config'

export const getTheme = () => {
  if (CONFIG.blog.theme !== 'auto') return CONFIG.blog.theme
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    return 'dark'
  } else {
    return 'light'
  }
}

const useThemeEffect = () => {
  useEffect(() => {
    if (typeof document !== 'object') return null
    if (getTheme() === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])
  return null
}

export default useThemeEffect
