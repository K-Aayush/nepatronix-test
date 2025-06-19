import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";
import Devices from "@/AdminComponents/devices/Devices";
import AttendanceAdder from "../../../AdminComponents/AttendanceContoller/AttendanceAdder";
const domain = "https://nepatronix.org";

const page = async () => {
  const cookie = cookies();
  const token = cookie.get("token")?.value;

  const res = await fetch(`${domain}/api/v1/office`, {
    method: "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    // Handle error
    return <div>Error loading data...</div>;
  }

  const data = await res.json();

  console.log(data[0]);

  const date = new Date();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  const calculateSalary = ({ year, month, attendance, salary }) => {
    const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
    let weekends = 0;

    console.log(year, month, attendance, salary);

    for (let i = 1; i <= totalDaysInMonth; i++) {
      const day = new Date(year, month, i).getDay();
      if (day === 6) weekends += 1;
    }

    const workingDays = totalDaysInMonth - weekends - 2;
    const dailySalary = (parseInt(salary) / workingDays);
    const finalSalary = dailySalary * attendance;

    return finalSalary <= parseInt(salary) ? Math.round(finalSalary) : parseInt(salary);
  };

  return (
    <main className="w-full min-h-screen bg-gray-50">
      <Devices />
      <br />
      <br />
      <AttendanceAdder domain={domain} />
      <h1 className="w-full pt-[40px] text-center text-[40px] text-gray-700">
        Staff Track
      </h1>
      <br />
      <Link
        href={"/dashboard/staff/edit"}
        className="w-fit ml-[40px] p-[15px] bg-red-400 text-[20px] text-white"
      >
        Edit Staff{"'"}s Data
      </Link>
      <br />
      <div className="w-full p-[40px] flex justify-center">
        <table className="w-full border text-[12px] text-slate-800 bg-slate-00 ">
          <thead className="bg-slate-300">
            <tr className="border">
              <th className=" border max-w-[250px] truncate">Name</th>
              <th className=" border">UID</th>
              <th className=" border">Phone</th>
              <th className=" border max-w-[250px] truncate">Email</th>
              <th className=" border">Salary Previous Month</th>
              <th className=" border">Attendance Previous Month</th>
              <th className=" border">Salary This Month</th>
              <th className=" border">Attendance This Month</th>
              <th className=" border">Mail Options</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) &&
              data.map((item, index) => (
                <tr key={index} className="border text-center">
                  <td className="border">{item?.fullname}</td>
                  <td className="border">{item?.UID}</td>
                  <td className="border">{item?.phone}</td>
                  <td className="border">{item?.email}</td>
                  <td className="border">
                    {calculateSalary({
                      year: currentMonth === 0 ? currentYear - 1 : currentYear,
                      month: currentMonth === 0 ? 11 : currentMonth - 1,
                      attendance: parseInt(item?.prevAttendance),
                      salary: item?.monthlySalary,
                    })}
                  </td>
                  <td className="border">{item?.prevAttendance}</td>
                  <td className="border">
                    {calculateSalary({
                      year: currentYear,
                      month: currentMonth,
                      attendance: parseInt(item?.currentAttendance),
                      salary: item?.monthlySalary,
                    })}
                  </td>
                  <td className="border">{item?.currentAttendance}</td>
                  <td className="border p-[5px]">
                    <Link href={`/dashboard/staff/mail/${item?._id}`}>
                      <button className="px-[10px] py-[5px] text-[12px] text-white bg-blue-500 rounded-xl transition-all duration-300 hover:bg-blue-600">
                        Send Mail
                      </button>
                    </Link>{" "}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default page;
