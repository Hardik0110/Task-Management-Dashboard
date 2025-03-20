import { useMainLayout } from "@/hooks/use-mainlayout";
import Header from "@/components/common/Header"

const Message = () => {
  const { toggleSidebar } = useMainLayout();

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
    </div>
  )
}

export default Message
