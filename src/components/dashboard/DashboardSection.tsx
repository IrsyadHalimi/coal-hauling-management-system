import type { ReactNode } from 'react'

type Props = {
  title: string
  subtitle?: string
  children: ReactNode
}

function DashboardSection({
  title,
  subtitle,
  children,
}: Props) {
  return (
    <section
      className="
        rounded-2xl border border-border
        bg-card p-6
      "
    >
      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-1 text-sm text-textSecondary">
            {subtitle}
          </p>
        )}
      </div>

      {children}
    </section>
  )
}

export default DashboardSection