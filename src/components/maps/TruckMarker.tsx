import L from 'leaflet'

import {
  Marker,
  Popup,
} from 'react-leaflet'

import type { Truck } from '../../features/monitoring/types/truck'

type Props = {
  truck: Truck
}

const truckIcon = new L.Icon({
  iconUrl:
    'https://cdn-icons-png.flaticon.com/512/3448/3448339.png',

  iconSize: [36, 36],
})

function TruckMarker({
  truck,
}: Props) {
  return (
    <Marker
      position={[
        truck.position.lat,
        truck.position.lng,
      ]}
      icon={truckIcon}
    >
      <Popup>
        <div className="min-w-[180px]">
          <h3 className="font-bold">
            {truck.code}
          </h3>

          <p>{truck.driver}</p>

          <hr className="my-2" />

          <p>
            Status:
            {' '}
            {truck.status}
          </p>

          <p>
            Speed:
            {' '}
            {truck.speed} km/h
          </p>

          <p>
            Fuel:
            {' '}
            {truck.fuelLevel.toFixed(0)}%
          </p>

          <p>
            Coal:
            {' '}
            {truck.tonnage} T
          </p>
        </div>
      </Popup>
    </Marker>
  )
}

export default TruckMarker