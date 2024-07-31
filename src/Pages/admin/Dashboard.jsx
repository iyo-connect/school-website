import React from 'react'
import { Separator } from "../../components/ui/separator"

import {
    Command,
    CommandInput
} from "../../components/ui/command"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../../components/ui/sheet"
import { Menu } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <>
      <div className='w-full h-1rem bg-white flex justify-between items-center text-[20px] p-4 shadow-lg'>
        <span className='ms-5'>Admin Dashboard</span>
        <Sheet>
          <SheetTrigger><Menu size='25' /></SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Admin Menu</SheetTitle>
              <SheetDescription>
                <Command>
                  <CommandInput placeholder="Type a command or search..." />
                </Command>
                
                <div className=''>
                <Link to="/student-data">
                  Student Details
                </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className='bt-gray-200 w-full'>
        <Outlet />
      </div>
    </>
  )
}

export default Dashboard;
