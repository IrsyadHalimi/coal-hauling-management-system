import type { LatLngTuple } from 'leaflet'

interface RouteItem {
  name: string
  position: LatLngTuple // Mengunci array agar wajib berisi tepat 2 angka [lat, lng]
}

export const haulingRoute: RouteItem[] = [
  {
    name: 'PIT',
    // Lokasi Pit Tambang di area pedalaman Satui (Bukit Baru / Satui Barat)
    position: [-3.706499, 115.4179], 
  },
  {
    name: 'ROM',
    // Lokasi Stockpile / ROM intermediate sebelum ke pelabuhan
    position: [-3.78200, 115.48500],
  },
  {
    name: 'PORT',
    // Lokasi Port / Terminal Coal dekat pesisir Muara Satui
    position: [-3.807048, 115.496864],
  },
]