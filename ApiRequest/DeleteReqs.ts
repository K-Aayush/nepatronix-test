"use server"

import { cookies } from "next/headers";

const url = process.env.NEXT_APP_BACKEND

export const DelData=async(type:string, id:string)=>{
    const cookie = cookies();
    const token = cookie.get("token")?.value;
    try{
        const res = await fetch(`${url}/api/v1/${type}/${id}`,{
            cache:"no-store",
            method:"DELETE",
            headers:{
                authorization:`Bearer ${token}`
            }
        });
        if(res?.ok){
           return true;
        }else{
            const msg = await res.json();
            throw new Error(msg?.message)
        }
    }catch(err:any){
        return false;
    }
}