import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import CopyCommandBar from "@/components/copyCommandBar";

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
        <h1 className="mb-2 text-3xl font-bold sm:text-4xl" style={{ fontFamily: "var(--font-jacquarda-bastarda)" }}>
          fizlint docs
        </h1>
        <p className="mb-8 text-sm text-gray-700 sm:mb-10 sm:text-base">
          Real-time linting and code analysis for JavaScript and TypeScript projects.
        </p>

        <section className="mb-8 sm:mb-10">
          <h2 className="mb-3 text-xl sm:text-2xl">Overview</h2>
          <p className="mb-3 text-sm text-gray-700 sm:text-base">
            fizzylint helps you detect issues early, auto-fix common problems, and keep your project quality
            consistent over time. It is built for fast feedback while writing code and quick quality checks
            before commits or releases.
          </p>
          <ul className="list-disc space-y-2 pl-6 text-sm sm:text-base">
            <li>Works on JavaScript and TypeScript codebases.</li>
            <li>Supports lint-only, auto-fix, watch mode, and analysis mode.</li>
            <li>Produces actionable diagnostics and project-level quality insights.</li>
          </ul>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="mb-3 text-xl sm:text-2xl">Install</h2>
          <p className="mb-3 text-sm text-gray-700 sm:text-base">
            Run directly with NPX (no global install required):
          </p>
          <div className="mb-3 rounded-md border bg-gray-50 p-4">
            <CopyCommandBar text="npx fizzylint" />
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
            <li>Run <code>fizzylint lint .</code> to scan the project.</li>
            <li>Run <code>fizzylint fix .</code> to apply supported fixes.</li>
            <li>Run <code>fizzylint watch</code> for continuous feedback while coding.</li>
          </ol>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="mb-3 text-xl sm:text-2xl">Command Reference</h2>
          <div className="space-y-3">
            <div className="rounded-md border bg-gray-50 p-4">
              <CopyCommandBar text="fizzylint ." />
              <p className="mt-3 text-xs text-gray-600 sm:text-sm">
                Runs fizzylint on the current folder using its default behavior, giving you a quick full-project check.
              </p>
            </div>
            <div className="rounded-md border bg-gray-50 p-4">
              <CopyCommandBar text="fizzylint fix ." />
              <p className="mt-3 text-xs text-gray-600 sm:text-sm">
                Automatically fixes supported issues such as formatting and straightforward rule violations across the project.
              </p>
            </div>
            <div className="rounded-md border bg-gray-50 p-4">
              <CopyCommandBar text="fizzylint lint ." />
              <p className="mt-3 text-xs text-gray-600 sm:text-sm">
                Performs lint checks only and prints diagnostics without changing your files.
              </p>
            </div>
            <div className="rounded-md border bg-gray-50 p-4">
              <CopyCommandBar text="fizzylint watch" />
              <p className="mt-3 text-xs text-gray-600 sm:text-sm">
                Starts watch mode and continuously re-runs linting whenever files change, so feedback appears while you code.
              </p>
            </div>
            <div className="rounded-md border bg-gray-50 p-4">
              <CopyCommandBar text="fizzylint analysis ." />
              <p className="mt-3 text-xs text-gray-600 sm:text-sm">
                Generates a project quality score and deeper analysis summary to help prioritize maintainability improvements.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="mb-3 text-xl sm:text-2xl">Recommended Workflow</h2>
          <div className="mb-3 rounded-md border bg-gray-50 p-4">
            <CopyCommandBar text="fizzylint lint .; fizzylint fix .; fizzylint analysis ." />
            <p className="mt-3 text-xs text-gray-600 sm:text-sm">
              Lints first, applies supported fixes second, then reports analysis score and deeper code health insights.
            </p>
          </div>
          <p className="text-xs text-gray-600 sm:text-sm">
            This flow catches problems, applies supported fixes, and then gives you a quality score plus
            analysis summary for final review.
          </p>
          <p className="mt-2 text-xs text-gray-600 sm:text-sm">
            During active development, run <code>fizzylint watch</code> in a separate terminal for immediate feedback.
          </p>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="mb-3 text-xl sm:text-2xl">What It Checks</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Trailing whitespace</li>
            <li>Unused variables</li>
            <li>Unreachable code</li>
            <li>Long lines and logical pattern issues</li>
            <li>Project-level quality score and analysis summary</li>
          </ul>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="mb-3 text-xl sm:text-2xl">Understanding Analysis Score</h2>
          <p className="mb-3 text-sm text-gray-700 sm:text-base">
            <code>fizzylint analysis .</code> provides a project health score and highlights weak areas that need attention.
          </p>
          <ul className="list-disc space-y-2 pl-6 text-sm sm:text-base">
            <li><strong>90-100:</strong> Excellent quality and maintainability.</li>
            <li><strong>75-89:</strong> Good baseline with a few issues to clean up.</li>
            <li><strong>50-74:</strong> Medium risk; prioritize fixes before scaling changes.</li>
            <li><strong>Below 50:</strong> High risk; recommended to address major lint and logic issues first.</li>
          </ul>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="mb-3 text-xl sm:text-2xl">When To Use Each Command</h2>
          <ul className="list-disc space-y-2 pl-6 text-sm sm:text-base">
            <li>Use <code>fizzylint lint .</code> before every commit.</li>
            <li>Use <code>fizzylint fix .</code> after a refactor or formatting-heavy changes.</li>
            <li>Use <code>fizzylint watch</code> while actively coding.</li>
            <li>Use <code>fizzylint analysis .</code> before PR review or release.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl sm:text-2xl">Troubleshooting</h2>
          <div className="space-y-3 text-sm sm:text-base">
            <div className="rounded-md border bg-gray-50 p-4">
              <p className="font-semibold">Command not found</p>
              <p className="mt-1 text-gray-700">Run with <code>npx fizzylint</code> to ensure the package is resolved correctly.</p>
            </div>
            <div className="rounded-md border bg-gray-50 p-4">
              <p className="font-semibold">Too many issues at once</p>
              <p className="mt-1 text-gray-700">Start with <code>fizzylint fix .</code>, then run <code>fizzylint lint .</code> to review remaining items.</p>
            </div>
            <div className="rounded-md border bg-gray-50 p-4">
              <p className="font-semibold">Need continuous checks</p>
              <p className="mt-1 text-gray-700">Use <code>fizzylint watch</code> so new problems are surfaced as soon as files change.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
