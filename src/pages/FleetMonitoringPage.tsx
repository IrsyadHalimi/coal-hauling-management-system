import MonitoringOverview from '../components/dashboard/MonitoringOverview'

function FleetMonitoringPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Fleet Monitoring
        </h1>

        <p className="mt-2 text-textSecondary">
          Real-time coal hauling fleet
          monitoring and operational
          tracking.
        </p>
      </div>

      <MonitoringOverview />
    </div>
  )
}

export default FleetMonitoringPage