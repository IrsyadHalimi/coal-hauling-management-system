import Sidebar from './Sidebar'

import { useSidebar } from '../../hooks/useSidebar'

function MobileSidebar() {
  const {
    isOpen,
    closeSidebar,
  } = useSidebar()

  if (!isOpen) {
    return null
  }

  return (
    <>
      <div
        className="
          fixed inset-0 z-40
          bg-black/60
        "
        onClick={closeSidebar}
      />

      <div
        className="
          fixed left-0 top-0 z-50
          h-screen
        "
      >
        <Sidebar />
      </div>
    </>
  )
}

export default MobileSidebar