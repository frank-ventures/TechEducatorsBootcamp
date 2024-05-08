import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dynamic pages",
  description: "Navigate to a posts page"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <p>Navigate:</p>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/posts">Posts</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
