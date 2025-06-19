import React from 'react'
import CourseHandler from "@/Components/Course/CourseHandler"
import { getLists } from '@/ApiRequest/GetData'
import AnalyticsRequester from '@/ApiRequest/AnalyticsRequester'

const page = async() => {
  const data = await getLists("courses", 0, 12)
  return (
    <main className='w-full pt-[80px] min-h-screen'>
      <AnalyticsRequester id=''/>
        <h1 className='w-full text-center p-[40px] font-bold text-[40px] mx-auto text-blue-500'>
            COURSE CONTENTS
        </h1>
        <center>
            <CourseHandler data={data}/>
        </center>
    </main>
  )
}

export default page
