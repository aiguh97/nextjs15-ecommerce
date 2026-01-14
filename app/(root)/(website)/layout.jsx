import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

const layout = ({children}) => {
  return (
     <SidebarProvider>
    <main>
       

     
      {children}
    </main>
       </SidebarProvider>
  )
}

export default layout
