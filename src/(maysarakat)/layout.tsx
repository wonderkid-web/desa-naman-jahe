import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Wrapper from "@/component/Wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Website Administrasi Desa Naman Jahe",
  description: "-",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Wrapper>
          {/* <Sidebar /> */}

          {children}
        </Wrapper>
      </body>
    </html>
  );
}
