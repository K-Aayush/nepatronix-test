import { cookies } from 'next/headers';
import React from 'react'
import StaffControl from '../../../../AdminComponents/Staff/StaffControl';

const domain = process.env.NEXT_APP_BACKEND;

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
  const data = await res.json();
  return (
    <StaffControl data={data}/>
  )
}

export default page
