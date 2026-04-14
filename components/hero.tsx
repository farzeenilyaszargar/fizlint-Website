import Image from "next/image";
import Link from "next/link";
import CopyCommandBar from "./copyCommandBar";

export default function Hero() {
    return (
        <section className="flex w-full flex-col items-center justify-center px-4 sm:px-6 md:px-10">
            <div className="my-10 w-full max-w-xl text-center sm:my-12 md:my-20 flex flex-col items-center">
                <h1 className="text-6xl sm:text-7xl md:text-8xl" style={{ fontFamily: "var(--font-jacquard-12)" }}>fizlint</h1>
                <p className="text-sm sm:text-base">cli tool for real time linting of your code</p>

                <div className="flex flex-col gap-3 py-5 sm:pt-6 sm:w-1/2">
                    <CopyCommandBar text="npm i -g fizzylint" copyIconSrc="/copy-dark.svg" />
                    <Link href="https://www.npmjs.com/package/fizzylint" target="_blank" className="text-gray-500">
                        Check out on npm
                        <Image src="/right-arrow.png" alt="arrow right" width={15} height={15} className="grayscale-75 inline-block ml-1 rounded-xl" aria-hidden="true" />
                    </Link>
                </div>
            </div>
            <Image src={"/hero.png"} alt="demo image" width={1200} height={600} className="rounded-xl w-full max-w-5xl pb-10 sm:w-5/6 sm:pb-12 md:w-2/3 md:pb-16 -mt-10" />
        </section>
    );
}
