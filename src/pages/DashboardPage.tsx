import KPICard from '../components/dashboard/KPICard'
import MonitoringOverview from '../components/dashboard/MonitoringOverview'

import { useRealtimeFleet } from '../features/monitoring/hooks/useRealtimeFleet'

function DashboardPage() {
  useRealtimeFleet()

  return (
    <div className="space-y-8">
      <section
        className="
          grid grid-cols-1 gap-6
          md:grid-cols-2
          xl:grid-cols-4
        "
      >
        <KPICard
          title="Total Production"
          value="12,540 T"
          subtitle="+8.2% from yesterday"
        />

        <KPICard
          title="Active Trucks"
          value="24 Units"
          subtitle="18 hauling active"
        />

        <KPICard
          title="Average Cycle"
          value="42 Minutes"
          subtitle="Target 45 minutes"
        />

        <KPICard
          title="Fuel Consumption"
          value="5,820 L"
          subtitle="Operationally normal"
        />
      </section>

      <MonitoringOverview />
    </div>
  )
}

export default DashboardPage