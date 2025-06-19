"use server";

import { cookies } from "next/headers";

const webUrl = process.env.NEXT_APP_BACKEND

export const getMultiTasks = async (year, month) => {
  try {
    console.log(year, month)
    const cookie = cookies().get("token")?.value;
    const res = await fetch(`${webUrl}/api/v1/tasks/staff`, {
      cache: "no-store",
      method: "GET",
      headers: {
        year, month,
        authorization: `Bearer ${cookie}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};



export const singleTasks = async(id)=>{
  try{
    const cookie = cookies().get("token")?.value;
    const res = await fetch(`${webUrl}/api/v1/tasks/staff/${id}`, {
      cache: "no-store",
      method: "GET",
      headers: {
        authorization: `Bearer ${cookie}`,
      }})
      
    const data = await res.json();
    console.log(data)
    return data;
  }catch(e){
    console.log(e);
    return {}
  }
}

export const changePwd=async(data)=>{
  try{
  const cookie = cookies().get("token")?.value;
  const res = await fetch(`${webUrl}/api/v1/staff-login`, {
    cache: "no-store",
    method: "PUT",
    headers: {
      authorization: `Bearer ${cookie}`,
    },body:data})
    
   if(!res.ok) throw new Error("Not Changed")
  return true;
}catch(e){
  console.log(e);
  return false
}
}