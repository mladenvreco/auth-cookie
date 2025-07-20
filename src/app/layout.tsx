import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Auth",
  description: "Next.js Auth Example",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Navbar />
          <div className="content">{children}</div>
        </div>
      </body>
    </html>
  );
}
