import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "@/app/StoreProvider";

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
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
