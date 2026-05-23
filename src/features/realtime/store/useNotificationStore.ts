import { create } from 'zustand'

import type {
  Notification,
} from '../types/notification'

type NotificationStore = {
  notifications: Notification[]

  addNotification: (
    notification: Notification
  ) => void
}

export const useNotificationStore =
  create<NotificationStore>((set) => ({
    notifications: [
      {
        id: 1,

        title:
          'Fuel Warning',

        description:
          'HD-785-002 fuel below threshold',

        level: 'WARNING',

        createdAt: '10:42',
      },
    ],

    addNotification: (
      notification
    ) =>
      set((state) => ({
        notifications: [
          notification,
          ...state.notifications,
        ],
      })),
  }))