"use client"
import React, { useState } from 'react'
import TopNav from './TopNav'
import SideNav from "./SideNav"
import { usePathname } from 'next/navigation'

const NavHolder = () => {

  const [open, setOpen] = useState<Boolean>(false)

  const path = usePathname()

  if(path.includes("/dashboard")|| path.includes("/profile") || path.includes("/accountant"))return null;

  return (
    <header className=''>

        {/* top nav */}
        <TopNav setOpen={setOpen} isOpen={open}/>
        <SideNav isOpen={open}/>

    </header>
  )
}

export default NavHolder
