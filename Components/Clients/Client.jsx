import React from 'react';
import { getLists } from '@/ApiRequest/GetData';
import Slider from "./Slider"

const Client = async() => {
  const data = await getLists("clients", 0, 0)
  return (
    <section className='w-full p-[40px] bg-slate-100'>
        <h2 className='text-8xl p-[20px] text-center w-full text-slate-600'>
            Our Valuable Clients
        </h2>
        <br />
        <Slider data={data}/>

    </section>
  )
}

export default Client
