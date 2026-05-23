import FleetActivityCard from './FleetActivityCard'

import { useFleetStore } from '../../features/monitoring/store/useFleetStore'

import HaulingMap from '../../components/maps/HaulingMap'

function MonitoringOverview() {
  const trucks =
    useFleetStore(
      (state) => state.trucks
    )

  return (
    <section
      className="
        grid grid-cols-1 gap-6
        xl:grid-cols-[420px_1fr]
      "
    >
      <div
        className="
          rounded-2xl border border-slate-800
          bg-card p-6
        "
      >
        <div className="mb-5">
          <h2 className="text-xl font-semibold">
            Fleet Activity
          </h2>

          <p className="text-sm text-slate-400">
            Real-time hauling operation
          </p>
        </div>

        <div className="space-y-4">
          {trucks.map((truck) => (
            <FleetActivityCard
              key={truck.id}
              truck={truck}
            />
          ))}
        </div>
      </div>

      <HaulingMap />
    </section>
  )
}

export default MonitoringOverview