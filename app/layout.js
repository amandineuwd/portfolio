// src/app/layout.js

import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Amandine Underwood - Portfolio",
  description: "Creative technologist & Product designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* NAVBAR */}
        <nav className="navbar">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/experience">Skills & Experience</Link>
          <Link href="/about">About</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}