import { Header } from './components/Header'
import { Main } from './components/Main'

export function App() {
  
  return (
    <div className="w-screen h-screen">
      <div className="w-full max-w-7xl mx-auto my-8 flex flex-col gap-8 items-center max-[1280px]:px-4">

        <Header />
        <Main />
        
      </div>
    </div>
  )
}
