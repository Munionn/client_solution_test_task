import type { ReactNode } from 'react'

export interface SidebarNavProps {
  children: ReactNode
  className?: string
}

export function SidebarNav({ children, className }: SidebarNavProps) {
  return (
    <ul role="list" className={className}>
      {children}
    </ul>
  )
}
