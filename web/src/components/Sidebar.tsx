import { Globe, SquaresFour, UserList } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-10 max-[780px]:items-center max-[780px]:gap-4">
      <h1 className="text-3xl h-14 leading-[56px] font-bold text-zinc-800 w-full flex items-center gap-1 max-w-[16rem]">
        <Globe className="text-3xl text-blue-500 max-[780px]:flex-1" />
        <span className="max-[780px]:hidden">Dashibl</span>
      </h1>

      <div className="flex flex-col gap-6">
        <h3 className="text-sm font-bold text-zinc-800 max-[780px]:hidden">GERAL</h3>

        <nav className="flex flex-col gap-3">
          <NavLink 
            to="/dashboard"
            className="flex items-center gap-3 cursor-pointer group"
          >
            <SquaresFour className="text-2xl max-[700px]:text-3xl" />
            <span className="font-medium group-hover:underline max-[780px]:hidden">Dashboard</span>
          </NavLink>

          <NavLink 
            to="/services"
            className="flex items-center gap-3 cursor-pointer group"
          >
            <UserList className="text-2xl max-[700px]:text-3xl" />
            <span className="font-medium group-hover:underline max-[780px]:hidden">Atendimentos</span>
          </NavLink>
        </nav>
      </div>
    </aside>
  )
}