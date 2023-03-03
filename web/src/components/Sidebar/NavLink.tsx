import { ReactNode } from 'react'

interface NavLinkProps {
  icon: ReactNode;
  children: string;
  href?: string;
}

export function NavLink({icon, children, href}:NavLinkProps) {
  return (
    <div className="flex items-center gap-3 cursor-pointer group">
      {icon}
      <span className="font-medium group-hover:underline">
        {children}
      </span>
    </div>
  )
}