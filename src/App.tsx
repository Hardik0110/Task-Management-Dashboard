import './App.css'
import AppSidebar from './components/common/Sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'

function App() {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <AppSidebar />
        <main className="flex-1 overflow-auto p-4">
          {/* Your main content goes here */}
        </main>
      </div>
    </SidebarProvider>
  )
}

export default App