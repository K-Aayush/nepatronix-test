"use client";
import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Image from "next/image";

const EstimateBill = ({ data }) => {
  const handleDownload = () => {
    const input = document.getElementById("bill-estimate");
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "px", [816, 1056]); // US-Ledger size in pixels (width x height)
      pdf.addImage(imgData, "PNG", 0, 0, 816, 1056); // Adjust the width and height
      pdf.save(`estimate-bill_${data.billNo}.pdf`);
    });
  };

  const { company,  items, contact, address, billType, billNo, date, total } = data;

  const calcDiscount = (item) => {
    const discount = parseFloat(item?.discount || "0");
    const vat = parseFloat(item?.vat || "0");
    const price = parseFloat(item?.price || "0");
    const semDat = price - (price * discount) / 100;
    return semDat + (semDat * vat) / 100;
  };

  const units = [
    "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"
  ];
  const teens = [
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
  ];
  const tens = [
    "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
  ];
  const thousands = ["", "Thousand", "Million", "Billion", "Trillion"];
  
  const numberToWords = (num) => {
    if (num === 0) return "Zero";
    
    let word = '';
  
    const toWords = (n, idx) => {
      if (n === 0) return '';
      
      let str = '';
      
      if (n >= 100) {
        str += units[Math.floor(n / 100)] + ' Hundred ';
        n %= 100;
      }
      
      if (n >= 10 && n <= 19) {
        str += teens[n - 10] + ' ';
      } else if (n >= 20) {
        str += tens[Math.floor(n / 10)] + ' ';
        n %= 10;
      }
      
      if (n >= 1 && n <= 9) {
        str += units[n] + ' ';
      }
      
      return str.trim() + (thousands[idx] ? ' ' + thousands[idx] : '') + ' ';
    };
    
    let idx = 0;
    
    while (num > 0) {
      let chunk = num % 1000;
      if (chunk > 0) {
        word = toWords(chunk, idx) + word;
      }
      num = Math.floor(num / 1000);
      idx++;
    }
    
    return word.trim();
  };

  return (
    <div>
      {/* VAT bill */}
      <div
        id="bill-estimate"
        style={{
          width: "816px",
          height: "1056px",
          padding: "40px",
          background: "white",
          color: "black",
          fontSize: "12px",
          boxSizing: "border-box",
          position:"absolute",
          top:"-1000%" // Ensure padding doesn't affect width/height
        }}
      >
        <div className="w-full flex justify-center">
          <Image
            src={`/logo2.png`}
            width={100}
            height={100}
            className="w-[75px] h-[75px]"
            style={{ width: "75px", height: "75px" }}
            alt=""
          />
          <div className="w-fit">
            <h1 className="text-[30px] font-semibold py-[10px] px-[30px]">
              Nepatronix Engineering Solution Pvt. Ltd
            </h1>
        <h3 className="w-full text-center text-[18px] font-semibold">
          Estimate
        </h3>
          </div>
        </div>
        <br />
        <div className="w-full flex justify-between text-[12px]">
          <div>
            <b>VAT NO.: </b>
            {"610348093"}
          </div>
          <div>
            <b>Date : </b><span>{date}</span>
          </div>
        </div>
        <div className="w-full">
          <b>{"M/s : "}</b>{company}
          <br />
          <div className="w-full">
            <b>Address : </b>{address}
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="w-fit">
            <b>Customer{"'s"} <span className="uppercase">{billType} No. : </span></b>
            {billNo}
          </div>
          <div>
            <b>Mode of Payment: {"Cash/Cheque/Credit"}</b>
          </div>
        </div>
        <br />
        <table border={1} className="w-full" style={{ border: "2px solid", borderCollapse: "collapse" }}>
          <thead>
            <tr className="text-center" style={{ borderBottom: "2px solid", height:"50px" }}>
              <th style={{ width: "10%", borderRight: "2px solid" }}>S.No.</th>
              <th style={{ width: "50%", borderRight: "2px solid" }}>Particulars</th>
              <th style={{ width: "10%", borderRight: "2px solid" }}>Qty</th>
              <th style={{ width: "10%", borderRight: "2px solid" }}>Rate</th>
              <th>Amount Rs</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(items) && items?.map((item, index) => (
              <tr key={index} className="text-center">
                <td style={{ borderRight: "2px solid" }}>{index + 1}</td>
                <td style={{ borderRight: "2px solid" }}>{item?.name}</td>
                <td style={{ borderRight: "2px solid" }}>{item?.qty}</td>
                <td style={{ borderRight: "2px solid" }}>{calcDiscount(item)}</td>
                <td>{calcDiscount(item) * item?.qty}</td>
              </tr>
            ))}
             <tr className="text-center" style={{height:"40px"}}>
             <td style={{ borderRight: "2px solid" }}></td>
             <td style={{ borderRight: "2px solid" }}></td>
             <td style={{ borderRight: "2px solid" }}></td>
             <td style={{ borderRight: "2px solid" }}></td>
             <td></td>
              </tr>
              <tr className="text-center font-semibold" style={{borderTop:"2px solid black", height:"50px"}}>
              <td >In Words : </td>
              <td className="text-left"></td>
              <td style={{ borderRight: "2px solid" }}></td>
              <td style={{ borderRight: "2px solid" }}>Total</td>
              <td>{total}</td>
            </tr> <tr className="text-center font-semibold" style={{borderTop:"2px solid black", height:"50px"}}>
              <td ></td>
              <td className="text-left"></td>
              <td style={{ borderRight: "2px solid" }}></td>
              <td style={{ borderRight: "2px solid" }}>Advance</td>
              <td></td>
            </tr><tr className="text-center font-semibold" style={{borderTop:"2px solid black", height:"50px"}}>
              <td ></td>
              <td className="text-left"></td>
              <td style={{ borderRight: "2px solid" }}></td>
              <td style={{ borderRight: "2px solid" }}>Recievable</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <br />
        <div className="w-full flex justify-right" style={{width:"100%", display:"flex", justifyContent:"flex-end"}}>
          <div className="w-[250px]">
            <Image  src={"/signature.png"} alt="" width={200} height={200} className="object-contain object-center"style={{width:"200px"}} />
            <b className="text-center" style={{borderTop:"2px solid black", width:"250px"}}>Signature</b>
          </div>
        </div>
      </div>

      {/* main button */}
      <button
        type="button"
        onClick={handleDownload}
        className="w-fit px-[20px] text-[16px] rounded-xl py-[2.5px] text-white bg-slate-600 hover:bg-slate-800 transition-all duration-300"
      >
        Download Estimate Bill
      </button>
    </div>
  );
};

export default EstimateBill;
