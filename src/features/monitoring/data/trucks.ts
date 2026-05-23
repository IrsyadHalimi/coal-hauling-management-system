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
    // Sedang berjalan di jalur hauling antara PIT dan ROM
    position: {
      lat: -3.724143,
      lng: 115.431633,
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
    // Berada tepat di lokasi PIT (Tambang)
    position: {
      lat: -3.75108,
      lng: 115.46800,
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
    // Berjalan pulang di jalur antara PORT dan ROM
    position: {
      lat: -3.79850,
      lng: 115.49750,
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
    // Mengantre di dekat area ROM / Stockpile
    position: {
      lat: -3.78110,
      lng: 115.48420,
    },
  },
  {
    id: 'TRK-005',
    code: 'HD-785-005',
    driver: 'Siti Nurhaliza',
    capacity: 120,
    tonnage: 120,
    fuelLevel: 60,
    speed: 0,
    cycleTime: 52,
    status: 'LOADING',
    // Mengantre di dekat area ROM / Stockpile
    position: {
      lat: -3.706499,
      lng: 115.4179,
    },
  },
]