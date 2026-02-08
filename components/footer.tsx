import Link from "next/link";


export function Footer() {
    return (
        <footer className="bg-black py-12 px-4 relative z-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-neutral-500">
                <span>© {new Date().getFullYear()} Alle rechten voorbehouden.</span>
                <Link
                    href="/privacy"
                    className="hover:text-white transition-colors underline"
                >
                    Privacy Policy
                </Link>
                <a
                    href="mailto:support@bijdehand.app"
                    className="hover:text-white transition-colors underline"
                >
                    Support
                </a>
            </div>
        </footer>
    );
}
