import TripTable from '../components/tables/TripTable'

function TripsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Trip Management
        </h1>

        <p className="mt-2 text-textSecondary">
          Coal hauling trip monitoring
        </p>
      </div>

      <TripTable />
    </div>
  )
}

export default TripsPage