import { useMainLayout } from "@/layout/MainLayout";
import Header from "@/components/common/Header"

const Settings = () => {
  const { toggleSidebar } = useMainLayout();

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
    </div>
  )
}

export default Settings
