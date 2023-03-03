import { useState } from 'react'
import { CustomerService } from '../types/CustomerService'
import { ChartBox } from './ChartBox'
import { ServicesBox } from './ServicesBox'

import { Sidebar } from './Sidebar'

export function Main() {
  const [list, setList] = useState<CustomerService[]>([])

  // async function getList() {
  //   const response = await fetch('http://localhost:3333/customerServices')
  //   const data = await response.json()
  //   setList(data)
  // }

  // getList()

  return (
    <div className="w-full flex">
      <Sidebar />

      <ChartBox />
      {/* <ServicesBox /> */}
    </div>
  )
}