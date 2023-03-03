import { Plus } from "phosphor-react";

export function ServicesBox() {
  return (
    <main className="flex-1 bg-blue-100 p-8 rounded-lg">
      <header className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Serviços</h2>

        <button className="bg-blue-600 font-bold text-white px-4 py-3 rounded-lg flex items-center justify-between gap-3 hover:bg-blue-700 transition">
          <span>
            <Plus weight="bold" className="text-white text-xl" />
          </span>
          Adicionar planilha
        </button>
      </header>
    </main>
  )
}