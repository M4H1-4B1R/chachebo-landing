import Link from "next/link"
import { Twitter, Linkedin, Facebook } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-[#050505] border-t border-white/10 py-12">
            <div className="container">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="bg-primary h-6 w-6 rounded flex items-center justify-center text-white text-xs font-bold">
                                C
                            </div>
                            <span className="text-lg font-bold text-white">Chachebo</span>
                        </div>
                        <p className="text-gray-500 text-sm">
                            Verify Chinese vehicle history with confidence.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-gray-500 hover:text-white"><Twitter className="h-4 w-4" /></Link>
                            <Link href="#" className="text-gray-500 hover:text-white"><Linkedin className="h-4 w-4" /></Link>
                            <Link href="#" className="text-gray-500 hover:text-white"><Facebook className="h-4 w-4" /></Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="#" className="hover:text-primary">VIN Decode</Link></li>
                            <li><Link href="#" className="hover:text-primary">Accident History</Link></li>
                            <li><Link href="#" className="hover:text-primary">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-primary">API Access</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="#" className="hover:text-primary">About Us</Link></li>
                            <li><Link href="#" className="hover:text-primary">Blog</Link></li>
                            <li><Link href="#" className="hover:text-primary">Careers</Link></li>
                            <li><Link href="#" className="hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <div className="bg-[#111111] p-4 rounded-lg border border-white/10">
                            <div className="text-white font-bold text-sm mb-1">Vehicle Data API</div>
                            <p className="text-xs text-gray-500 mb-2">Integrate directly into your app.</p>
                            <Link href="#" className="text-primary text-xs font-bold hover:underline">Get API Key &rarr;</Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <div>&copy; 2026 Chachebo Inc. All rights reserved.</div>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-gray-400">Privacy Policy</Link>
                        <Link href="#" className="hover:text-gray-400">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
