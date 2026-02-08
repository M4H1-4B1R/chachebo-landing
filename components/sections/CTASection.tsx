import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CTASection() {
	return (
		<section className="py-24 relative overflow-hidden bg-[#121418]">
			{/* Background gradients */}
			<div className="absolute top-0 right-0 w-[1900px] h-[900px] bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

			<div className="container relative z-10">
				<div className="bg-white rounded-3xl p-9 md:p-14 text-center space-y-8 shadow-xl border border-black/5">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
						Get a Free Data Preview
					</h2>
					<p className="text-gray-600 text-lg max-w-2xl mx-auto">
						Experience the power of Chachebo logic before you buy. No credit card required.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
						<Input
							placeholder="Enter VIN Number"
							className="bg-gray-50 border-gray-200 text-black h-12 text-lg placeholder:text-gray-400"
						/>
						<Button size="lg" className="h-12 px-8 text-lg font-bold shadow-lg bg-primary hover:bg-primary/90 text-white">
							Get Preview
						</Button>
					</div>

					<p className="text-xs text-gray-500">
						By continuing over, you accept our Terms & Conditions.
					</p>
				</div>
			</div>
		</section>
	)
}
