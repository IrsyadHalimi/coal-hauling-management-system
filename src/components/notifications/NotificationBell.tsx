import { useState } from 'react'

import { Bell } from 'lucide-react'

import NotificationPanel from './NotificationPanel'

import { useNotificationStore } from '../../features/realtime/store/useNotificationStore'

function NotificationBell() {
  const [open, setOpen] =
    useState(false)

  const notifications =
    useNotificationStore(
      (state) =>
        state.notifications
    )

  return (
    <div className="relative">
      <button
        onClick={() =>
          setOpen(!open)
        }
        className="
          relative rounded-xl
          border border-border
          p-2
        "
      >
        <Bell size={20} />

        <span
          className="
            absolute -right-1 -top-1
            flex h-5 w-5
            items-center justify-center
            rounded-full bg-danger
            text-[10px] font-bold
          "
        >
          {notifications.length}
        </span>
      </button>

      {open && <NotificationPanel />}
    </div>
  )
}

export default NotificationBell