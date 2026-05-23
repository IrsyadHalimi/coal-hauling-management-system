import {
  MapContainer,
  TileLayer,
} from 'react-leaflet'

import TruckMarker from './TruckMarker'
import RoutePolyline from './RoutePolyline'

import { useFleetStore } from '../../features/monitoring/store/useFleetStore'

function HaulingMap() {
  const trucks =
    useFleetStore(
      (state) => state.trucks
    )

  return (
    <div
      className="
        overflow-hidden rounded-2xl
        border border-slate-800 z-50
      "
    >
      <MapContainer
        center={[-3.78200, 115.48500]}
        zoom={12} 
        scrollWheelZoom={true}
        className="h-[600px] w-full"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <RoutePolyline />

        {trucks.map((truck) => (
          <TruckMarker
            key={truck.id}
            truck={truck}
          />
        ))}
      </MapContainer>
    </div>
  )
}

export default HaulingMap