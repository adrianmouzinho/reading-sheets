import { SquaresFour, UserList } from "phosphor-react";
import { NavLink } from "./NavLink";

export function Sidebar() {
  return (
    <aside className="w-full max-w-[16rem] flex flex-col gap-3">
      <div className="flex flex-col gap-8">
        <h3 className="text-sm font-bold text-zinc-800">GERAL</h3>

        <div className="flex flex-col gap-3">
          <NavLink 
            icon={<SquaresFour className="text-2xl text-blue-500" />} 
            href="/dashboard"
          >
            Dashboard
          </NavLink>

          <NavLink 
            icon={<UserList className="text-2xl text-blue-500" />} 
            href="/services"
          >
            Atendimentos
          </NavLink>
        </div>
      </div>
    </aside>
  )
}