import { useEffect, useState } from 'react'

import { Plus } from 'phosphor-react'
import { Footer } from './Footer'
import { ServicesList } from './ServicesList'

import { CustomerService } from '../../types/CustomerService'

export function ServicesBox() {
  const [services, setServices] = useState<CustomerService[]>([])

  function fecthingData(limit: number = 10, offset: number = 0) {
    useEffect(() => {
      fetch(`http://localhost:3333/customerServices?limit=${limit}&offset=${offset}`)
        .then(response => response.json())
        .then(data => setServices(data))
    }, [])
  }

  fecthingData(10, 10)

  return (
    <main className="flex-1 flex flex-col gap-4 bg-blue-100 p-8 rounded-lg">
      <header className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Serviços</h2>

        <button className="bg-blue-600 font-bold text-white px-4 py-3 rounded-lg flex items-center justify-between gap-3 hover:bg-blue-700 transition">
          <span>
            <Plus weight="bold" className="text-white text-xl" />
          </span>
          Adicionar planilha
        </button>
      </header>

      <ServicesList data={services} />

      <Footer />
    </main>
  )
}