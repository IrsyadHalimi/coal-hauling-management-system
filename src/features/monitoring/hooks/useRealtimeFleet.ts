import { useEffect } from 'react'

import { useFleetStore } from '../store/useFleetStore'

export function useRealtimeFleet() {
  const simulateRealtime =
    useFleetStore(
      (state) =>
        state.simulateRealtime
    )

  useEffect(() => {
    const interval = setInterval(() => {
      simulateRealtime()
    }, 3000)

    return () => clearInterval(interval)
  }, [simulateRealtime])
}