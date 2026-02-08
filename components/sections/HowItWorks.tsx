import { Search, Server, FileCheck } from "lucide-react"

export function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Input",
            desc: "Enter the VIN (Vehicle Identification Number).",
            icon: Search
        },
        {
            number: "02",
            title: "Fetch",
            desc: "System queries the national database in real-time.",
            icon: Server
        },
        {
            number: "03",
            title: "Reveal",
            desc: "Receive comprehensive report instantly.",
            icon: FileCheck
        }
    ]

    return (
        <section className="py-24 bg-[#EFEBE1]">
            <div className="container space-y-16">
                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold text-gray-900">The 3-Step Protocol</h2>
                    <p className="text-gray-600">Fast, reliable, and straightforward.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connector Line */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />

                    {steps.map((step, i) => (
                        <div key={i} className="relative flex flex-col items-center text-center space-y-4">
                            <div className="bg-black p-2 rounded-xl relative z-10 border border-black/5 shadow-sm">
                                <div className="bg-black w-20 h-20 rounded-lg flex items-center justify-center border border-black/5">
                                    <span className="text-white font-bold text-xl">{step.number}</span>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                            <p className="text-sm text-gray-600 max-w-[200px]">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
