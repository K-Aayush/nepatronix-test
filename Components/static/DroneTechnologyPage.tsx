"use client";

import PageLayout from "@/Components/layout/page-layout";
import ServiceCard from "@/components/ui/service-card";
import { Plane, Camera, Radar, Shield, Zap, Satellite } from "lucide-react";

export default function DroneTechnologyPage() {
  const services = [
    {
      icon: Plane,
      title: "Autonomous Flight Systems",
      description:
        "Advanced autonomous flight control systems for military and civilian drone applications.",
      features: [
        "AI-powered navigation algorithms",
        "Obstacle avoidance systems",
        "Swarm coordination protocols",
        "Weather-adaptive flight planning",
      ],
    },
    {
      icon: Camera,
      title: "Surveillance & Reconnaissance",
      description:
        "High-resolution imaging and surveillance systems for security and defense operations.",
      features: [
        "Multi-spectral imaging systems",
        "Real-time video streaming",
        "Thermal imaging capabilities",
        "Long-range surveillance options",
      ],
    },
    {
      icon: Radar,
      title: "Advanced Sensor Integration",
      description:
        "Sophisticated sensor packages for comprehensive situational awareness and data collection.",
      features: [
        "LiDAR mapping systems",
        "Electronic warfare sensors",
        "Chemical detection equipment",
        "Signal intelligence gathering",
      ],
    },
    {
      icon: Shield,
      title: "Counter-Drone Systems",
      description:
        "Defensive technologies designed to detect, track, and neutralize unauthorized drones.",
      features: [
        "RF detection and jamming",
        "Kinetic interception systems",
        "Cyber warfare capabilities",
        "Automated threat assessment",
      ],
    },
    {
      icon: Zap,
      title: "Combat Drone Platforms",
      description:
        "Military-grade combat drones with precision strike capabilities and tactical advantages.",
      features: [
        "Precision weaponry integration",
        "Stealth technology features",
        "Electronic countermeasures",
        "Mission-critical reliability",
      ],
    },
    {
      icon: Satellite,
      title: "Communication Systems",
      description:
        "Secure, long-range communication systems for drone operations in challenging environments.",
      features: [
        "Satellite communication links",
        "Encrypted data transmission",
        "Mesh networking capabilities",
        "Low-latency control systems",
      ],
    },
  ];

  return (
    <PageLayout
      title="Drone Technology"
      subtitle="Cutting-edge unmanned aerial vehicle technology for defense, security, and tactical applications with advanced autonomous capabilities."
      gradientClass="bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900"
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
