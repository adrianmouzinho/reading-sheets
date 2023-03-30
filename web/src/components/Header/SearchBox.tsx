import { MagnifyingGlass } from "phosphor-react";

export function SearchBox() {
  return (
    <div className="px-8 py-4 min-w-[25rem] bg-blue-100 flex items-center rounded-full max-[780px]:flex-1">
      <input 
        type="text"
        placeholder="Buscar na plataforma"
        className="text-zinc-800 placeholder:text-blue-600 flex-1"
      />

      <MagnifyingGlass className="text-blue-600 text-xl ml-4" />
    </div>
  )
}