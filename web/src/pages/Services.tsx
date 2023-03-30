import { useEffect, useState } from 'react'
import { Plus } from 'phosphor-react'

import { Footer } from '../components/Services/Footer'
import { ServicesList } from '../components/Services/ServicesList'
import { UploadModel } from '../components/UploadModel'

export function Services() {
  const [isModelOpen, setIsModelOpen] = useState(false)

  function handleOpenModal() {
    setIsModelOpen(true)
  }

  function handleCloseModal() {
    setIsModelOpen(false)
  }

  return (
    <>
      <UploadModel
        visible={isModelOpen}
        onClose={handleCloseModal}
      />

      <main className="flex flex-col gap-4 bg-blue-100 p-8 rounded-lg">
        <header className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Serviços</h2>

          <button 
            onClick={handleOpenModal}
            className="bg-blue-600 font-bold text-white px-4 py-3 rounded-lg flex items-center justify-between gap-3 cursor-pointer hover:bg-blue-700 transition"
          >
            <Plus weight="bold" className="text-white text-xl" />
            Adicionar planilha
          </button>
        </header>

        <ServicesList />

        {/* <Footer /> */}
      </main>
    </>
  )
}