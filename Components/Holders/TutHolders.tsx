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
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {Array.isArray(data) &&
          data.map((item: any, index: number) => (
            <motion.div
              key={item.id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              className="overflow-hidden border bg-indigo-900/30 backdrop-blur-sm rounded-xl border-white/20"
            >
              <Yt data={item} />
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};

export default TutHolders;
