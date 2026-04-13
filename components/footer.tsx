import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t w-full">
            <div className="flex w-full flex-col items-center justify-between gap-3 px-4 py-5 text-center text-xs sm:flex-row sm:gap-5 sm:px-6 sm:py-6 sm:text-left sm:text-sm md:px-10 lg:px-20">
                <p>© 2026 Fizlint by Farzeen Ilyas Zargar. All rights reserved.</p>
                <ul className=" gap-4 sm:gap-5 sm:flex hidden">
                    <li><Link href="/docs">Docs</Link></li>
                    <li><Link href="https://github.com/farzeenilyaszargar/fizlint">GitHub</Link></li>

                </ul>
            </div>
        </footer>
    );
}
