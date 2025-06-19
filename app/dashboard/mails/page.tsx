import Mails from '@/AdminComponents/mails/Mails'
import { getLists } from '@/ApiRequest/GetData'
import React from 'react'

const page = async() => {
   const data:any[] = await getLists("contact", 0, 100) || [] 
  return (
    <main className='w-full min-h-screen p-[4rem] bg-slate-200'>
        <h1 className='text-[4rem] font-bold text-slate-700'>Latest Mails</h1>
        <Mails oldData={data || []}/>
    </main>
  )
}

export default page
