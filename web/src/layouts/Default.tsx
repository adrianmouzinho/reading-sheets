import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export function Default() {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="w-full max-w-7xl my-8 grid grid-cols-layout max-[780px]:grid-cols-mobile">
        
        <Sidebar />

        <div className="flex flex-col gap-10 max-[780px]:gap-6">
          <Header />

          <Outlet />
        </div>
        
      </div>
    </div>
  )
}