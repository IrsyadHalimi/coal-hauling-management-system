import {
  MapContainer,
  TileLayer,
} from 'react-leaflet'

import TruckMarker from './TruckMarker'
import RoutePolyline from './RoutePolyline'

import { useFleetStore } from '../../features/monitoring/store/useFleetStore'

import { useState } from 'react'

function HaulingMap() {
  const [fullscreen, setFullscreen] =
  useState(false)

  const trucks =
    useFleetStore(
      (state) => state.trucks
    )

  return (
    <div
      className={`
        overflow-hidden rounded-2xl
        border border-border

        ${
          fullscreen
            ? 'fixed inset-0 z-50 bg-background'
            : ''
        }
      `}
    >
      <MapContainer
        center={[-3.78200, 115.48500]}
        zoom={12} 
        scrollWheelZoom={true}
        className="h-[600px] w-full"
      >
        <button
        onClick={() =>
          setFullscreen(
            !fullscreen
          )
        }
        className="
          absolute right-4 top-4 z-[1001]
          rounded-xl bg-card px-4 py-2
          text-sm
        "
      >{fullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</button>
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