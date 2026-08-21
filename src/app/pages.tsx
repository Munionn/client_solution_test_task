import type { ReactNode } from 'react'

export function TrendsPage() {
  return <PageShell title="Trends" description="Business trends, performance tracking, and market analytics." />
}

export function TasksPage() {
  return <PageShell title="Tasks" description="Manage team tasks, assignments, and active work orders." />
}

export function TicketsPage() {
  return <PageShell title="Tickets" description="Customer support requests and internal ticket queue." />
}

export function PaymentsPage() {
  return <PageShell title="Payments" description="Transaction history, invoices, and payment gateway status." />
}

export function ClientsListPage() {
  return <PageShell title="Clients" description="Client directory, contact details, and account history." />
}

export function ClientReviewsPage() {
  return <PageShell title="Clients — Reviews" description="Customer feedback, ratings, and satisfaction scores." />
}

export function ClientNotificationsPage() {
  return <PageShell title="Clients — Notifications" description="Manage client alerts and communication preferences." />
}

export function InventoryPage() {
  return <PageShell title="Inventory - Products" description="Catalog of all available products and stock details." />
}

export function InventoryOrdersPage() {
  return <PageShell title="Inventory — Orders" description="Incoming product orders, fulfillment status, and shipments." />
}

export function InventorySuppliersPage() {
  return <PageShell title="Inventory — Suppliers" description="Supplier directory, purchase agreements, and contacts." />
}

export function ShopPage() {
  return <PageShell title="Shop" description="Store catalog, digital sales channels, and product listings." />
}

export function ReportsPage() {
  return <PageShell title="Reports" description="Financial statements, revenue breakdowns, and exportable data." />
}

export function TenderPage() {
  return <PageShell title="Tenders" description="Procurement tenders, bids, and proposal tracking." />
}

export function SettingsPage() {
  return <PageShell title="Settings" description="System configuration, permissions, and company profile." />
}

export function KnowledgeBasePage() {
  return <PageShell title="Knowledge Base" description="Documentation, FAQs, and team training manuals." />
}

export function NotFoundPage() {
  return <PageShell title="404 — Page Not Found" description="The requested page does not exist." />
}


function PageShell({ title, description, badge = 'Live', children }: { title: string; description: string; badge?: ReactNode; children?: ReactNode }) {
  return (
    <div className="flex flex-col items-start justify-start p-6 md:p-10 max-w-5xl">
      <div className="flex items-center gap-3 mb-2">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h1>
        {badge && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            {badge}
          </span>
        )}
      </div>
      <p className="text-sm md:text-base text-gray-500 max-w-2xl mb-8">{description}</p>

      {children ?? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-xs flex flex-col justify-between h-32">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Total Entries</span>
            <span className="text-2xl font-bold text-gray-800">1,280</span>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-xs flex flex-col justify-between h-32">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Status</span>
            <span className="text-sm font-medium text-emerald-600 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Operational
            </span>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-xs flex flex-col justify-between h-32 sm:col-span-2 lg:col-span-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Updated</span>
            <span className="text-sm text-gray-600">Just now</span>
          </div>
        </div>
      )}
    </div>
  )
}
