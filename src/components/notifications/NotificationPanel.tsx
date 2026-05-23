import { useNotificationStore } from '../../features/realtime/store/useNotificationStore'

function NotificationPanel() {
  const notifications =
    useNotificationStore(
      (state) =>
        state.notifications
    )

  return (
    <div
      className="
        absolute right-0 top-14 z-[1001]
        w-[360px]
        rounded-2xl border border-border
        bg-card p-4 shadow-2xl
      "
    >
      <div className="mb-4">
        <h3 className="font-semibold">
          Notifications
        </h3>
      </div>

      <div className="space-y-3">
        {notifications
          .slice(0, 6)
          .map((notification) => (
            <div
              key={notification.id}
              className="
                rounded-xl border border-border
                bg-slate-900/50 p-4
              "
            >
              <div
                className="
                  flex items-start
                  justify-between
                "
              >
                <div>
                  <h4 className="font-medium">
                    {notification.title}
                  </h4>

                  <p
                    className="
                      mt-1 text-sm
                      text-textSecondary
                    "
                  >
                    {
                      notification.description
                    }
                  </p>
                </div>

                <span
                  className="
                    text-xs text-textMuted
                  "
                >
                  {
                    notification.createdAt
                  }
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default NotificationPanel