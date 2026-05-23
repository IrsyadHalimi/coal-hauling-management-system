import StatusBadge from './StatusBadge'

import type { Truck } from '../../features/monitoring/types/truck'

type Props = {
  truck: Truck
}

function FleetActivityCard({
  truck,
}: Props) {
  return (
    <div
      className="
        flex items-center justify-between
        rounded-2xl border border-slate-800
        bg-slate-900/60 p-4
      "
    >
      <div>
        <h3 className="font-semibold">
          {truck.code}
        </h3>

        <p className="text-sm text-slate-400">
          {truck.driver}
        </p>

        <p className="mt-2 text-xs text-slate-500">
          Fuel {truck.fuelLevel.toFixed(0)}%
        </p>
      </div>

      <div className="text-right">
        <StatusBadge status={truck.status} />

        <p className="mt-3 text-sm text-slate-400">
          {truck.speed} km/h
        </p>
      </div>
    </div>
  )
}

export default FleetActivityCard