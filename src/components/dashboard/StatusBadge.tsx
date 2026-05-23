import type { TruckStatus } from '../../features/monitoring/types/truck'

type Props = {
  status: TruckStatus
}

const statusStyles = {
  IDLE: 'bg-slate-500',

  LOADING: 'bg-warning text-black',

  IN_TRANSIT:
    'bg-success text-black',

  QUEUE: 'bg-orange-500',

  UNLOADING: 'bg-blue-500',

  RETURNING: 'bg-purple-500',
}

function StatusBadge({
  status,
}: Props) {
  return (
    <div
      className={`
        inline-flex rounded-full
        px-3 py-1 text-xs
        font-semibold

        ${statusStyles[status]}
      `}
    >
      {status}
    </div>
  )
}

export default StatusBadge