import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import DashboardSection from '../DashboardSection'

import { fuelData } from '../../../features/monitoring/data/fuel'

function FuelChart() {
  return (
    <DashboardSection
      title="Fuel Monitoring"
      subtitle="Fleet fuel percentage"
    >
      <ResponsiveContainer
        width="100%"
        height={320}
      >
        <BarChart data={fuelData}>
          <XAxis
            dataKey="name"
            stroke="#94A3B8"
          />

          <YAxis stroke="#94A3B8" />

          <Tooltip />

          <Bar
            dataKey="fuel"
            fill="#22C55E"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </DashboardSection>
  )
}

export default FuelChart