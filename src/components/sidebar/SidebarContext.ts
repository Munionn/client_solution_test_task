import { createContext, useContext } from 'react'



export interface SidebarContextValue {
  collapsed: boolean
  toggleCollapsed: () => void
  isMobile: boolean
  openParentId: string | null
  setOpenParentId: (id: string | null) => void
}

export interface SidebarItemContextValue {
  subMenuOpen: boolean
  toggleSubMenu: () => void
  closeSubMenu: () => void
  collapsed: boolean
  closeSubMenuOnSelect: boolean
}



export const SidebarContext = createContext<SidebarContextValue | null>(null)

export const SidebarItemContext = createContext<SidebarItemContextValue | null>(null)

export function useSidebar(): SidebarContextValue {
  const ctx = useContext(SidebarContext)
  if (!ctx) {
    throw new Error('useSidebar must be used inside <Sidebar>')
  }
  return ctx
}
export function useSidebarItem(): SidebarItemContextValue {
  const ctx = useContext(SidebarItemContext)
  if (!ctx) {
    throw new Error('useSidebarItem must be used inside <Sidebar.Item> with children')
  }
  return ctx
}
