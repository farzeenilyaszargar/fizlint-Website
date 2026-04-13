import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border w-full">
            <div className="footer-container">
                <p className="footer-text">© 2024 Live Linter. All rights reserved.</p>
                <ul className="footer-menu">
                    <li><Link href="/docs">Docs</Link></li>
                    <li><Link href="/github">GitHub</Link></li>
                </ul>
            </div>
        </footer>
    );
}