import { Quote } from "lucide-react"

export function Testimonial() {
    return (
        <section className="py-24 bg-[#FBFAF1]">
            <div className="container text-center space-y-8">
                <div className="flex justify-center">
                    <div className="bg-primary/10 p-4 rounded-full">
                        <Quote className="h-8 w-8 text-primary fill-primary" />
                    </div>
                </div>
                <blockquote className="text-3xl md:text-4xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
                    "Essential for my dealership. I never bid on a Chinese EV without running this report first. It's saved us thousands."
                </blockquote>
                <div className="space-y-1">
                    <div className="text-gray-900 font-bold">Ben C.</div>
                    <div className="text-gray-600 text-sm">Automotive Importer</div>
                </div>

                <div className="flex justify-center gap-8 pt-8 opacity-40 grayscale hover:grayscale-0 transition-all">
                    {/* Mock logos */}
                    <span className="text-gray-400 font-bold text-xl">LOGISTICS</span>
                    <span className="text-gray-400 font-bold text-xl">PARTNERS</span>
                    <span className="text-gray-400 font-bold text-xl">CLOUD</span>
                </div>
            </div>
        </section>
    )
}
