function AnalyticsFilter() {
  return (
    <div className="flex gap-3">
      <select
        className="
          rounded-xl border border-border
          bg-card px-4 py-2
          text-sm
        "
      >
        <option>Today</option>

        <option>This Week</option>

        <option>This Month</option>
      </select>

      <select
        className="
          rounded-xl border border-border
          bg-card px-4 py-2
          text-sm
        "
      >
        <option>All PIT</option>

        <option>PIT A1</option>

        <option>PIT B4</option>
      </select>
    </div>
  )
}

export default AnalyticsFilter