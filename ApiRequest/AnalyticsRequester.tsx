"use client";
import React, { useEffect } from "react";
import { visitorReq } from "./VisitorReq";

const AnalyticsRequester = ({ id }: { id: string }) => {
  useEffect(() => {
    const makeFetch = async () => {
      await visitorReq();
    };
    makeFetch();
  }, [id]);
  return(
    <span className="hidden"></span>
  )
};

export default AnalyticsRequester;
