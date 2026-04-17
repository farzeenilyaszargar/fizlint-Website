import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import CopyCommandBar from "@/components/copyCommandBar";
import Image from "next/image";

export default function DocsPage() {
  const docsCopyButtonClass = "bg-gray-200 hover:bg-gray-300 border-gray-400 !text-black";

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
        <h1 className="mb-2 text-3xl font-bold sm:text-4xl" style={{ fontFamily: "var(--font-jacquarda-bastarda)" }}>
          fizlint docs
        </h1>
        <p className="mb-8 text-sm text-gray-700 sm:mb-10 sm:text-base">
          Small CLI linting for JavaScript and TypeScript projects.
        </p>
        <section className="mb-8 sm:mb-10">
          <h2 className="mb-3 text-xl sm:text-2xl">Overview</h2>
          <p className="mb-3 text-sm text-gray-700 sm:text-base">
            fizzylint is a small terminal linter that scans JavaScript and TypeScript files for a few common
            mistakes and style issues. It is intentionally simple, quick to run, and easy to understand.
          </p>
          <ul className="list-disc space-y-2 pl-6 text-sm sm:text-base">
            <li>Works on JavaScript and TypeScript codebases.</li>
            <li>Supports plain linting and a small auto-fix mode.</li>
            <li>Designed as a lightweight CLI project with minimal setup.</li>
          </ul>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="mb-3 text-xl sm:text-2xl">Install</h2>
          <p className="mb-3 text-sm text-gray-700 sm:text-base">
            Run directly with NPX (no global install required):
          </p>
          <div className="mb-3 rounded-md border border-gray-200 bg-gray-50 p-4">
            <CopyCommandBar text="npx fizzylint" className={docsCopyButtonClass} iconTheme="dark" copyIconSrc="/copy-dark.svg" />
            <p className="mt-3 text-xs text-gray-600 sm:text-sm">
              Downloads and runs fizzylint instantly for the current session without requiring a global package install.
            </p>
          </div>
          <p className="text-xs text-gray-600 sm:text-sm">
            You can also add it to your project tooling and call it in scripts for CI or pre-commit flows.
          </p>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="mb-3 text-xl sm:text-2xl">Quick Start</h2>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Open your JavaScript or TypeScript project folder.</li>
            <li>Run <code>fizzylint</code> or <code>fizzylint lint .</code> to scan the project.</li>
            <li>Run <code>fizzylint fix .</code> to apply supported fixes.</li>
            <li>Run <code>fizzylint help</code> if you want to see the available commands.</li>
          </ol>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="mb-3 text-xl sm:text-2xl">Command Reference</h2>
          <div className="space-y-3">
            <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
              <CopyCommandBar text="fizzylint ." className={docsCopyButtonClass} iconTheme="dark" copyIconSrc="/copy-dark.svg" />
              <p className="mt-3 text-xs text-gray-600 sm:text-sm">
                Runs fizzylint on the current folder using its default behavior, giving you a quick full-project check.
              </p>
            </div>
            <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
              <CopyCommandBar text="fizzylint fix ." className={docsCopyButtonClass} iconTheme="dark" copyIconSrc="/copy-dark.svg" />
              <p className="mt-3 text-xs text-gray-600 sm:text-sm">
                Automatically fixes supported issues such as formatting and straightforward rule violations across the project.
              </p>
            </div>
            <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
              <CopyCommandBar text="fizzylint lint ." className={docsCopyButtonClass} iconTheme="dark" copyIconSrc="/copy-dark.svg" />
              <p className="mt-3 text-xs text-gray-600 sm:text-sm">
                Performs lint checks only and prints diagnostics without changing your files.
              </p>
            </div>
            <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
              <CopyCommandBar text="fizzylint help" className={docsCopyButtonClass} iconTheme="dark" copyIconSrc="/copy-dark.svg" />
              <p className="mt-3 text-xs text-gray-600 sm:text-sm">
                Prints the small built-in help message with the current commands.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="mb-3 text-xl sm:text-2xl">What It Checks</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Trailing whitespace</li>
            <li>Loose equality such as <code>==</code> and <code>!=</code></li>
            <li><code>var</code> usage</li>
            <li><code>console.log</code>, <code>console.debug</code>, and <code>console.info</code></li>
            <li><code>debugger</code> statements</li>
          </ul>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="mb-3 text-xl sm:text-2xl">What Fix Mode Changes</h2>
          <p className="mb-3 text-sm text-gray-700 sm:text-base">
            <code>fizzylint fix .</code> only applies the small safe fixes that are built into the CLI.
          </p>
          <ul className="list-disc space-y-2 pl-6 text-sm sm:text-base">
            <li>Removes trailing whitespace.</li>
            <li>Upgrades <code>==</code> to <code>===</code>.</li>
            <li>Upgrades <code>!=</code> to <code>!==</code>.</li>
            <li>Leaves the other warnings as review-only issues.</li>
          </ul>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="mb-3 text-xl sm:text-2xl">When To Use Each Command</h2>
          <ul className="list-disc space-y-2 pl-6 text-sm sm:text-base">
            <li>Use <code>fizzylint</code> for the quickest project scan.</li>
            <li>Use <code>fizzylint lint .</code> before every commit.</li>
            <li>Use <code>fizzylint fix .</code> after a refactor or formatting-heavy changes.</li>
            <li>Use <code>fizzylint help</code> when you forget the command list.</li>
          </ul>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="mb-3 text-xl sm:text-2xl">Troubleshooting</h2>
          <div className="space-y-3 text-sm sm:text-base">
            <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
              <p className="font-semibold">Command not found</p>
              <p className="mt-1 text-gray-700">Run with <code>npx fizzylint</code> to ensure the package is resolved correctly.</p>
            </div>
            <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
              <p className="font-semibold">Too many issues at once</p>
              <p className="mt-1 text-gray-700">Start with <code>fizzylint fix .</code>, then run <code>fizzylint lint .</code> to review remaining items.</p>
            </div>
            <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
              <p className="font-semibold">Not sure what commands exist</p>
              <p className="mt-1 text-gray-700">Run <code>fizzylint help</code> to print the current command list.</p>
            </div>
          </div>
        </section>

        <section className="mt-2 rounded-2xl border border-gray-200 bg-gray-50 p-4 sm:p-6">
          <h2 className="mb-2 text-2xl sm:text-3xl" style={{ fontFamily: "var(--font-jacquarda-bastarda)" }}>
            Check out on npm
          </h2>
          <p className="mb-4 text-sm text-gray-700 sm:text-base">
            Visit the official package page for installs, version info, and usage updates.
          </p>
          <a
            href="https://www.npmjs.com/package/fizzylint"
            target="_blank"
            rel="noreferrer"
            className="mb-5 inline-flex items-center text-md text-gray-800 underline underline-offset-4 hover:text-black sm:text-lg"
          >
            Open fizzylint package
            <Image
              src="/right-arrow.png"
              alt="open npm"
              width={16}
              height={16}
              className="ml-1 inline-block -rotate-45"
              aria-hidden="true"
            />
          </a>
          <Image
            src="/npm.png"
            alt="fizzylint package preview"
            width={1800}
            height={1000}
            className="h-auto w-full rounded-xl border bg-white p-1"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
