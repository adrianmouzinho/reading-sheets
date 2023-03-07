import { Route, Routes } from 'react-router-dom'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { ChartBox } from './components/ChartBox'
import { ServicesBox } from './components/ServicesBox'

export function App() {
  // const [list, setList] = useState<CustomerService[]>([])
  // const [routes, setRoutes] = useState<Route>('dashboard')

  // async function getList() {
  //   const response = await fetch('http://localhost:3333/customerServices')
  //   const data = await response.json()
  //   setList(data)
  // }

  
  return (
    <div className="w-screen h-screen">
      <div className="w-full max-w-7xl mx-auto my-8 flex flex-col gap-8 items-center max-[1280px]:px-4">

        <Header />
        
        <div className="w-full flex">
          <Sidebar />

          <Routes>
            <Route path='/' element={<ChartBox />} />
            <Route path='/dashboard' element={<ChartBox />} />
            <Route path='/services' element={<ServicesBox />} />
          </Routes>
        </div>
        
      </div>
    </div>
  )
}
