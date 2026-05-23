import {
  createBrowserRouter,
} from 'react-router-dom'

import DashboardLayout from '../../components/layouts/DashboardLayout'

import DashboardPage from '../../pages/DashboardPage'
import DispatchPage from '../../pages/DispatchPage'
import FleetMonitoringPage from '../../pages/FleetMonitoringPage'
import ProductionPage from '../../pages/ProductionPage'
import TripsPage from '../../pages/TripsPage'

export const router =
  createBrowserRouter([
    {
      path: '/',
      element: <DashboardLayout />,

      children: [
        {
          index: true,
          element: <DashboardPage />,
        },

        {
          path: 'fleet-monitoring',
          element: <FleetMonitoringPage />,
        },

        {
          path: 'trips',
          element: <TripsPage />,
        },

        {
          path: 'dispatch',
          element: <DispatchPage />,
        },

        {
          path: 'production',
          element: <ProductionPage />,
        },
      ],
    },
  ])