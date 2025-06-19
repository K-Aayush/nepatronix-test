"use server"

import { cookies } from "next/headers"

const url = process.env.NEXT_APP_BACKEND

export const postEmail = async(data)=>{
    try{
        const token= cookies().get("token").value;
        const res = await fetch(`${url}/api/v1/mail`, {
            method:"POST",
            headers:{
                authorization: `Bearer ${token}`,
                "Content-Type":"application/json"
            },
            body:data
        })

        const msg = await res?.json();
        if(!res?.ok) throw new Error(msg?.message)
        return{success:true, message:msg?.message}

    }catch(error){
        console.log(error?.message)
        return {success:false, message:error?.message}
    }
}