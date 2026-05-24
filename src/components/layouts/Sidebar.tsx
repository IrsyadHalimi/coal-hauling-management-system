import {
  Activity,
  BarChart3,
  ClipboardList,
  LayoutDashboard,
  Truck,
} from 'lucide-react'

import NavigationItem from './NavigationItem'



function Sidebar() {
  const role = 'DISPATCHER'
  const menus = [
    {
      label: 'Dashboard',
      icon: <LayoutDashboard size={20} />,
      to: '/',

      visible:
      role === 'DISPATCHER',
    },
    {
      label: 'Fleet Monitoring',
      icon: <Truck size={20} />,
      to: '/fleet-monitoring',

      visible:
      role === 'DISPATCHER',
    },
    {
      label: 'Trips',
      icon: <ClipboardList size={20} />,
      to: '/trips',

      visible:
      role === 'DISPATCHER',
    },
    {
      label: 'Dispatch',
      icon: <Activity size={20} />,
      to: '/dispatch',

      visible:
      role === 'DISPATCHER',
    },
    {
      label: 'Production',
      icon: <BarChart3 size={20} />,
      to: '/production',

      visible:
      role === 'DISPATCHER',
    },
  ]

  return (
    <aside
      className="
        flex h-screen w-[280px]
        flex-col border-r border-slate-800
        bg-sidebar p-5
      "
    >
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-primary">
          GARUDA
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Coal Hauling Management
        </p>
      </div>

      <nav className="flex flex-1 flex-col gap-2">
        {menus
          .filter((menu) => menu.visible)
          .map((menu) => (
          <NavigationItem
            key={menu.label}
            label={menu.label}
            icon={menu.icon}
            to={menu.to}
          />
        ))}
      </nav>

      <div
        className="
          rounded-2xl border border-slate-700
          bg-slate-800/50 p-4
        "
      >
        <p className="text-sm text-slate-400">
          System Status
        </p>

        <div className="mt-2 flex items-center gap-2">
          <div
            className="
              h-2 w-2 rounded-full
              bg-success
            "
          />

          <span className="text-sm">
            Operational
          </span>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar