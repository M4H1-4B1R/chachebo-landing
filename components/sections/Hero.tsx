import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  Search,
  ArrowRight,
  File,
  Shield,
  Lock,
  Zap,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
            Verify Chinese Vehicle History with{" "}
            <span className="text-primary">Absolute Confidence</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-lg">
            Eleminating the black box of imports. Access 100% verified records,
            mileage history and damage logs directly from official sources
          </p>

          <div className="bg-white/5 p-2 rounded-lg backdrop-blur-sm border border-white/10 flex flex-col sm:flex-row gap-2 max-w-xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Enter VIN Number (e.g. LFV3...)"
                className="pl-10 bg-transparent border-none text-white placeholder:text-gray-500 focus-visible:ring-0 h-12 text-lg"
              />
            </div>
            <Button
              size="lg"
              className="h-12 px-8 rounded-md text-base font-bold shadow-[0_0_20px_rgba(255,122,0,0.3)] hover:shadow-[0_0_30px_rgba(255,122,0,0.5)] transition-shadow"
            >
              Check History
            </Button>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400 font-medium">
            <span className="flex items-center gap-2 text-primary">
              <File className="h-4 w-4" /> View Sample Report
            </span>
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-500" /> Official Data Link
            </span>
            <span className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-green-500" /> SSL Encrypted
            </span>
            <span className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-green-500" /> Instant Generation
            </span>
          </div>
        </div>

        <div className="relative flex justify-center">
          {/* Decorative orbit ring */}
          <div className="absolute inset-0 border border-primary/20 rounded-full w-[500px] h-[500px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow pointer-events-none" />

          <Card className="w-[400px] bg-[#111111] border-white/10 relative overflow-hidden shadow-2xl">
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 blur-2xl" />

            <CardContent className="p-8 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-white font-bold text-lg">
                    Vehicle Score
                  </h3>
                  <p className="text-gray-500 text-sm">Based on 150+ checks</p>
                </div>
                <div className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-xs font-bold border border-green-500/20">
                  LOW RISK
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Condition</span>
                    <span className="text-white font-medium">98%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[98%]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Mileage Accuracy</span>
                    <span className="text-white font-medium">100%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-full" />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">A</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    Grade
                  </div>
                </div>
                <div className="h-10 w-px bg-white/10" />
                <div className="text-right">
                  <div className="text-xl font-bold text-white">Verified</div>
                  <div className="text-xs text-gray-500">
                    Last updated: 2m ago
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
