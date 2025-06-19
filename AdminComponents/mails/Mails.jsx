"use client";
import { getLists } from "@/ApiRequest/GetData";
import React, { useEffect, useRef, useState } from "react";

const Mails = ({ oldData }) => {
  const ref = useRef(null);
  const [data, setData] = useState([...oldData]);
  const [index, setIndex] = useState(1);
  const [selectedMail, setSelectedMail] = useState(null);

  useEffect(() => {
    if (data.length > 0) {
      const observer = new IntersectionObserver(
        async ([entry]) => {
          if (entry.isIntersecting) {
            const datas = await getLists("contact", index, 100);
            if (Array.isArray(datas) && datas.length > 0) {
              setData((prev) => [...prev, ...datas]);
              setIndex((prev) => prev + 1);
            }
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) observer.observe(ref.current);
      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }
  }, [data, index]);

  return (
    <div style={{ width: "100%", padding: "32px 0", display: "flex", flexDirection: "column", gap: "20px" }}>
      {Array.isArray(data) &&
        data.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedMail(item)}
            className="flex justify-between items-center cursor-pointer border border-gray-300 rounded-md shadow-md hover:shadow-lg transition-all"
            style={{
              width: "100%",
              padding: "16px",
              backgroundColor: "#f9fafb",
              transition: "background-color 0.2s ease",
            }}
          >
            <div style={{ flex: 1, paddingRight: "16px", overflow: "hidden" }}>
              <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#374151", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {item.fName} &lt;{item.email}&gt;
              </h3>
              <p style={{ fontSize: "18px", color: "#6b7280", marginTop: "4px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {item.message}
              </p>
            </div>
            <span style={{ fontSize: "16px", fontWeight: "500", color: "#9ca3af", whiteSpace: "nowrap" }}>
              {item.date}
            </span>
          </div>
        ))}

      {selectedMail && (
        <div className="w-full fixed flex flex-col top-0 left-0 md:left-[200px] right-0 h-screen items-center justify-center z-50" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "16px" }}>
          <div className="shadow-xl rounded-lg" style={{ maxWidth: "600px", width: "100%", backgroundColor: "#fff", maxHeight: "90vh", display: "flex", flexDirection: "column" }}>
            <div className="flex justify-between items-center border-b" style={{ padding: "20px" }}>
              <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#374151" }}>
                {selectedMail.fName} &lt;{selectedMail.email}&gt;
              </h2>
              <button onClick={() => setSelectedMail(null)} style={{ fontSize: "30px", color: "#6b7280", background: "none", border: "none", cursor: "pointer" }}>
                &times;
              </button>
            </div>
            <div className="overflow-y-auto" style={{ padding: "20px" }}>
              <p style={{ fontSize: "18px", color: "#374151", whiteSpace: "pre-wrap" }}>
                {selectedMail.message}
              </p>
            </div>
            <div className="text-gray-500 bg-gray-50" style={{ padding: "16px", fontSize: "16px", textAlign: "right" }}>
              Received: {selectedMail.date}
            </div>
          </div>
        </div>
      )}

      <div ref={ref} className="text-center text-gray-500" style={{ fontSize: "18px", padding: "32px 0" }}>
        {data.length > 0 ? "No more messages to load" : "No messages found"}
      </div>
    </div>
  );
};

export default Mails;
