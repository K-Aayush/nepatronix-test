"use client"
import React from 'react'
import {postEmail} from "./MailFunction"
import Link from 'next/link';


  const sendMail = async (e) => {
    e?.preventDefault();
    const mailing={
        email : e?.target?.email?.value,
        subject: e?.target?.subject?.value,
        message: e?.target?.message?.value
    }
    const res = await postEmail(JSON.stringify(mailing));
    alert(res?.message);
    if(!res?.success)
      return window.location.reload()
  };


const Mailer = ({data}) => {
  return (
    <form onSubmit={sendMail} className="w-full p-[40px]">
      <Link href="/dashboard/staff">
       <button className='py-[10px] text-blue-500 text-[20px] font-bold'>{"<"} Go Back</button>
      </Link>
      <br />
      <br />
      <h1 className="text-[30px] text-slate-700">
        Send Mail To {data?._doc?.fullname}
      </h1>
      <br />
      <input
        type="email"
        name="email"
        id="email"
        defaultValue={data?._doc?.email}
        required
        className="w-full max-w-[600px] text-[16px] p-[10px] border rounded-xl"
        placeholder="Enter Email"
      />
      <br />
      <br />
      <textarea
        id="subject"
        name="subject"
        defaultValue={`Regarding Your Salary`}
        required
        className="w-full max-w-[600px] text-[16px] border rounded-xl resize-none p-[10px]"
        placeholder="Enter Subject"
      />
      <br />
      <br />
      <textarea
        id="message"
        name="message"
        defaultValue={`Hello ${
          data?._doc?.fullname
        }, You will be recieving Rs, [Amount] at the end of this month. `}
        required
        className="w-full max-w-[600px] text-[16px] h-[200px]  border rounded-xl p-[10px]"
        placeholder="Enter Subject"
      />
      <br />
      <br />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white px-[30px] py-[7.5px] rounded-xl text-[16px]"
      >
        Send
      </button>
    </form>
  )
}

export default Mailer
