import React from 'react'
import {getLists, getSole} from "@/ApiRequest/GetData";
import IndividualEditing from "@/AdminComponents/StaffsForm/IndividualEditing"

const page = async({params}) => {
    const data = await getSole("tasks", params?.id);
    const staffs = await getLists("office", 0, 0);
  return (
    <main className='w-full pl-[110px] pr-[30px] pt-[100px]'>
        <IndividualEditing data={data} method={"PUT"} allMembers={staffs}/>
    </main>
  )
}

export default page
