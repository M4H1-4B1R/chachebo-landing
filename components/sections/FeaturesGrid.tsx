import { Card, CardContent } from "@/components/ui/card";
import { Barcode, CarFront, LineChart, Gauge } from "lucide-react";

export function FeaturesGrid() {
  const features = [
    {
      icon: Barcode,
      title: "VIN Decode",
      desc: "Instantly decode Chinese VINs and chassis numbers with comprehensive manufacturer details, production information, and vehicle specifications.",
    },
    {
      icon: CarFront,
      title: "Accident & Damage",
      desc: "Reveal reported accidents and structural damage from official records.",
    },
    {
      icon: LineChart,
      title: "Risk Score & Grade",
      desc: "Clear risk assessment inspired by professional inspections.",
    },
    {
      icon: Gauge,
      title: "Ownership & Mileage",
      desc: "Track registration history and mileage anomalies.",
    },
  ];

  return (
    <section className="py-24 bg-[#E2E1DB]">
      <div className="container space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Comprehensive <span className="text-[#FF7A00]">Intelligence</span>
          </h2>
          <p className="text-[#4A4A4A] max-w-2xl">
            Deep dive into every aspect of a vehicle's history with our
            proprietary data extraction technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((item, i) => (
            <Card
              key={i}
              className="bg-[#FFFDF7] border-2 border-[#FFE0B2] rounded-2xl overflow-hidden relative group transition-all hover:shadow-md"
            >
              <CardContent className="p-8 flex items-start gap-6 relative z-10">
                <div className="shrink-0">
                  <item.icon
                    className="w-12 h-12 text-[#1A1A1A]"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-[#1A1A1A]">
                    {item.title}
                  </h3>
                  <p className="text-[#4A4A4A] leading-relaxed">{item.desc}</p>
                </div>
              </CardContent>
              {/* Decorative Watermark Icon */}
              <div className="absolute -bottom-4 -right-4 text-[#FF7A00]/5 pointer-events-none transform rotate-[-10deg]">
                <item.icon className="w-48 h-48" strokeWidth={1} />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
