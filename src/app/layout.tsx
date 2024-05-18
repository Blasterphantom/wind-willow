import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapClient from "./components/BootstrapClient";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WindWillow",
  description: "Poetry Flowing From One's Self to Others",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}

{/* <a href='https://pngtree.com/freepng/willow-branch_5412888.html'>png image from pngtree.com/</a> */}