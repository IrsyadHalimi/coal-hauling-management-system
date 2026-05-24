import { create } from 'zustand'

import { persist } from 'zustand/middleware'

type SidebarStore = {
  isOpen: boolean

  toggleSidebar: () => void

  closeSidebar: () => void
}

export const useSidebar =
  create<SidebarStore>()(
    persist(
      (set) => ({
      isOpen: false,

      toggleSidebar: () =>
        set((state) => ({
          isOpen: !state.isOpen,
        })),

      closeSidebar: () =>
        set({
          isOpen: false,
        }),
      }),
      {
        name:
          'coal-hauling-sidebar',
      },
    )
  )