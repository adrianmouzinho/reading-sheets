import { ReactNode } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

interface NavLinkProps {
  icon: ReactNode;
  children: string;
  href: string;
}

export function NavLink({icon, children, href}:NavLinkProps) {
  const { pathname } = useResolvedPath(href)

  const isActive = useMatch({
    path: pathname,
    end: true,
  })


  return (
    <Link 
      to={href}
      className="flex items-center gap-3 cursor-pointer group"
    >
      {icon}
      <span className={isActive ? 'font-medium text-blue-500 group-hover:underline' : 'font-medium group-hover:underline'}>
        {children}
      </span>
    </Link>
  )
}