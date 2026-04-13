import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="navbar border w-full px-20">
            <div className="flex justify-between ">
                <Link href="/" className="navbar-logo">fizlint</Link>
                <ul className="flex gap-5">
                    <li><Link href="/docs">Docs</Link></li>
                    <li><Link href="/github">GitHub</Link></li>
                </ul>
            </div>
        </nav>
    );
}