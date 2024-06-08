import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute:"",
    default:"Next Starter",
    template: "%s | Starter",
  },
  description: "Starter",
};
// className={inter.className}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <header className="text-center font-bold bg-cyan-600 p-6 flex justify-center items-center ">
          <Link className="outline-none text-start  mx-6 text-red-900 font-bold" href="/">Home</Link>
          Header Section
        </header>

        {children}

        <footer className="text-center font-bold bg-gray-300 p-6  ">
          Footer Section
        </footer>
      </body>
    </html>
  );
}
