import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-12 px-4 relative z-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start text-sm text-neutral-500">
                    <span className="font-semibold text-neutral-300">Bijdehand</span>
                    <span>© {new Date().getFullYear()} Alle rechten voorbehouden.</span>
                </div>

                <div className="flex items-center gap-6 text-sm">
                    <Link
                        href="/privacy"
                        className="text-neutral-400 hover:text-white transition-colors"
                    >
                        Privacy Policy
                    </Link>
                    <a
                        href="mailto:support@bijdehand.app"
                        className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                        Support
                        <ArrowUpRight className="w-3 h-3" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
