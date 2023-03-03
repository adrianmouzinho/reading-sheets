interface LinkProps {
  active?: boolean
  title: string
}

export function Link({ active = false, title}: LinkProps) {
  return (
    <a 
      href="/"
      className={`${active && 'bg-blue-200'} font-semibold text-blue-900 px-4 py-2 rounded-full flex items-center justify-between gap-3 hover:bg-blue-100 transition`}
    >
      {title}
    </a>
  )
}