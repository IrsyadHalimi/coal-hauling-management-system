function SkeletonCard() {
  return (
    <div
      className="
        animate-pulse rounded-2xl
        border border-border
        bg-card p-6
      "
    >
      <div
        className="
          h-4 w-32 rounded
          bg-slate-700
        "
      />

      <div
        className="
          mt-4 h-10 w-24 rounded
          bg-slate-700
        "
      />

      <div
        className="
          mt-4 h-3 w-40 rounded
          bg-slate-700
        "
      />
    </div>
  )
}

export default SkeletonCard