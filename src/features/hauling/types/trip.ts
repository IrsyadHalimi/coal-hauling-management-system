export type TripStatus =
  | 'LOADING'
  | 'IN_TRANSIT'
  | 'QUEUE'
  | 'UNLOADING'
  | 'COMPLETED'

export type Trip = {
  id: string

  truckCode: string

  origin: string
  destination: string

  tonnage: number

  startTime: string

  estimatedArrival: string

  status: TripStatus
}