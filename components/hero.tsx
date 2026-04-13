import Image from "next/image";
import Link from "next/link";
import CopyCommandBar from "./copyCommandBar";

export default function Hero() {
    return (
        <section className="hero">
            <div className="my-20 border text-center">
                <h1 className="text-7xl">fizlint</h1>
                <p className="">cli tool for real-time linting of your code.</p>

                <div>
                    <CopyCommandBar text="npm install -g fizlint" />
                    <Link href="/docs" className="text-gray-400">Get Started</Link>
                </div>
            </div>
            <Image src={"/logo.png"} alt="demo image" width={300} height={300} className="" />
        </section>
    );
}