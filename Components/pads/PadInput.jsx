"use client";
import React, { useEffect, useRef, useState } from "react";
import Papa from "papaparse";
import * as XLSX from "xlsx";

const PadInput = () => {
  const [fileData, setFileData] = useState({
    machine: [],
    school: [],
  });

  const [result, setResult] = useState([]);

  useEffect(() => {
    console.log(fileData);
  }, [fileData]);

  useEffect(() => {
    console.log(result);
  }, [result]);

  const machine = useRef(null);
  const school = useRef(null);

  const handleFileData = async (file, type) => {
    const fileType = file.type;

    if (fileType.includes("csv") || file.name.endsWith(".txt")) {
      readTextOrCSV(file, type);
    } else if (
      fileType.includes("spreadsheetml") ||
      file.name.endsWith(".xls") ||
      file.name.endsWith(".xlsx")
    ) {
      readExcel(file, type);
    } else {
      alert("Unsupported file type");
    }
  };

  const readTextOrCSV = (file, type) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result;
      Papa.parse(text, {
        header: true,
        complete: (results) => {
          setFileData((prevData) => ({
            ...prevData,
            [type]: results.data,
          }));
        },
        error: (error) => {
          console.error("Error reading text or CSV file:", error);
        },
      });
    };
    reader.readAsText(file);
  };

  const readExcel = (file, type) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      setFileData((prevData) => ({
        ...prevData,
        [type]: jsonData,
      }));
    };
    reader.onerror = (error) => {
      console.error("Error reading Excel file:", error);
    };
    reader.readAsArrayBuffer(file);
  };

  const handleMachineData = async (event) => {
    const file = event.target.files[0];
    await handleFileData(file, "machine");
  };

  const handleSchoolData = async (event) => {
    const file = event.target.files[0];
    await handleFileData(file, "school");
  };

  const genOutput = () => {
    const school = [...fileData.school];
    const machine = [...fileData.machine];
    const output = [];

    for (let obj of school) {
      const student_uid = obj["UID"];
      const studentTrack = {
        Name: obj["Name"],
        Class: obj["Class"],
        "Roll No": obj["Roll No"],
        "Pad Used": 0,
      };
      for (let machineObj of machine) {
        const machine_uid = machineObj["UID"];
        if (student_uid === machine_uid) {
          studentTrack["Pad Used"] += 1;
        }
      }
      if (studentTrack["Pad Used"] > 0) {
        output.push(studentTrack);
      }
    }
    setResult(output);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(fileData.machine.length > 0) || !(fileData.school.length > 0)) {
      return alert("Enter All Files");
    }
    genOutput();
  };

  const downloadExcel = () => {
    const jsonData = result.map(item => ({
      "Name": item.Name,
      "Class": item.Class,
      "Roll No": item["Roll No"],
      "Pad Used": item["Pad Used"]
    }));

    const worksheet = XLSX.utils.json_to_sheet(jsonData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Pad Count");

    // Generate a unique name for the Excel file
    const fileName = `Pad_Count_${new Date().getTime()}.xlsx`;

    // Save the file
    XLSX.writeFile(workbook, fileName);
  };

  return (
    <section className="w-full p-[20px]">
      <div className="w-full p-0 flex justify-center">
        <form
          className="w-full p-[20px] max-w-[400px] border shadow-xl"
          onSubmit={handleSubmit}
        >
          <h1
            className="w-full p-[20px] font-semibold bg-gradient-to-l from-red-500 to-blue-500 text-transparent text-center text-[40px]"
            style={{ backgroundClip: "text" }}
          >
            Pad Counter
          </h1>
          <br />
          <button
            type="button"
            onClick={() => {
              school.current.click();
            }}
            className="w-full p-[15px] text-white font-semibold text-[22px] bg-gradient-to-l from-red-500 to-blue-500 rounded-full"
          >
            Enter School Data
          </button>
          <br />
          <br />
          <button
            type="button"
            onClick={() => {
              machine.current.click();
            }}
            className="w-full p-[15px] text-white font-semibold text-[22px] bg-gradient-to-l from-red-500 to-blue-500 rounded-full"
          >
            Enter Machine{"'"}s Data
          </button>
          <input
            type="file"
            accept=".csv, .xlsx, .xls, .txt"
            ref={machine}
            onChange={handleMachineData}
            className="hidden"
          />
          <input
            type="file"
            accept=".csv, .xlsx, .xls, .txt"
            ref={school}
            onChange={handleSchoolData}
            className="hidden"
          />
          <br />
          <br />
          <button className="w-full p-[10px] text-[22px] text-white bg-blue-500 rounded-full">
            Submit
          </button>
        </form>
      </div>
      <br />
      <div className="flex justify-center flex-col">
        {result?.length > 0 && (
          <table className="border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-[10px] text-[20px]">
                  Name
                </th>
                <th className="border border-gray-300 p-[10px] text-[20px]">
                  Class
                </th>
                <th className="border border-gray-300 p-[10px] text-[20px]">
                  Roll No
                </th>
                <th className="border border-gray-300 p-[10px] text-[20px]">
                  Pad Used
                </th>
              </tr>
            </thead>
            <tbody>
              {result?.map((item, index) => (
                <tr key={index} className="bg-white">
                  <td className="border border-gray-300 p-[10px] text-[20px]">
                    {item?.Name}
                  </td>
                  <td className="border border-gray-300 p-[10px] text-[20px]">
                    {item?.Class}
                  </td>
                  <td className="border border-gray-300 p-[10px] text-[20px]">
                    {item?.["Roll No"]}
                  </td>
                  <td className="border border-gray-300 p-[10px] text-[20px]">
                    {item?.["Pad Used"]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <br />
        <br />
        {result?.length > 0 && (
          <button onClick={downloadExcel} className="w-full p-[5px] text-[20px] text-white bg-red-500 rounded-full max-w-[400px]">
            Download
          </button>
        )}
      </div>
    </section>
  );
};

export default PadInput;
