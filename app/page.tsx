import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { TrustBar } from "@/components/sections/TrustBar"
import { FeaturesGrid } from "@/components/sections/FeaturesGrid"
import { DashboardPreview } from "@/components/sections/DashboardPreview"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { ValueProps } from "@/components/sections/ValueProps"
import { Testimonial } from "@/components/sections/Testimonial"
import { CTASection } from "@/components/sections/CTASection"

export default function Home() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] overflow-x-hidden selection:bg-primary selection:text-white">
            <Header />
            <Hero />
            <TrustBar />
            <FeaturesGrid />
            <DashboardPreview />
            <HowItWorks />
            <ValueProps />
            <Testimonial />
            <CTASection />
            <Footer />
        </main>
    )
}
