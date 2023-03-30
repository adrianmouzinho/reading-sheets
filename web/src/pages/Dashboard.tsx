import { useEffect, useState } from 'react'

import { PieChart } from '../components/Charts/Pie'
import { Count } from '../types/Count'

export function Dashboard() {
  const [counts, setCounts] = useState<Count | null>(null)

  function fecthingData(limit: number = 10, offset: number = 0) {
    useEffect(() => {
      fetch(`http://localhost:3333/customerServices/count`)
        .then(response => response.json())
        .then(data => setCounts(data))
    }, [])
  }

  fecthingData(10, 10)
  return (
    <main className="grid min-[780px]:grid-cols-2 gap-6 max-[780px]:grid-rows-2 max-[780px]:pr-4">
      <div className="bg-blue-100 p-8 rounded-lg">
        <strong className="block mb-4">
          Respostas
        </strong>

        <PieChart data={counts} />
      </div>

      <div className="bg-blue-100 p-8 rounded-lg">
        <strong className="block mb-4">
          Respostas
        </strong>

        <PieChart data={counts} />
      </div>
    </main>
  )
}