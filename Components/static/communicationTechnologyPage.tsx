"use client";

import PageLayout from "@/Components/layout/page-layout";
import ServiceCard from "@/components/ui/service-card";
import { Radio, Satellite, Lock, Wifi, Antenna, Signal } from "lucide-react";

export default function CommunicationTechnologyPage() {
  const services = [
    {
      icon: Radio,
      title: "Tactical Communications",
      description:
        "Military-grade radio systems for secure battlefield communications and coordination.",
      features: [
        "Frequency hopping technology",
        "Multi-band radio systems",
        "Encrypted voice communication",
        "Jamming-resistant protocols",
      ],
    },
    {
      icon: Satellite,
      title: "Satellite Communication",
      description:
        "Advanced satellite communication systems for global connectivity and data transmission.",
      features: [
        "High-throughput satellite links",
        "Mobile satellite terminals",
        "Redundant communication paths",
        "Global coverage capabilities",
      ],
    },
    {
      icon: Lock,
      title: "Secure Encryption",
      description:
        "Military-grade encryption and cybersecurity solutions for sensitive communications.",
      features: [
        "End-to-end encryption protocols",
        "Quantum-resistant cryptography",
        "Key management systems",
        "Secure authentication methods",
      ],
    },
    {
      icon: Wifi,
      title: "Mesh Networks",
      description:
        "Self-healing mesh network systems for resilient communication in challenging environments.",
      features: [
        "Self-organizing network topology",
        "Automatic route optimization",
        "Fault-tolerant communication",
        "Dynamic bandwidth allocation",
      ],
    },
    {
      icon: Antenna,
      title: "Advanced Antenna Systems",
      description:
        "High-performance antenna arrays and beam-forming technology for optimized signal transmission.",
      features: [
        "Phased array antennas",
        "Adaptive beam steering",
        "MIMO technology integration",
        "Multi-frequency operation",
      ],
    },
    {
      icon: Signal,
      title: "Signal Intelligence",
      description:
        "Advanced signal processing and intelligence gathering systems for electronic warfare.",
      features: [
        "Signal interception capabilities",
        "Direction finding systems",
        "Electronic countermeasures",
        "Spectrum analysis tools",
      ],
    },
  ];

  return (
    <PageLayout
      title="Communication Technology"
      subtitle="Advanced military and defense communication systems providing secure, reliable, and resilient connectivity in critical operations."
      gradientClass="bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900"
    >
      <div className="container px-6 pb-24 mx-auto">
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 max-w-7xl">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              index={index}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
