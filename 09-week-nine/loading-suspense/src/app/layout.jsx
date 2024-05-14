import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FrankFlix",
  description: "Generated by create next app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}, p-2 prose lg:prose-xl`}>
        <header>
          <h1>Dis-knee Minus</h1>
        </header>
        <nav>
          <Link href="/">Home</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
