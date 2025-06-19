import { NextResponse } from "next/server"
import {Auth, AccAuth} from "../../../../../../middlewares/backendMiddleware"
import inventory from "../../../../../../models/inventory"
import transiction from "@/models/transaction"

export const GET=async(req)=>{
    try{
      const admin = await Auth()
      const acc = await AccAuth()
      if(!admin && !acc) throw new Error("Validation Error")
      const uid = await req?.url?.split("/").pop()
      const newData = await inventory.findOne({_id:uid})
      return NextResponse.json(newData)

    }catch(error){
        console.log(error.message)
        return NextResponse.json({}, {status:500})
    }
}

export const PUT=async(req)=>{
   try{
    const admin = await Auth();
    const acc = await AccAuth();
    if(!admin && !acc) throw new Error("Validation Error")
    const data = (await req.json())
    const id = req?.url?.split("/").pop()
    const editable = await inventory.findOne({_id:id})
    const editTrans = await transiction.findOne({_id:id})
    for(let key in data){
        editable[key] = data[key]
    }

    editTrans.year = `${parseInt(data?.date?.split("-")?.[0])}`
    editTrans.month = `${parseInt(data?.date?.split("-")?.[1])}`
    editTrans.date = `${parseInt(data?.date?.split("-")[2])}`
    editTrans.amount = data?.total
    editTrans.companyName = data?.company
    delete editTrans.vatNo;
    delete editTrans.panNo;
    editTrans[`${data?.billType}No`]=data?.billNo

    await editTrans.save()

    await editable.save()
    return NextResponse.json({})

   }catch(error){
    console.log(error?.message);
    return NextResponse.json({}, {status:500})
   }
}

export const DELETE=async(req)=>{
    try{
        const admin = await Auth();
        const acc = await AccAuth();
        if(!admin && !acc) throw new Error("Validation Error")
        const id = req?.url?.split("/").pop()
        await inventory.findOneAndDelete({_id:id})
        await transiction.findOneAndDelete({_id:id})
        return NextResponse.json({})

    }catch(error){
        console.log(error?.message);
        return NextResponse.json({}, {status:500})
       }
}