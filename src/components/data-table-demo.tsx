import DataTable from './ui/data-table'
import { ColumnDef } from '@tanstack/react-table'
import { paymentData } from '@/constant/payment'

import type { Payment } from '@/types'
import { Button } from './ui/button'
import { ArrowUpDown } from 'lucide-react'

const columns: ColumnDef<Payment>[] = [
  {
    header: 'Status',
    accessorKey: 'status',
  },

  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    header: 'Amount',
    accessorKey: 'amount',
    cell: ({ row }) => {
      const amount = row.getValue('amount')
      console.log(amount)
      return amount
    },
  },
]

function DataTableDemo() {
  return (
    <div>
      <DataTable columns={columns} data={paymentData} />
    </div>
  )
}

export default DataTableDemo
