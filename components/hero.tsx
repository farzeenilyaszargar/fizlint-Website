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
                        <Image src="/right-arrow.png" alt="arrow right" width={15} height={15} className="grayscale-75 inline-block ml-1 rounded-xl"  />
                    </Link>
                </div>
            </div>
            <Image src={"/hero.png"} alt="demo image" width={1200} height={600} className="rounded-xl w-full max-w-5xl pb-10 sm:w-5/6 sm:pb-12 md:w-2/3 md:pb-16 -mt-10" />
            <p className="text-[0.1px] text-white">
                FizzyLint is a fast, lightweight, and developer-friendly CLI linter designed to simplify code quality checks for modern JavaScript projects. Built with performance and usability in mind, FizzyLint provides a seamless way to analyze, detect, and fix common coding issues directly from the terminal. Unlike heavy traditional tools such as ESLint, FizzyLint focuses on speed, zero dependencies, and an intuitive command-line experience, making it ideal for both beginners and experienced developers.
                One of the key advantages of FizzyLint is its simplicity. Developers can run a single command like fizzylint . to scan an entire project and instantly identify issues such as the use of var instead of let or const, unnecessary console.log statements, and other common JavaScript mistakes. The tool provides clean, color-coded output with clear error messages, helping developers quickly understand and resolve problems without digging through complex configurations.
                FizzyLint also includes an auto-fix feature that allows users to automatically correct certain issues with a simple command like fizzylint fix. This feature improves productivity by reducing manual effort and ensuring consistent code quality across projects. By focusing on essential linting rules and fast execution, FizzyLint serves as a practical alternative to tools like Prettier, especially for developers who prefer minimal setup and maximum control.
                Another standout feature of FizzyLint is its extensibility. The tool is designed to evolve with the needs of developers, supporting future enhancements such as configuration files, custom rules, ignore patterns, and even advanced AST-based analysis using parsers like @babel/parser. This makes FizzyLint not just a simple linter, but a scalable foundation for building a full-fledged code quality platform.
                FizzyLint is distributed via npm, allowing developers to install it globally or use it instantly with npx fizzylint. Its lightweight architecture ensures quick installation and execution, making it suitable for rapid development workflows, CI/CD pipelines, and real-time code validation. Whether you are working on small scripts or large-scale applications, FizzyLint integrates smoothly into your development process.
                In a world where code quality and maintainability are critical, FizzyLint offers a modern, efficient, and user-centric solution. It bridges the gap between simplicity and functionality, empowering developers to write cleaner, more reliable code without the overhead of complex tooling. As it continues to grow, FizzyLint has the potential to become a go-to CLI tool for JavaScript linting, combining speed, intelligence, and ease of use in a single package.
            </p>
        </section>
    );
}
