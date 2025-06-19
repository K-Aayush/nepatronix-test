"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

const URL = ({domain}:{domain:string}) => {
    const path = usePathname()
    console.log(`${domain}${path}`)
  return (
    <link rel="canonical" href={`${domain}${path}`} />

  )
}

export default URL
