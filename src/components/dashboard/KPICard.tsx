import { memo } from 'react'

type Props = {
  title: string
  value: string
  subtitle: string
}

function KPICardComponent({
  title,
  value,
  subtitle,
}: Props) {
  return (
    <div
      className="
        rounded-2xl border border-slate-800
        bg-card p-6
      "
    >
      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h2 className="mt-4 text-3xl font-bold">
        {value}
      </h2>

      <p className="mt-3 text-sm text-slate-500">
        {subtitle}
      </p>
    </div>
  )
}

const KPICard = memo(KPICardComponent)

export default KPICard