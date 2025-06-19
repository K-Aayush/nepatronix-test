import React from "react";
import { getSole } from "../../../../../ApiRequest/GetData";
import Mailer from "@/AdminComponents/mailing/Mailer"

const page = async ({ params }) => {
  const data = await getSole("office", params?.id);
  console.log(data);
  return (
    <Mailer data={data}/>
  );
};

export default page;
