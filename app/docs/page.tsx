import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-12">
        <h1 className="mb-2 text-4xl font-bold" style={{ fontFamily: "var(--font-jacquarda-bastarda)" }}>
          fizlint docs
        </h1>
        <p className="mb-10 text-gray-700">
          Basic setup and usage for the fizlint CLI.
        </p>

        <section className="mb-10">
          <h2 className="mb-3 text-2xl">Install</h2>
          <div className="rounded-md border bg-gray-50 p-4">
            <code>npm install -g fizlint</code>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-2xl">Quick Start</h2>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Open your JavaScript or TypeScript project.</li>
            <li>Run the linter from your project folder.</li>
            <li>Fix issues as they appear in real time.</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-2xl">Common Commands</h2>
          <div className="space-y-3">
            <div className="rounded-md border bg-gray-50 p-4">
              <code>fizlint .</code>
            </div>
            <div className="rounded-md border bg-gray-50 p-4">
              <code>fizlint src</code>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-2xl">What It Checks</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Trailing whitespace</li>
            <li>Unused variables</li>
            <li>Unreachable code</li>
            <li>Long lines and logical pattern issues</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
