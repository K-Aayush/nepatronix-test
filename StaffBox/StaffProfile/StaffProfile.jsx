import { cookies } from 'next/headers';
import React from 'react'

const domain = process.env.NEXT_APP_BACKEND


const getDays = () => {
    const now = new Date();
    const year = now.getYear();
    const month = now.getMonth();
    const date = new Date(year, month, 0).getDate();
    return date;
  };

  const todayDate = ()=>{
    const now = new Date()
    const date = now.getDate()
    console.log(date)
    return date
  }

  const absentDays = (item) => {
    const totalDays = getDays();
    console.log(item)
    let weekEnds = 0;
    for (let i = 1; i < totalDays; i++) {
      const now = new Date();
      const year = now.getYear();
      const month = now.getMonth() + 1;
      const day = new Date(year, month, i).getDay();
      if (day === 6) {
        weekEnds += 1;
      }
    }
    const totalActiveDays = totalDays - weekEnds;
    const absents = totalActiveDays - item?.attendance;
    return absents;
  };

  const handleSalary = (item) => {
    const totalDays = getDays();
    let weekEnds = 0;
    for (let i = 1; i < totalDays; i++) {
      const now = new Date();
      const year = now.getYear();
      const month = now.getMonth() + 1;
      const day = new Date(year, month, i).getDay();
      if (day === 6) {
        weekEnds += 1;
      }
    }
    const absents = absentDays(item);
    const dailyMoney = item?.monthlySalary / (30 - weekEnds);
    const cutMoney = Math.round(dailyMoney * (absents - 2));
    const totalSalary = item?.monthlySalary - cutMoney;
    return {totalSalary, absentDays, weekEnds, totalDays};
  };


const StaffProfile = async() => {
    const cookie = cookies().get("token")?.value
    const res = await fetch(`${domain}/api/v1/staff-dash`,{
        method:"GET",
        cache:"no-store",
        headers:{
            authorization:`Bearer ${cookie}`,
            month:new Date().getMonth()+1,
            year:new Date().getFullYear()
        }
    });
    const data = await res.json()
    console.log(data)

    const advData =handleSalary({attendance:data?.Attendance, monthlySalary:data?.userData?.monthlySalary})

  return (
    <div className='w-full px-[40px] py-[40px]'>
      <h1 className='w-full mb-[10px] p-0 text-slate-700 text-[35px] font-semibold'>Your Information</h1>

      <p className='w-full text-slate-600 text-[18px]'>
      <strong>Name : </strong>{data?.userData?.fullname}<br/>
      <strong>Email : </strong>{data?.userData?.email}<br/>
      <strong>Phone : </strong>{data?.userData?.phone}<br/>
      <strong>UID : </strong>{data?.userData?.UID}<br/>
      <strong>Address : </strong>{data?.userData?.address}
      </p>
      <h2 className='w-full mt-[30px] mb-[10px] text-slate-700 text-[30px] font-semibold'>Your Attendance And Salary</h2>

      <p className='w-full text-slate-600 text-[18px]'>
      <strong>Working Days : </strong>{advData?.totalDays - advData?.weekEnds}<br/>
      <strong>Present Days : </strong>{data?.Attendance}<br/>
      <strong>Days Left : </strong>{advData?.totalDays - advData?.weekEnds - todayDate()}<br/>
      <strong>Monthly Slalary : </strong>{data?.userData?.monthlySalary}<br/>
      <strong>Slalary Till Today : </strong>{advData?.totalSalary}
      </p>
      <br /><br />
      <div className='w-full'>
      <h2 className='w-full mt-[30px] mb-[10px] text-slate-700 text-[30px] font-semibold'>Attendance Time Frame</h2>
      <table class="min-w-full bg-slate-800 text-[16px] text-slate-300">
    <thead>
        <tr class="bg-slate-800 text-slate-100 text-center">
            <th class="px-6 py-3 ">Date</th>
            <th class="px-6 py-3">Entry Time</th>
            <th class="px-6 py-3">Exit Time</th>
            <th class="px-6 py-3">Total Incomings</th>
            <th class="px-6 py-3">Total Outgoings</th>
        </tr>
    </thead>
    <tbody>
        {Array?.isArray(data?.attendDetails) && data?.attendDetails?.map((item, index) => (
            <tr key={index} class="border-b border-slate-800 bg-slate-700 text-center">
                <td class="px-6 py-4">{item?.date}</td>
                <td class="px-6 py-4">{item?.entry?.[0]}</td>
                <td class="px-6 py-4">{[...item?.exit]?.pop() || "No Exit Time"}</td>
                <td class="px-6 py-4">{item?.entry?.length}</td>
                <td class="px-6 py-4">{item?.exit?.length || "Not gone"}</td>
            </tr>
        ))}
    </tbody>
</table>

      </div>
    </div>
  )
}

export default StaffProfile