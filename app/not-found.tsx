import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl text-gray-900 dark:text-gray-100">
        Oh no! Lost in Cyberspace
      </h1>
      <p className="max-w-[600px] text-lg text-gray-600 dark:text-gray-400">
        It seems like youve ventured into the unknown. Lets get you back on
        track.
      </p>
      <Link
        className="inline-flex h-12 items-center justify-center px-8 py-3 mt-4 text-lg font-semibold text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-md transition-transform transform-gpu hover:scale-105 focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-blue-500 dark:from-pink-500 dark:to-purple-600 dark:hover:from-pink-600 dark:hover:to-purple-700 dark:focus-visible:ring-pink-500"
        href="/"
      >
        Back to Reality
      </Link>
    </div>
  );
}
