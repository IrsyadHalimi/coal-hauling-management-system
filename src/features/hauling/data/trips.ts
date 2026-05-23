import type { Trip } from '../types/trip'

export const trips: Trip[] = [
  {
    id: 'TRIP-001',

    truckCode: 'HD-785-001',

    origin: 'PIT A1',
    destination: 'ROM 2',

    tonnage: 98,

    startTime: '10:12',
    estimatedArrival: '10:46',

    status: 'IN_TRANSIT',
  },

  {
    id: 'TRIP-002',

    truckCode: 'HD-785-002',

    origin: 'PIT B4',
    destination: 'ROM 1',

    tonnage: 120,

    startTime: '10:18',
    estimatedArrival: '10:52',

    status: 'LOADING',
  },

  {
    id: 'TRIP-003',

    truckCode: 'HD-785-003',

    origin: 'PIT C2',
    destination: 'PORT',

    tonnage: 110,

    startTime: '10:08',
    estimatedArrival: '10:44',

    status: 'QUEUE',
  },
]