import { Menu } from 'lucide-react'

import { useSidebar } from '../../hooks/useSidebar'

import NotificationBell from '../../components/notifications/NotificationBell'

import ShiftSwitcher from '../../components/shift/ShiftSwitcher'

function Topbar() {
  const toggleSidebar =
  useSidebar(
    (state) =>
      state.toggleSidebar
  )

  return (
    <header
      className="
        flex h-[80px]
        items-center justify-between
        border-b border-slate-800
        bg-card px-8
      "
    >
      <div>
        <button
          onClick={toggleSidebar}
          className="
            rounded-xl border border-border
            p-2 lg:hidden
          "
        >
          <Menu size={20} />
        </button>
        <h2 className="text-xl font-semibold">
          Coal Hauling Monitoring
        </h2>

        <p className="text-sm text-slate-400">
          Real-time operational dashboard
        </p>
      </div>

      <div className="flex items-center gap-8">
        <div>
          <p className="text-sm text-slate-400">
            Shift
          </p>

          <h3 className="font-semibold">
            DAY SHIFT
          </h3>
        </div>

        <div>
          <p className="text-sm text-slate-400">
            Active Fleet
          </p>

          <h3 className="font-semibold text-success">
            24 Units
          </h3>
        </div>

        <div className="flex items-center gap-4">
          <ShiftSwitcher />

          <NotificationBell />

          <div
            className="
              h-10 w-10 rounded-full
              bg-primary
            "
          />
        </div>
      </div>
    </header>
  )
}

export default Topbar