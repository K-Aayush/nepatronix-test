"use client";

import { getLists } from "@/ApiRequest/GetData";
import React, { useEffect, useState } from "react";
import Yt from "../Reusables/Yt";
import { motion } from "framer-motion";

const TutHolders = ({ oldData }: { oldData: any[] }) => {
  const [data, setData] = useState([...oldData]);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    if (data?.length > 0 && index > 0) {
      const handleScroll = async () => {
        if (
          window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 100
        ) {
          const fetched = await getLists("tutorials", index, 12);
          if (fetched.length === 0) return;
          setIndex((prev) => prev + 1);
          setData((prev: any) => [...prev, ...fetched]);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [index, data.length]);

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {Array.isArray(data) &&
          data.map((item: any, index: number) => (
            <Yt key={item.id || index} data={item} />
          ))}
      </motion.div>
    </div>
  );
};

export default TutHolders;
