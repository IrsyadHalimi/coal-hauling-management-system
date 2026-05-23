import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import type {
  ColumnDef,
} from '@tanstack/react-table'

import { trips } from '../../features/hauling/data/trips'

import type { Trip } from '../../features/hauling/types/trip'

const columns: ColumnDef<Trip>[] = [
  {
    accessorKey: 'truckCode',
    header: 'Truck',
  },

  {
    accessorKey: 'origin',
    header: 'Origin',
  },

  {
    accessorKey: 'destination',
    header: 'Destination',
  },

  {
    accessorKey: 'tonnage',
    header: 'Coal (T)',
  },

  {
    accessorKey: 'startTime',
    header: 'Start',
  },

  {
    accessorKey: 'estimatedArrival',
    header: 'ETA',
  },

  {
    accessorKey: 'status',
    header: 'Status',
  },
]

function TripTable() {
  const table = useReactTable({
    data: trips,

    columns,

    getCoreRowModel:
      getCoreRowModel(),
  })

  return (
    <div
      className="
        overflow-hidden rounded-2xl
        border border-border
        bg-card
      "
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead
            className="
              border-b border-border
              bg-slate-900/70
            "
          >
            {table
              .getHeaderGroups()
              .map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(
                    (header) => (
                      <th
                        key={header.id}
                        className="
                          px-6 py-4 text-left
                          text-sm font-semibold
                          text-textSecondary
                        "
                      >
                        {flexRender(
                          header.column.columnDef
                            .header,

                          header.getContext()
                        )}
                      </th>
                    )
                  )}
                </tr>
              ))}
          </thead>

          <tbody>
            {table
              .getRowModel()
              .rows.map((row) => (
                <tr
                  key={row.id}
                  className="
                    border-b border-border
                    transition-colors
                    hover:bg-slate-900/40
                  "
                >
                  {row
                    .getVisibleCells()
                    .map((cell) => (
                      <td
                        key={cell.id}
                        className="
                          px-6 py-4 text-sm
                        "
                      >
                        {flexRender(
                          cell.column.columnDef
                            .cell,

                          cell.getContext()
                        )}
                      </td>
                    ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TripTable