import type { Truck, TruckStatus } from '../types/truck'

// Kita ambil koordinat asli Satui sebagai referensi pergerakan
const LOCATIONS = {
  PIT: { lat: -3.75108, lng: 115.46800 },
  ROM: { lat: -3.78200, lng: 115.48500 },
  PORT: { lat: -3.81500, lng: 115.51000 },
}

const statuses: TruckStatus[] = [
  'LOADING',
  'IN_TRANSIT',
  'QUEUE',
  'UNLOADING',
  'RETURNING',
]

export function simulateTruck(truck: Truck): Truck {
  // 1. Tentukan status baru (bisa diacak atau pakai logika antrean)
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]

  // 2. Kecepatan nol jika sedang diam/antre/muat
  const speed =
    randomStatus === 'LOADING' ||
    randomStatus === 'QUEUE' ||
    randomStatus === 'UNLOADING'
      ? 0
      : Math.floor(30 + Math.random() * 25) // Kecepatan realistis truk tambang: 30-55 km/jam

  // 3. Logika Posisi Baru: Bergerak menuju target lokasi berdasarkan status
  let targetLat = truck.position.lat
  let targetLng = truck.position.lng

  if (randomStatus === 'LOADING') {
    // Menuju atau diam di PIT
    targetLat = LOCATIONS.PIT.lat
    targetLng = LOCATIONS.PIT.lng
  } else if (randomStatus === 'IN_TRANSIT') {
    // Sedang jalan bawa muatan (di antara PIT dan ROM)
    targetLat = (LOCATIONS.PIT.lat + LOCATIONS.ROM.lat) / 2
    targetLng = (LOCATIONS.PIT.lng + LOCATIONS.ROM.lng) / 2
  } else if (randomStatus === 'QUEUE' || randomStatus === 'UNLOADING') {
    // Mengantre atau bongkar di ROM / PORT
    const dest = Math.random() > 0.5 ? LOCATIONS.ROM : LOCATIONS.PORT
    targetLat = dest.lat
    targetLng = dest.lng
  } else if (randomStatus === 'RETURNING') {
    // Jalan pulang kosong (di antara PORT dan ROM menuju arah balik)
    targetLat = (LOCATIONS.ROM.lat + LOCATIONS.PORT.lat) / 2
    targetLng = (LOCATIONS.ROM.lng + LOCATIONS.PORT.lng) / 2
  }

  // Jarak pergerakan per tick (efek interpolasi halus agar tidak langsung "teleportasi")
  // Ditambah sedikit jitter (0.0003) agar antar truk tidak menumpuk di satu titik pixel yang sama
  const lerp = 0.1 // kecepatan berpindah posisi (0.1 = bergerak 10% lebih dekat ke target setiap interval)
  const jitter = () => (Math.random() - 0.5) * 0.0006 

  const nextLat = truck.position.lat + (targetLat - truck.position.lat) * lerp + jitter()
  const nextLng = truck.position.lng + (targetLng - truck.position.lng) * lerp + jitter()

  // 4. Update tonase otomatis berdasarkan status
  let tonnage = truck.tonnage
  if (randomStatus === 'LOADING' && tonnage === 0) tonnage = truck.capacity
  if (randomStatus === 'UNLOADING') tonnage = 0

  return {
    ...truck,
    status: randomStatus,
    speed,
    tonnage,
    fuelLevel: Math.max(truck.fuelLevel - Math.random() * 0.2, 10),
    cycleTime: 35 + Math.floor(Math.random() * 15),
    position: {
      lat: nextLat,
      lng: nextLng,
    },
  }
}