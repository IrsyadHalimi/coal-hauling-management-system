const dispatchData = [
  {
    unit: 'EX-1201',
    assignedTruck: 'HD-785-001',
    location: 'PIT A1',
  },

  {
    unit: 'EX-1202',
    assignedTruck: 'HD-785-002',
    location: 'PIT B4',
  },

  {
    unit: 'EX-1203',
    assignedTruck: 'HD-785-003',
    location: 'PIT C2',
  },
]

function DispatchBoard() {
  return (
    <div
      className="
        rounded-2xl border border-border
        bg-card p-6
      "
    >
      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          Dispatch Board
        </h2>

        <p className="text-sm text-textSecondary">
          Excavator assignment
        </p>
      </div>

      <div className="space-y-4">
        {dispatchData.map((item) => (
          <div
            key={item.unit}
            className="
              rounded-xl border border-border
              bg-slate-900/50 p-4
            "
          >
            <div
              className="
                flex items-center
                justify-between
              "
            >
              <div>
                <h3 className="font-semibold">
                  {item.unit}
                </h3>

                <p
                  className="
                    mt-1 text-sm
                    text-textSecondary
                  "
                >
                  {item.location}
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm">
                  Assigned Truck
                </p>

                <h4
                  className="
                    mt-1 font-semibold
                    text-primary
                  "
                >
                  {item.assignedTruck}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DispatchBoard