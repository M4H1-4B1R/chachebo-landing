import { Quote } from "lucide-react"

export function Testimonial() {
	return (
		<section className="py-24 bg-[#E2E1DB]">
			<div className="container space-y-5 bg-[#FBFAF1] py-10 rounded-lg">
				<div className="flex justify-end">
					<div className="bg-primary/10 p-4 rounded-full">
						<Quote className="h-8 w-8 text-primary fill-primary opacity-30" />
					</div>
				</div>
				<div className="flex flex-col justify-start text-left gap-5">
					<p className="text-primary text-sm">The importers choice</p>
					<blockquote className="text-3xl md:text-4xl font-bold text-gray-900 max-w-4xl leading-tight text-left">
						"Essential for my dealership. I never bid on a Chinese EV without running this report first. It's saved us thousands."
					</blockquote>
					<div className="space-y-1">
						<div className="text-gray-900 font-bold">Ben C.</div>
						<div className="text-gray-600 text-sm">EuroAuto Imports</div>
					</div>
				</div>

				<div className="flex justify-end gap-8 pt-8 opacity-80 grayscale hover:grayscale-0 transition-all">
					{/* Mock logos */}
					<span className="text-gray-600 font-bold text-xl">LOGISTICS</span>
					<span className="text-gray-600 font-bold text-xl">PARTNERS</span>
					<span className="text-gray-600 font-bold text-xl">CLOUD</span>
				</div>
			</div>
		</section>
	)
}
