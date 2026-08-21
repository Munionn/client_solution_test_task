import {
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react'
import { SidebarContext, type SidebarContextValue } from './SidebarContext'


const MOBILE_BREAKPOINT = 768


export interface SidebarProps {
  collapsed?: boolean
  defaultCollapsed?: boolean
  onCollapsedChange?: (collapsed: boolean) => void
  children: ReactNode
  className?: string
}


export function Sidebar({
  collapsed: controlledCollapsed,
  defaultCollapsed = false,
  onCollapsedChange,
  children,
  className,
}: SidebarProps) {
  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed)

  const isControlled = controlledCollapsed !== undefined
  const collapsed = isControlled ? controlledCollapsed! : internalCollapsed

  const toggleCollapsed = useCallback(() => {
    const next = !collapsed
    if (!isControlled) {
      setInternalCollapsed(next)
    }
    onCollapsedChange?.(next)
  }, [collapsed, isControlled, onCollapsedChange])

  const [isMobile, setIsMobile] = useState(
    () => window.innerWidth < MOBILE_BREAKPOINT
  )

  const [openParentId, setOpenParentId] = useState<string | null>(null)

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const handler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const contextValue: SidebarContextValue = {
    collapsed,
    toggleCollapsed,
    isMobile,
    openParentId,
    setOpenParentId,
  }

  return (
    <SidebarContext.Provider value={contextValue}>
      <nav
        id="sidebar-nav"
        role="navigation"
        aria-label="Sidebar menu"
        className={className}
        data-collapsed={collapsed ? '' : undefined}
        data-mobile={isMobile ? '' : undefined}
      >
        {children}
      </nav>
    </SidebarContext.Provider>
  )
}
