import { useEffect } from 'react'

import { useThemeStore } from '../store/useThemeStore'

export function useApplyTheme() {
  const theme =
    useThemeStore(
      (state) => state.theme
    )

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      theme
    )
  }, [theme])
}