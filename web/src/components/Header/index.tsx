import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
  return (
    <header className="w-full flex items-center justify-between max-[780px]:pr-4">
      <SearchBox />

      <Profile />
    </header>
  )
}