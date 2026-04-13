import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="border-b w-full px-20 py-2 sticky top-0 z-50 bg-white/40 backdrop-blur-sm">
            <div className="flex justify-between ">
                <Link href="/" className="text-2xl font-bold" style={{ fontFamily: "var(--font-jacquarda-bastarda)" }}>fizlint</Link>
                <ul className="flex gap-5 justify-center items-center">
                    <li><Link href="/docs">Docs</Link></li>
                    <li><Link href="https://github.com/farzeenilyaszargar/fizlint">GitHub</Link></li>
                </ul>
            </div>
        </nav>
    );
}
