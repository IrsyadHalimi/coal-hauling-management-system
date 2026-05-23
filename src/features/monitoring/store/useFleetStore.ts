import { create } from 'zustand'

import { initialTrucks } from '../data/trucks'

import { simulateTruck } from '../utils/fleetSimulation'

import type { Truck } from '../types/truck'

type FleetStore = {
  trucks: Truck[]

  simulateRealtime: () => void
}

export const useFleetStore =
  create<FleetStore>((set) => ({
    trucks: initialTrucks,

    simulateRealtime: () => {
      set((state) => ({
        trucks: state.trucks.map(
          simulateTruck
        ),
      }))
    },
  }))