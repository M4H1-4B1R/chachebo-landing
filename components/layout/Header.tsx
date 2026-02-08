"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, User } from "lucide-react"
import {useState, useEffect} from "react";
import {cn} from "@/lib/utils";

const navLinks = [
	{href: "#vin-decoder", name: "VIN Decoder"},
	{href: "#sample-report", name: "Sample Report"},
	{href: "#pricing", name: "Pricing"},
	{href: "#how-it-works", name: "How It Works"},
	{href: "#import-guides", name: "Import Guides"},
	{href: "#about", name: "About"}
]

export function Header() {
	const [activeLink, setActiveLink] = useState("");
	// need a intersection observer to track active link
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
								{navLinks.map((link)=>(
									<Link key={link.href} href={link.href} className={cn("relative py-1 transition-colors", activeLink === link.href ? "text-white": "hover:text-primary")}>
									{link.name}
									{activeLink === link.href && (
										<span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-primary/50" />
									)}
									</Link>
								))}
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
