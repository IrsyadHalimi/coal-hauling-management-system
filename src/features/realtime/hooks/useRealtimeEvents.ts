import { useEffect } from 'react'

import { useNotificationStore } from '../store/useNotificationStore'

const messages = [
  {
    title: 'Truck Departed',

    description:
      'HD-785-001 departed from PIT A1',

    level: 'INFO',
  },

  {
    title: 'Fuel Alert',

    description:
      'HD-785-003 fuel below 40%',

    level: 'WARNING',
  },

  {
    title: 'Queue Congestion',

    description:
      'ROM 2 queue congestion detected',

    level: 'CRITICAL',
  },
]

export function useRealtimeEvents() {
  const addNotification =
    useNotificationStore(
      (state) =>
        state.addNotification
    )

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessage =
        messages[
          Math.floor(
            Math.random() *
              messages.length
          )
        ]

      addNotification({
        id: Date.now(),

        title:
          randomMessage.title,

        description:
          randomMessage.description,

        level:
          randomMessage.level as
            | 'INFO'
            | 'WARNING'
            | 'CRITICAL',

        createdAt:
          new Date().toLocaleTimeString(
            [],
            {
              hour: '2-digit',
              minute: '2-digit',
            }
          ),
      })
    }, 8000)

    return () =>
      clearInterval(interval)
  }, [addNotification])
}