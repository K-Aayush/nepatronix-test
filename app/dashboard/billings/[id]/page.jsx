import React from 'react'
import Inventory from "../../../../Acconting/Inventory"
import {getSole} from "@/ApiRequest/GetData"

const page = async({params}) => {
  const data = await getSole("transaction/billings", params?.id)
  return (
    <div className='w-full p-[20px] py-[40px]'>
        <Inventory oldData={data} id={params?.id} url={"dashboard"}/>      
    </div>
  )
}

export default page
