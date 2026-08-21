import {
  useEffect,
  useRef,
  useCallback,
  type ReactNode,
  type KeyboardEvent,
} from 'react'
import { useSidebar, SidebarItemContext, type SidebarItemContextValue } from './SidebarContext'


export interface SidebarItemProps {
  id?: string;
  icon: ReactNode
  label: string
  isActive?: boolean
  onSelect?: () => void
  children?: ReactNode
  closeSubMenuOnSelect?: boolean
  className?: string
  buttonClassName?: string
  activeClassName?: string
  subMenuClassName?: string
}


export function SidebarItem({
  id,
  icon,
  label,
  isActive = false,
  onSelect,
  children,
  closeSubMenuOnSelect = false,
  className,
  buttonClassName,
  activeClassName,
  subMenuClassName,
}: SidebarItemProps) {
  const { collapsed, isMobile, openParentId, setOpenParentId } = useSidebar()

  const hasChildren = Boolean(children)
  const subMenuOpen = hasChildren && openParentId === id

  const toggleSubMenu = useCallback(() => {
    if (id) {
      setOpenParentId(subMenuOpen ? null : id)
    }
  }, [id, subMenuOpen, setOpenParentId])

  const closeSubMenu = useCallback(() => {
    if (openParentId === id) {
      setOpenParentId(null)
    }
  }, [id, openParentId, setOpenParentId])

  const containerRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    if (isMobile || !subMenuOpen) return

    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        closeSubMenu()
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [isMobile, subMenuOpen, closeSubMenu])

  useEffect(() => {
    if (!subMenuOpen) return
    const handler = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') closeSubMenu()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [subMenuOpen, closeSubMenu])

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = () => {
    return;
  }
  const handleMouseLeave = () => {
    return;
  }

  const handleClick = () => {
    if (hasChildren) {
      if (timerRef.current) clearTimeout(timerRef.current)
      toggleSubMenu()
    } else {
      onSelect?.()
      setOpenParentId(null)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }

  const itemContext: SidebarItemContextValue = {
    subMenuOpen,
    toggleSubMenu,
    closeSubMenu,
    collapsed,
    closeSubMenuOnSelect,
  }

  const buttonAriaProps = hasChildren
    ? {
        'aria-expanded': subMenuOpen,
        'aria-haspopup': 'true' as const,
      }
    : {
        'aria-current': isActive ? ('page' as const) : undefined,
      }

  return (
    <SidebarItemContext.Provider value={itemContext}>
      <li
        ref={containerRef}
        className={className}
        data-active={isActive ? '' : undefined}
        data-collapsed={collapsed ? '' : undefined}
        data-has-children={hasChildren ? '' : undefined}
        style={{ position: 'relative' }}
      >
        <button
          type="button"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          className={[buttonClassName, isActive ? activeClassName : ''].filter(Boolean).join(' ')}
          data-active={isActive ? '' : undefined}
          data-submenu-open={subMenuOpen ? '' : undefined}
          title={collapsed ? label : undefined}
          {...buttonAriaProps}
        >
          <span data-sidebar-icon="" aria-hidden="true">
            {icon}
          </span>
          <span
            data-sidebar-label=""
            aria-hidden={collapsed ? true : undefined}
          >
            {label}
          </span>
          {hasChildren && !collapsed && (
            <span
              data-sidebar-chevron=""
              data-open={subMenuOpen ? '' : undefined}
              aria-hidden="true"
            />
          )}
        </button>

        {hasChildren && subMenuOpen && (
          <>
            {isMobile && (
              <div
                className="fixed inset-0 bg-black/40 z-40 backdrop-blur-xs transition-opacity"
                onClick={(e) => {
                  e.stopPropagation()
                  closeSubMenu()
                }}
                aria-hidden="true"
              />
            )}
            <div
              role="region"
              aria-label={`${label} submenu`}
              className={subMenuClassName}
              data-submenu-mode={isMobile ? 'sheet' : collapsed ? 'popover' : 'accordion'}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {collapsed && !isMobile && (
                <div className="px-4 py-3 font-semibold text-gray-900 border-b border-gray-100 text-sm">
                  {label}
                </div>
              )}
              {isMobile && (
                <div className="flex items-center justify-between pb-3 mb-2 border-b border-gray-100 px-1">
                  <span className="font-semibold text-base text-gray-900">{label}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      closeSubMenu()
                    }}
                    className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Close"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              )}
              <ul role="list" className={isMobile ? 'space-y-1' : undefined}>
                {children}
              </ul>
            </div>
          </>
        )}
      </li>
    </SidebarItemContext.Provider>
  )
}
