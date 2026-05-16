import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-6xl flex flex-col gap-10 md:flex-row md:items-center md:justify-between">

        {/* Left Section: Branding + CTA */}
        <section className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            👋 Welcome to Expense Tracker
          </h1>

          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 mb-6 max-w-lg">
            Manage your finances and track every expense with ease. Understand exactly where your money goes.
          </p>

          <Link
            href="/expense-tracker"
            className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Get Started
          </Link>
        </section>

        {/* Right Section: Navigation + Card */}
        <nav className="md:w-1/2 flex flex-col items-center gap-6">

          <Link
            href="/expense-tracker"
            className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 transition-colors"
          >
            Expense Dashboard
          </Link>

          <div className="w-full p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-center">
            <p className="mb-3 text-lg font-medium">
              Start tracking your expenses today
            </p>

            <Link
              href="/expense-tracker"
              className="text-blue-500 hover:underline inline-block"
            >
              Open Dashboard →
            </Link>
          </div>

        </nav>

      </div>
    </main>
  );
}