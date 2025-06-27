import PortablePatientMonitoringPage from "@/Components/static/PortablePatientMonitoringPage";
import React from "react";

export const metadata = {
  title: "Portable Patient Monitoring",
  description:
    "Empower healthcare with portable, real-time patient monitoring solutions.",
  openGraph: {
    title: "Portable Patient Monitoring",
    description:
      "Empower healthcare with portable, real-time patient monitoring solutions.",
    images: "/images/portable-monitoring-hero.png",
  },
};

const page = () => {
  return <PortablePatientMonitoringPage />;
};

export default page;
