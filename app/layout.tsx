import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites",
  description: "Discover delicious recipes with NextBites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <h1>🍴 NextBites</h1>
          <p>Discover delicious recipes</p>
        </nav>

        {children}
      </body>
    </html>
  );
}