const alerts = [
  {
    id: 1,
    level: 'WARNING',
    message:
      'HD-785-002 fuel below 60%',
  },

  {
    id: 2,
    level: 'CRITICAL',
    message:
      'Queue congestion detected at ROM 1',
  },

  {
    id: 3,
    level: 'INFO',
    message:
      'Production target reached 82%',
  },
]

function AlertPanel() {
  return (
    <div
      className="
        rounded-2xl border border-border
        bg-card p-6
      "
    >
      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          Operational Alerts
        </h2>

        <p className="text-sm text-textSecondary">
          Fleet operational notification
        </p>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="
              rounded-xl border border-border
              bg-slate-900/50 p-4
            "
          >
            <div
              className="
                flex items-start gap-3
              "
            >
              <div
                className={`
                  mt-1 h-2 w-2 rounded-full

                  ${
                    alert.level ===
                    'CRITICAL'
                      ? 'bg-danger'
                      : alert.level ===
                          'WARNING'
                        ? 'bg-warning'
                        : 'bg-success'
                  }
                `}
              />

              <div>
                <p className="font-medium">
                  {alert.message}
                </p>

                <p
                  className="
                    mt-1 text-sm
                    text-textMuted
                  "
                >
                  {alert.level}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AlertPanel