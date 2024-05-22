import { DrawerDemo } from '@/components/client/drawer_cli'
import Link from 'next/link'
import React from 'react'

export default function Dashboard() {
  return (
    <div>
        <h1>Dashboard</h1>
        <DrawerDemo/>
        <Link href="/">
            Dashboard
        </Link>
        <Link href="dashboard/invoces">
            invoces
        </Link>
    </div>
  )
}
