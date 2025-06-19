"use client"
import React, { useState } from "react";
import AddNewTeam from "../reusables/AddNewTeam"
import EditTeam from "../reusables/EditTeam";

const PortfolioList = ({ data }) => {
  const [list, setList] = useState(data);

  return (
    <div>
      <AddNewTeam/>
      {list?.map((item, index) => (
        <EditTeam key={index} data={item} />
      ))}
    </div>
  );
};

export default PortfolioList;
