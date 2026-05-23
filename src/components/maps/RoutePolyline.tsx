import {
  CircleMarker,
  Polyline,
  Tooltip,
} from 'react-leaflet'

import { haulingRoute } from '../../features/monitoring/constants/haulingRoute'

function RoutePolyline() {
  const positions =
    haulingRoute.map(
      (route) => route.position
    )

  return (
    <>
      <Polyline
        positions={positions}
        pathOptions={{
          color: '#F59E0B',
          weight: 5,
        }}
      />

      {haulingRoute.map((route) => (
        <CircleMarker
          key={route.name}
          center={route.position}
          radius={10}
          pathOptions={{
            color: '#ffffff',
            fillColor: '#F59E0B',
            fillOpacity: 1,
          }}
        >
          <Tooltip permanent>
            {route.name}
          </Tooltip>
        </CircleMarker>
      ))}
    </>
  )
}

export default RoutePolyline