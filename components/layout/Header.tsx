import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, User } from "lucide-react"

export function Header() {
    return (
        <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="bg-primary h-8 w-8 rounded-md flex items-center justify-center text-white font-bold">
                        C
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">Chachebo</span>
                </div>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    <Link href="#" className="hover:text-primary transition-colors">Sample Report</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Pricing</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Real Stories</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Contact Us</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Blog</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <button className="text-gray-300 hover:text-white flex items-center gap-1 text-sm font-medium">
                        <Globe className="h-4 w-4" /> En
                    </button>
                    <Link href="#" className="text-gray-300 hover:text-white text-sm font-medium">
                        Log In
                    </Link>
                    <Button className="rounded-full px-6 font-semibold shadow-[0_0_15px_rgba(255,122,0,0.5)]">
                        Get Report
                    </Button>
                </div>
            </div>
        </header>
    )
}
