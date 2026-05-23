import type {
  Truck,
  TruckStatus,
} from '../types/truck'

const statuses: TruckStatus[] = [
  'LOADING',
  'IN_TRANSIT',
  'QUEUE',
  'UNLOADING',
  'RETURNING',
]

export function simulateTruck(
  truck: Truck
): Truck {
  const randomStatus =
    statuses[
      Math.floor(
        Math.random() * statuses.length
      )
    ]

  const speed =
    randomStatus === 'LOADING' ||
    randomStatus === 'QUEUE' ||
    randomStatus === 'UNLOADING'
      ? 0
      : Math.floor(Math.random() * 55)

  return {
    ...truck,

    status: randomStatus,

    speed,

    fuelLevel: Math.max(
      truck.fuelLevel -
        Math.random() * 0.5,
      10
    ),

    cycleTime:
      35 + Math.floor(Math.random() * 15),

    position: {
      lat:
        truck.position.lat +
        (Math.random() - 0.5) * 0.002,

      lng:
        truck.position.lng +
        (Math.random() - 0.5) * 0.002,
    },
  }
}