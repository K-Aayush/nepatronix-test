import { getLists } from '@/ApiRequest/GetData'
import React from 'react'
import KeyWordForm from "@/AdminComponents/EditorComps/EditorComp/KeywordForm"

const page = async() => {
  const data = await getLists("seo", 0, 0)
  return (
    <main
      style={{
        height:"fit-content",
        minHeight: "100vh",
        background: "aliceblue",
        textAlign: "center",
      }}
    >
      <KeyWordForm data={data?.keywords}/>
    </main>
  )
}

export default page
