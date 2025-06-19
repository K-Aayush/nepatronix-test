import { getLists } from '@/ApiRequest/GetData'
import React from 'react'
import AddTask from "@/AdminComponents/Tasks/AddTask"

const page = async() => {
  const data = await getLists("office", 0, 0);
  return (
    <main className='w-full min-h-screen bg-slate-100 pl-[80px] pt-[40px]'>
       <AddTask data={null} method="POST" allMembers={data}/>
    </main>
  )
}

export default page