import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
  import { useSidebar } from "@/components/ui/sidebar"
  import { 
    Element4, 
    TaskSquare, 
    People, 
    Message, 
    Setting2, 
    Category2
  } from "iconsax-react"
  
  // Menu items.
  const items = [
    {
      title: "Overview",
      url: "#",
      icon: Category2,
    },
    {
      title: "Task",
      url: "#",
      icon: TaskSquare,
    },
    {
      title: "Mentors",
      url: "#",
      icon: People,
    },
    {
      title: "Message",
      url: "#",
      icon: Message,
    },
    {
      title: "Settings",
      url: "#",
      icon: Setting2,
    },
  ]
  
  export default function AppSidebar() {
    const sidebar = useSidebar()
  
    return (
      <Sidebar collapsible="icon" className="border-r w-80">
        <SidebarContent className="flex flex-col gap-8">
          <SidebarGroup>
            <SidebarGroupLabel className="px-6 py-6 text-2xl font-bold text-black mb-6">
              Dashboard
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-4 px-4">
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="flex items-center gap-4 px-5 py-3 hover:bg-accent rounded-md transition-colors text-black">
                        <item.icon 
                          size={32} 
                          color="black"
                          variant="TwoTone"
                        />
                        <span className="text-base font-medium">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
  }