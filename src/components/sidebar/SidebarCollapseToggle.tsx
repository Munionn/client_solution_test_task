
import type { ReactNode } from 'react'
import { useSidebar } from './SidebarContext'


export interface SidebarCollapseToggleProps {
  className?: string
  children?: (collapsed: boolean) => ReactNode
}


export function SidebarCollapseToggle({
  className,
  children,
}: SidebarCollapseToggleProps) {
  const { collapsed, toggleCollapsed } = useSidebar()

  return (
    <button
      type="button"
      onClick={toggleCollapsed}
      className={className}
      data-collapsed={collapsed ? '' : undefined}
      aria-label={collapsed ? 'Expand menu' : 'Collapse menu'}
      aria-expanded={!collapsed}
      aria-controls="sidebar-nav"
    >
      {children ? children(collapsed) : null}
    </button>
  )
}
