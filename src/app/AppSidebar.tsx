import { useNavigate, useLocation } from 'react-router-dom'
import {
  Sidebar,
  SidebarNav,
  SidebarItem,
  SidebarSubItem,
  SidebarCollapseToggle,
  useSidebar,
} from '../components/sidebar'


const IconTrends = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
  </svg>
)
const IconTasks = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)
const IconTickets = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
)
const IconPayments = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
  </svg>
)
const IconClients = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)
const IconInventory = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  </svg>
)
const IconShop = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
)
const IconReports = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
  </svg>
)
const IconTender = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" /><path d="M9 21h6" />
  </svg>
)
const IconSettings = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
)
const IconKnowledgeBase = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
)
const IconExpand = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="13 17 18 12 13 7" /><polyline points="6 17 11 12 6 7" />
  </svg>
)
const IconCollapse = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="11 17 6 12 11 7" /><polyline points="18 17 13 12 18 7" />
  </svg>
)


function AppSidebarContent() {
  const { collapsed, isMobile } = useSidebar()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const active = (path: string) =>
    pathname === path || pathname.startsWith(path + '/')

  const itemBtn = [
    'flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-3',
    'w-full min-w-[4.25rem] md:min-w-0 px-2 py-1.5 md:px-3 md:py-2.5 rounded-lg',
    'text-[10px] md:text-sm font-medium text-gray-600 hover:bg-yellow-100 hover:text-gray-900',
    'transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400',
    collapsed && !isMobile ? 'md:justify-center md:px-2' : '',
  ].filter(Boolean).join(' ')

  const itemBtnActive = 'bg-yellow-300 text-gray-900 font-semibold shadow-sm'

  const subBtn = [
    'block w-full text-left px-4 py-3 md:px-3 md:py-2 text-sm rounded-xl md:rounded-lg font-medium',
    'text-gray-700 hover:bg-yellow-100 hover:text-gray-900',
    'transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400',
  ].join(' ')

  const subBtnActive = 'bg-yellow-100 text-yellow-900 font-semibold hover:bg-yellow-200'

  const subMenuClass = isMobile
    ? 'fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-3xl p-5 shadow-2xl border-t border-gray-200 animate-in slide-in-from-bottom duration-200'
    : collapsed
    ? 'fixed left-16 top-[280px] z-[1000] min-w-[180px] bg-white border border-gray-200 rounded-xl shadow-xl py-1.5 overflow-hidden'
    : 'mt-1 ml-4 border-l-2 border-yellow-200 pl-2'

  return (
    <div className="flex flex-row md:flex-col items-center md:items-stretch w-full h-full">
      <div
        className={`hidden md:flex items-center h-14 px-3 border-b border-yellow-200 flex-shrink-0 ${
          collapsed ? 'justify-center' : 'gap-2'
        }`}
      >
        <div className="w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center text-gray-900 font-bold text-sm flex-shrink-0">
          HC
        </div>
        {!collapsed && (
          <span className="font-semibold text-gray-800 truncate">HelloClient</span>
        )}
      </div>

      <SidebarNav className="flex-1 flex flex-row md:flex-col items-center md:items-stretch justify-around md:justify-start overflow-x-auto md:overflow-y-auto md:overflow-x-hidden py-1 px-1 md:py-3 md:px-2 gap-1 md:gap-0.5 scrollbar-none w-full">

        <SidebarItem
          icon={<IconTrends />}
          label="Trends"
          isActive={active('/trends')}
          onSelect={() => navigate('/trends')}
          buttonClassName={itemBtn}
          activeClassName={itemBtnActive}
        />

        <SidebarItem
          icon={<IconTasks />}
          label="Tasks"
          isActive={active('/tasks')}
          onSelect={() => navigate('/tasks')}
          buttonClassName={itemBtn}
          activeClassName={itemBtnActive}
        />

        <SidebarItem
          icon={<IconTickets />}
          label="Tickets"
          isActive={active('/tickets')}
          onSelect={() => navigate('/tickets')}
          buttonClassName={itemBtn}
          activeClassName={itemBtnActive}
        />

        <SidebarItem
          icon={<IconPayments />}
          label="Payments"
          isActive={active('/payments')}
          onSelect={() => navigate('/payments')}
          buttonClassName={itemBtn}
          activeClassName={itemBtnActive}
        />

        <SidebarItem
          id="clients"
          icon={<IconClients />}
          label="Clients"
          isActive={active('/clients')}
          buttonClassName={itemBtn}
          activeClassName={itemBtnActive}
          subMenuClassName={subMenuClass}
        >
          <SidebarSubItem
            label="Client list"
            isActive={pathname === '/clients'}
            onSelect={() => navigate('/clients')}
            buttonClassName={subBtn}
            activeClassName={subBtnActive}
          />
          <SidebarSubItem
            label="Reviews"
            isActive={pathname === '/clients/reviews'}
            onSelect={() => navigate('/clients/reviews')}
            buttonClassName={subBtn}
            activeClassName={subBtnActive}
          />
          <SidebarSubItem
            label="Notifications"
            isActive={pathname === '/clients/notifications'}
            onSelect={() => navigate('/clients/notifications')}
            buttonClassName={subBtn}
            activeClassName={subBtnActive}
          />
        </SidebarItem>

        <SidebarItem
          id="inventory"
          icon={<IconInventory />}
          label="Inventory"
          isActive={active('/inventory')}
          buttonClassName={itemBtn}
          activeClassName={itemBtnActive}
          subMenuClassName={subMenuClass}
        >
          <SidebarSubItem
            label="Products"
            isActive={pathname === '/inventory'}
            onSelect={() => navigate('/inventory')}
            buttonClassName={subBtn}
            activeClassName={subBtnActive}
          />
          <SidebarSubItem
            label="Orders"
            isActive={pathname === '/inventory/orders'}
            onSelect={() => navigate('/inventory/orders')}
            buttonClassName={subBtn}
            activeClassName={subBtnActive}
          />
          <SidebarSubItem
            label="Suppliers"
            isActive={pathname === '/inventory/suppliers'}
            onSelect={() => navigate('/inventory/suppliers')}
            buttonClassName={subBtn}
            activeClassName={subBtnActive}
          />
        </SidebarItem>

        <SidebarItem
          icon={<IconShop />}
          label="Shop"
          isActive={active('/shop')}
          onSelect={() => navigate('/shop')}
          buttonClassName={itemBtn}
          activeClassName={itemBtnActive}
        />

        <SidebarItem
          icon={<IconReports />}
          label="Reports"
          isActive={active('/reports')}
          onSelect={() => navigate('/reports')}
          buttonClassName={itemBtn}
          activeClassName={itemBtnActive}
        />

        <SidebarItem
          icon={<IconTender />}
          label="Tenders"
          isActive={active('/tender')}
          onSelect={() => navigate('/tender')}
          buttonClassName={itemBtn}
          activeClassName={itemBtnActive}
        />

        <SidebarItem
          icon={<IconSettings />}
          label="Settings"
          isActive={active('/settings')}
          onSelect={() => navigate('/settings')}
          buttonClassName={itemBtn}
          activeClassName={itemBtnActive}
        />

        <SidebarItem
          icon={<IconKnowledgeBase />}
          label="Knowledge base"
          isActive={active('/knowledge-base')}
          onSelect={() => navigate('/knowledge-base')}
          buttonClassName={itemBtn}
          activeClassName={itemBtnActive}
        />
      </SidebarNav>

      {!isMobile && (
        <div className="hidden md:block p-2 border-t border-yellow-200 flex-shrink-0">
          <SidebarCollapseToggle
            className="flex items-center justify-center w-full h-9 rounded-lg text-gray-500 hover:bg-yellow-100 hover:text-gray-800 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
          >
            {(c) => c ? <IconExpand /> : <IconCollapse />}
          </SidebarCollapseToggle>
        </div>
      )}
    </div>
  )
}


export function AppSidebar() {
  return (
    <Sidebar
      defaultCollapsed={false}
      className={[
        'fixed bottom-0 inset-x-0 z-40 h-16 bg-yellow-50/95 backdrop-blur-md border-t border-yellow-200 shadow-lg',
        'md:sticky md:top-0 md:bottom-auto md:left-0 md:h-screen md:w-64 md:border-t-0 md:border-r md:shadow-none',
        'md:data-[collapsed]:w-16',
        'transition-[width] duration-300 ease-in-out',
      ].join(' ')}
    >
      <AppSidebarContent />
    </Sidebar>
  )
}
