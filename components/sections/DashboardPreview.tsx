import { Button } from "@/components/ui/button";
import { CheckCircle2, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function DashboardPreview() {
  const features = [
    {
      title: "Risk Score: Instant Grade",
      subtitle: "Automated 5 to F grading based on 100+ risk factors.",
    },
    {
      title: "Maintenance Logs",
      subtitle: "Records from multiple Chinese service centers.",
    },
    {
      title: "Auction Photos",
      subtitle: "Visual proof of condition from auction houses (if available).",
    },
  ];

  return (
    <section className="py-24 bg-[#E2E1DB] overflow-hidden">
      <div className="container">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-black/5 relative shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
                See what&apos;s under the hood.{" "}
                <span className="text-[#FF7A00]">Literally.</span>
              </h2>
              <p className="text-[#4A4A4A]">
                Don&apos;t rely on guesswork. Our multi-layered reports expose
                every detail hidden in the Chinese automotive ecosystem.
              </p>

              <div className="space-y-4">
                {features.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="bg-green-500/10 p-1 rounded-full mt-0.5 shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-[#1A1A1A] font-semibold">
                        {item.title}
                      </p>
                      <p className="text-[#6B6B6B] text-sm">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/sample-report">
                <Button size="lg" className="rounded-full gap-2">
                  <Eye className="h-5 w-5" />
                  View Full Sample Report
                </Button>
              </Link>
            </div>

            <div className="relative">
              {/* Decoration */}
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />

              <div className="relative rounded-xl overflow-hidden border border-black/10 shadow-2xl">
                {/* Placeholder for the generated image */}
                <div className="aspect-video bg-gray-100 flex items-center justify-center text-gray-700">
                  <img
                    src="/visual-content.png"
                    alt="Dashboard Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
