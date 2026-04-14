import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-white/40 px-4 py-3 backdrop-blur-sm sm:px-6 md:px-10 lg:px-20">
            <div className="flex  gap-3 flex-row sm:items-center justify-between">
                <Link href="/" className="text-2xl font-bold sm:text-3xl" style={{ fontFamily: "var(--font-jacquarda-bastarda)" }}>fizlint</Link>
                <ul className="flex items-center gap-4 text-sm sm:gap-5 sm:text-base">
                    <li><Link href="/docs">Docs</Link></li>
                    <li><Link href="https://github.com/farzeenilyaszargar/fizlint" target="_blank">GitHub</Link></li>
                </ul>
            </div>
        </nav>
    );
}
