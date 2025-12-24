import StoreProvider from "@/app/StoreProvider";
import Navbar from "@/features/navbar/Navbar";
import StarBackground from "@/lib/components/StarBackground";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio - CNM",
  description: "Portfolio of Chirag Narasimha Murthy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StarBackground />
        <StoreProvider>
          <Navbar />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
