import type { ReactNode } from "react";

import {
  Link,
  useLocation,
} from "react-router-dom";

type Props = {
  icon: ReactNode
  label: string
  to: string
}

function NavigationItem({
  icon,
  label,
  to,
}: Props) {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link
      to={to}
      className={`
        flex items-center gap-3
        rounded-xl px-4 py-3
        transition-all duration-200

        ${
          isActive
            ? 'bg-primary text-black'
            : `
              text-slate-300
              hover:bg-slate-800
            `
        }
      `}
    >
      {icon}

      <span className="font-medium">
        {label}
      </span>
    </Link>
  )
}

export default NavigationItem