export function Footer() {
  return (
    <footer className="flex items-center justify-between">
      <span>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </span>

      <div className="flex gap-1">
        <button className="w-8 h-8 rounded-md font-bold bg-blue-600 text-white">1</button>
        <button className="w-8 h-8 rounded-md font-bold bg-blue-300">2</button>
        <span className="w-8 h-8 flex items-end justify-center text-xl">...</span>
        <button className="w-8 h-8 rounded-md font-bold bg-blue-300">20</button>
      </div>
    </footer>
  )
}