import { Gauge, FileText, AlertTriangle } from "lucide-react"

export function ValueProps() {
    const props = [
        {
            icon: Gauge,
            title: "The Odometer Gap",
            desc: "30% of exported vehicles have altered mileage. We catch it by cross referencing service points.",
            bg: "bg-red-500/10",
            color: "text-red-500"
        },
        {
            icon: FileText,
            title: "The Paper Trail",
            desc: "Avoid vehicles with outstanding liens or legal issues in China. Ensure clean title transfer",
            bg: "bg-yellow-500/10",
            color: "text-yellow-500"
        },
        {
            icon: AlertTriangle,
            title: "Hidden Salvage",
            desc: "Shiny cars often hide structural repairs. We show the truth about accident history.",
            bg: "bg-orange-500/10",
            color: "text-orange-500"
        }
    ]

    return (
        <section className="py-24 bg-[#E2E1DB]">
            <div className="container space-y-12">
                <div className="text-center">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase">Advantage</span>
                    <h2 className="text-3xl font-bold text-gray-900 mt-2">Why Verify?</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {props.map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl border border-black/5 space-y-4 hover:border-black/10 transition-colors shadow-sm">
                            <div className={`${item.bg} ${item.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                                <item.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
