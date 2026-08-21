import type { KeyboardEvent } from 'react'
import { useSidebarItem, useSidebar } from './SidebarContext'


export interface SidebarSubItemProps {
  label: string
  isActive?: boolean
  onSelect?: () => void
  closeOnSelect?: boolean
  className?: string
  buttonClassName?: string
  activeClassName?: string
}


export function SidebarSubItem({
  label,
  isActive = false,
  onSelect,
  closeOnSelect,
  className,
  buttonClassName,
  activeClassName,
}: SidebarSubItemProps) {
  const { collapsed, closeSubMenu, closeSubMenuOnSelect } = useSidebarItem()
  const { isMobile } = useSidebar()

  const handleSelect = () => {
    onSelect?.()
    const shouldClose = closeOnSelect !== undefined ? closeOnSelect : closeSubMenuOnSelect
    if (isMobile || shouldClose) {
      closeSubMenu()
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleSelect()
    }
  }

  return (
    <li
      className={className}
      data-active={isActive ? '' : undefined}
    >
      <button
        type="button"
        onClick={handleSelect}
        onKeyDown={handleKeyDown}
        className={[buttonClassName, isActive ? activeClassName : ''].filter(Boolean).join(' ')}
        aria-current={isActive ? 'page' : undefined}
        data-active={isActive ? '' : undefined}
      >
        {label}
      </button>
    </li>
  )
}
