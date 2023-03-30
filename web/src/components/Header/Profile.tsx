export function Profile() {
  return (
    <div className="flex items-center gap-4 max-[780px]:hidden">
      <div className="flex flex-col text-right">
        <strong className="text-zinc-800">Adrian Mouzinho</strong>
        <span className="text-sm text-zinc-500">
          adrian@ibltelecom.com
        </span>
      </div>

      <div className="w-10 h-10 rounded-full overflow-hidden bg-blue-400">
        <img 
          src="https://github.com/adrianMouzinho.png" 
          alt="Avatar" 
          className="w-full"
        />
      </div>
    </div>
  )
}