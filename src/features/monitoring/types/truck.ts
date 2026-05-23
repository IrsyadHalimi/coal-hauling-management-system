export type TruckStatus =
  | 'IDLE'
  | 'LOADING'
  | 'IN_TRANSIT'
  | 'QUEUE'
  | 'UNLOADING'
  | 'RETURNING'

export type Truck = {
  id: string
  code: string
  driver: string

  capacity: number
  tonnage: number

  fuelLevel: number
  speed: number

  cycleTime: number

  status: TruckStatus

  position: {
    lat: number
    lng: number
  }
}