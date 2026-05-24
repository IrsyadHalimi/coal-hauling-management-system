import EventLog from '../components/dashboard/EventLog'

import FuelChart from '../components/dashboard/charts/FuelChart'
import ProductionChart from '../components/dashboard/charts/ProductionChart'
import AnalyticsFilter from '../components/dashboard/AnalyticsFilter'

function ProductionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Production Analytics
        </h1>

        <p className="mt-2 text-textSecondary">
          Coal production performance,
          fuel utilization, and
          operational analytics.
        </p>
      </div>

      <AnalyticsFilter />
      
      <section
        className="
          grid grid-cols-1 gap-6
          xl:grid-cols-2
        "
      >
        <ProductionChart />

        <FuelChart />
      </section>

      <EventLog />
    </div>
  )
}

export default ProductionPage