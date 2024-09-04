import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"
import WrapperAdmin from "@/component/WrapperAdmin";

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
        <WrapperAdmin>
          {/* <Sidebar /> */}

          {children}
        </WrapperAdmin>
      </body>
    </html>
  );
}
