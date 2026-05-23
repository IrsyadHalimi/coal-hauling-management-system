import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import DashboardSection from '../DashboardSection'

import { productionData } from '../../../features/monitoring/data/production'

function ProductionChart() {
  return (
    <DashboardSection
      title="Production Overview"
      subtitle="Hourly coal production"
    >
      <ResponsiveContainer
        width="100%"
        height={320}
      >
        <AreaChart data={productionData}>
          <defs>
            <linearGradient
              id="production"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="#F59E0B"
                stopOpacity={0.8}
              />

              <stop
                offset="95%"
                stopColor="#F59E0B"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#334155"
          />

          <XAxis
            dataKey="hour"
            stroke="#94A3B8"
          />

          <YAxis stroke="#94A3B8" />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="production"
            stroke="#F59E0B"
            fillOpacity={1}
            fill="url(#production)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </DashboardSection>
  )
}

export default ProductionChart