import EditableCard from '@/AdminComponents/Cards/EditableCard';
import { getLists } from '@/ApiRequest/GetData';
import React from 'react'
import NewClients from "@/AdminComponents/Clients/NewClients"

const page = async() => {
  const data = await getLists("clients", 0, 0)
  console.log(data)
  return (
    <main className='w-full  p-[40px] min-h-screen text-center text-[20px] gap-[20px] bg-slate-100 text-slate-700 '>

        <h1 className='w-full text-center text-8xl py-[40px]'>Edit Clients</h1>
        <br />
        <NewClients/>
        <br />
        
        <div className='w-full flex flex-wrap justify-center gap-[20px]'>
        {
          Array.isArray(data) && data?.map((item, index)=>(
            <EditableCard data={item} key={index} type='clients'/>
        ))}
        </div>
    </main>
  )
}

export default page;
