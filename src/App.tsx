import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppSidebar } from './app/AppSidebar'
import {
  TrendsPage,
  TasksPage,
  TicketsPage,
  PaymentsPage,
  ClientsListPage,
  ClientReviewsPage,
  ClientNotificationsPage,
  InventoryPage,
  InventoryOrdersPage,
  InventorySuppliersPage,
  ShopPage,
  ReportsPage,
  TenderPage,
  SettingsPage,
  KnowledgeBasePage,
  NotFoundPage,
} from './app/pages'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex">
        <AppSidebar />

        <main className="flex-1 min-w-0 pb-20 md:pb-0">
          <Routes>
            <Route path="/" element={<Navigate to="/trends" replace />} />

            <Route path="/trends" element={<TrendsPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/tickets" element={<TicketsPage />} />
            <Route path="/payments" element={<PaymentsPage />} />

            <Route path="/clients" element={<ClientsListPage />} />
            <Route path="/clients/reviews" element={<ClientReviewsPage />} />
            <Route path="/clients/notifications" element={<ClientNotificationsPage />} />

            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/inventory/orders" element={<InventoryOrdersPage />} />
            <Route path="/inventory/suppliers" element={<InventorySuppliersPage />} />

            <Route path="/shop" element={<ShopPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/tender" element={<TenderPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/knowledge-base" element={<KnowledgeBasePage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
