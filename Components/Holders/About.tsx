import React from "react";
import { getLists } from "@/ApiRequest/GetData";
import AboutContent from "@/Components/clientComponents/AboutContent";

const About = async () => {
  const data = await getLists("about", 0, 0);
  return <AboutContent content={data?.content} cards={data?.cards} />;
};

export default About;
