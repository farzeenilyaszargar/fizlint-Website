import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t w-full">
            <div className="flex justify-between items-center w-full px-20 py-5 text-sm">
                <p className="">© 2026 Fizlint by Farzeen Ilyas Zargar. All rights reserved.</p>
                <ul className="flex gap-5">
                    <li><Link href="/docs">Docs</Link></li>
                    <li><Link href="https://github.com/farzeenilyaszargar/fizlint">GitHub</Link></li>

                </ul>
            </div>
        </footer>
    );
}