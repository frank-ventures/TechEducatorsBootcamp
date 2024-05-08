import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frankie Styles",
  description: "Enjoy"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="text-center ">
          {" "}
          <h2 className="bg-slate-400 text-xl">
            Frankies Styling Practice
          </h2>{" "}
          <nav className="flex gap-2 bg-slate-300 justify-center">
            <Link
              className="p-1 active:bg-cyan-600 border-b-4 border-orange-700 hover:bg-cyan-600"
              href="/"
            >
              Home
            </Link>
            <Link
              className="p-1 active:bg-cyan-600 border-b-4 border-orange-700 hover:bg-cyan-600"
              href="/about"
            >
              About
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
