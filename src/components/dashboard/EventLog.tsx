import DashboardSection from './DashboardSection'

import { eventLogs } from '../../features/monitoring/data/events'

function EventLog() {
  return (
    <DashboardSection
      title="Live Event Log"
      subtitle="Operational activity"
    >
      <div className="space-y-4">
        {eventLogs.map((event) => (
          <div
            key={event.id}
            className="
              flex items-start gap-4
              rounded-xl border border-border
              bg-slate-900/50 p-4
            "
          >
            <div
              className="
                mt-1 h-2 w-2 rounded-full
                bg-success
              "
            />

            <div>
              <p className="font-medium">
                {event.message}
              </p>

              <p
                className="
                  mt-1 text-sm
                  text-textMuted
                "
              >
                {event.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </DashboardSection>
  )
}

export default EventLog