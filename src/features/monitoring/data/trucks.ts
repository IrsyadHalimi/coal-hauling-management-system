import type { Truck } from '../types/truck'

export const initialTrucks: Truck[] = [
  {
    id: 'TRK-001',
    code: 'HD-785-001',
    driver: 'Budi Santoso',

    capacity: 120,
    tonnage: 98,

    fuelLevel: 78,
    speed: 42,

    cycleTime: 38,

    status: 'IN_TRANSIT',

    position: {
      lat: -0.245,
      lng: 117.423,
    },
  },

  {
    id: 'TRK-002',
    code: 'HD-785-002',
    driver: 'Andi Saputra',

    capacity: 120,
    tonnage: 115,

    fuelLevel: 56,
    speed: 0,

    cycleTime: 45,

    status: 'LOADING',

    position: {
      lat: -0.241,
      lng: 117.420,
    },
  },

  {
    id: 'TRK-003',
    code: 'HD-785-003',
    driver: 'Rizki Hidayat',

    capacity: 120,
    tonnage: 0,

    fuelLevel: 88,
    speed: 36,

    cycleTime: 41,

    status: 'RETURNING',

    position: {
      lat: -0.252,
      lng: 117.431,
    },
  },

  {
    id: 'TRK-004',
    code: 'HD-785-004',
    driver: 'Agus Pratama',

    capacity: 120,
    tonnage: 120,

    fuelLevel: 64,
    speed: 0,

    cycleTime: 49,

    status: 'QUEUE',

    position: {
      lat: -0.248,
      lng: 117.427,
    },
  },
]