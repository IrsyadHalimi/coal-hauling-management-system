import {
  createBrowserRouter,
} from 'react-router-dom'

import DashboardLayout from '../../components/layouts/DashboardLayout'

const DashboardPage = lazy(
  () => import('../../pages/DashboardPage')
)

const FleetMonitoringPage = lazy(
  () =>
    import(
      '../../pages/FleetMonitoringPage'
    )
)

const TripsPage = lazy(
  () => import('../../pages/TripsPage')
)

const DispatchPage = lazy(
  () =>
    import('../../pages/DispatchPage')
)

const ProductionPage = lazy(
  () =>
    import('../../pages/ProductionPage')
)

import { lazy, Suspense } from 'react'

export const router =
  createBrowserRouter([
    {
      path: '/',
      element: (
        <Suspense fallback={<div>Loading...</div>}> 
          <DashboardLayout />
        </Suspense>
      ),

      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<div>Loading...</div>}> 
              <DashboardPage />
            </Suspense>
          ),
        },

        {
          path: 'fleet-monitoring',
          element: (
            <Suspense fallback={<div>Loading...</div>}> 
              <FleetMonitoringPage />
            </Suspense>
          ),
        },

        {
          path: 'trips',
          element: (
            <Suspense fallback={<div>Loading...</div>}> 
              <TripsPage />
            </Suspense>
          ),
        },

        {
          path: 'dispatch',
          element: (
            <Suspense fallback={<div>Loading...</div>}> 
              <DispatchPage />
            </Suspense>
          ),
        },

        {
          path: 'production',
          element: (
            <Suspense fallback={<div>Loading...</div>}> 
              <ProductionPage />
            </Suspense>
          ),
        },
      ],
    },
  ])