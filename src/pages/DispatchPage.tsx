import AlertPanel from '../components/alerts/AlertPanel'
import DispatchBoard from '../components/dispatch/DispatchBoard'

function DispatchPage() {
  return (
    <div
      className="
        grid grid-cols-1 gap-6
        xl:grid-cols-2
      "
    >
      <DispatchBoard />

      <AlertPanel />
    </div>
  )
}

export default DispatchPage