import {
  ScanBarcode,
  Globe2,
  Car,
  Headphones,
  ShieldCheck,
} from "lucide-react";

export function TrustBar() {
  const items = [
    { icon: ScanBarcode, label: "Real-Time VIN Decoding" },
    { icon: Globe2, label: "Global Importer" },
    { icon: Car, label: "50+ Types of Cars" },
    { icon: Headphones, label: "24/7 Support" },
    { icon: ShieldCheck, label: "Official Data Sources" },
  ];

  return (
    <section className="bg-[#EFEBE1] border-b border-black/5">
      <div className="container py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 text-center group cursor-default"
            >
              <item.icon className="h-6 w-6 text-gray-500 group-hover:text-primary transition-colors" />
              <span className="text-sm font-medium text-gray-600 group-hover:text-black transition-colors">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
