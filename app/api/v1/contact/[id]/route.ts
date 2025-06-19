import ConnectDB from "@/config/ConnectDB"
import { Auth } from "@/middlewares/backendMiddleware"
import contact from "@/models/contact"
import { NextRequest, NextResponse } from "next/server"

export const GET=async(req:NextRequest)=>{
    await ConnectDB()
    try{
        const url =  req?.url?.split("/")?.pop()
        const auth = await Auth()
        if(!auth) throw new Error("Unauthorized Request")
        const data = await contact.findOne({_id:url})
    if(!data) throw new Error("Data Not FOund")
        return NextResponse.json(data)

    }catch(error:any){
        console.log(error?.message)
        return NextResponse.json({message:error?.message} , {status:400})
    }
}