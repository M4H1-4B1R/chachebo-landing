import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function DashboardPreview() {
    return (
        <section className="py-24 bg-[#EFEBE1] overflow-hidden">
            <div className="container">
                <div className="bg-white rounded-3xl p-8 md:p-12 border border-black/5 relative shadow-xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                See what's under the hood. <br />
                                <span className="text-primary">Literally.</span>
                            </h2>
                            <p className="text-gray-600">
                                Every report gives you the raw facts, verified against local Chinese government databases.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Risk Score Analysis",
                                    "Maintenance Logs",
                                    "Auction Photos"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="bg-green-500/10 p-1 rounded-full">
                                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                                        </div>
                                        <span className="text-gray-800 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Button size="lg" className="rounded-full">
                                View Sample Report
                            </Button>
                        </div>

                        <div className="relative">
                            {/* Decoration */}
                            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />

                            <div className="relative rounded-xl overflow-hidden border border-black/10 shadow-2xl">
                                {/* Placeholder for the generated image */}
                                <div className="aspect-video bg-gray-100 flex items-center justify-center text-gray-700">
                                    <img
                                        src="/dashboard_preview.png"
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
    )
}
