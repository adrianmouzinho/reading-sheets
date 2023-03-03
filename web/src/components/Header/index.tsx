import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
  return (
    <header className="w-full flex items-center">
      <h1 className="text-3xl font-bold text-zinc-800 w-full max-w-[16rem]">
        dashibl<span className="text-blue-600">.</span>
      </h1>

      <div className="flex-1">
        <SearchBox />
      </div>

      <Profile />
    </header>
  )
}