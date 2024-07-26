import React from 'react'
import { Home, Settings, User } from 'lucide-react'

const SideMenu = () => {
  const items = [
    { icon: <Home />, name: 'Home' },
    { icon: <User />, name: 'Profile' },
    { icon: <Settings />, name: 'Settings' },
    { icon: <Home />, name: 'Home' },
    { icon: <User />, name: 'Profile' },
    { icon: <Settings />, name: 'Settings' },
    { icon: <Home />, name: 'Home' },
    { icon: <User />, name: 'Profile' },
    { icon: <Settings />, name: 'Settings' },
  ]

  return (
    <div className="sidebar w-16 h-full flex flex-col items-center bg-muted fixed">
      {items.map((item, index) => (
        <SidebarItem key={index} icon={item.icon} name={item.name} />
      ))}
    </div>
  )
}

const SidebarItem = ({ icon, name }: { icon: React.ReactNode, name: string }) => {
  return (
    <div className="sidebar-item group relative flex items-center justify-center my-2 cursor-pointer">
      <div className="sidebar-icon p-2 text-foreground transition-transform transform group-hover:scale-110">{icon}</div>
      <div className='masked-gradient absolute left-16 ml-2 p-2 rounded bg-primary text-foreground text-sm group-hover:opacity-100 opacity-0'>{name}</div>
      {/* <div className="sidebar-tooltip group-hover:scale-100 absolute left-16 ml-2 p-2 rounded bg-primary text-foreground text-sm opacity-0 group-hover:opacity-100 transform transition-all origin-left scale-0">{name}</div> */}
    </div>
  )
}

export default SideMenu
