import { Card, CardContent } from "@/components/ui/card"
import { Barcode, CarFront, LineChart, Gauge } from "lucide-react"

export function FeaturesGrid() {
    const features = [
        {
            icon: Barcode,
            title: "VIN Decode",
            desc: "Decode comprehensive data from manufacturer specs to production details, ensuring accurate verification.",
            bg: "bg-orange-500/10",
            color: "text-orange-500"
        },
        {
            icon: CarFront,
            title: "Accident & Damage",
            desc: "Reveal reported accidents, structural damage, and repair history.",
            bg: "bg-blue-500/10",
            color: "text-blue-500"
        },
        {
            icon: LineChart,
            title: "Risk Score & Oracle",
            desc: "Comprehensive risk assessment based on actuarial value factors.",
            bg: "bg-purple-500/10",
            color: "text-purple-500"
        },
        {
            icon: Gauge,
            title: "Ownership & Mileage",
            desc: "Track registration history and mileage validation.",
            bg: "bg-green-500/10",
            color: "text-green-500"
        }
    ]

    return (
        <section className="py-24 bg-[#FBFAF1]">
            <div className="container space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Comprehensive <span className="text-primary">Intelligence</span>
                    </h2>
                    <p className="text-gray-600 max-w-lg mx-auto">
                        Deep dive into every aspect of the vehicle's history with our integrated data checks.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {features.map((item, i) => (
                        <Card key={i} className="bg-white border-black/5 hover:border-primary/50 transition-colors group shadow-sm">
                            <CardContent className="flex items-start gap-6 p-8">
                                <div className={`${item.bg} ${item.color} p-4 rounded-lg group-hover:scale-110 transition-transform`}>
                                    <item.icon className="h-8 w-8" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
