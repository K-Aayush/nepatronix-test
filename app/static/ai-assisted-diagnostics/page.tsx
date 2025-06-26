import AIAssistedDiagnosisPage from "@/Components/static/AIAssistedDiagnosisPage";
import React from "react";

export const metadata = {
  title: "AI-Assisted Diagnosis",
  description: "Revolutionize healthcare with AI-powered diagnostic tools.",
  openGraph: {
    title: "AI-Assisted Diagnosis",
    description: "Revolutionize healthcare with AI-powered diagnostic tools.",
    images: "/images/ai-diagnosis-hero.png",
  },
};

const page = () => {
  return <AIAssistedDiagnosisPage />;
};

export default page;
