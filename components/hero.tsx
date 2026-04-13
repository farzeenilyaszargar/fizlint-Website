import Image from "next/image";
import Link from "next/link";
import CopyCommandBar from "./copyCommandBar";

export default function Hero() {
    return (
        <section className="w-full flex flex-col items-center justify-center">
            <div className="my-10 w-1/2 text-center">
                <h1 className="text-8xl " style={{ fontFamily: "var(--font-jacquard-12)" }}>fizlint</h1>
                <p className="">cli tool for real-time linting of your code.</p>

                <div className="flex flex-col gap-3 py-6">
                    <CopyCommandBar text="npm install -g fizlint" />
                    <Link href="/docs" className="text-gray-500">
                        Read the docs
                        <Image src="/right-arrow.png" alt="arrow right" width={15} height={15} className="grayscale-75 inline-block ml-1 rounded-xl" aria-hidden="true" />
                    </Link>
                </div>
            </div>
            <Image src={"/hero.png"} alt="demo image" width={1200} height={600} className="w-2/3 pb-10" />
        </section>
    );
}
