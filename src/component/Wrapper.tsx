"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import contract from "@/../../public/contract.png";
import logout from "@/../../public/logout.png";
import { SessionProvider, signOut } from "next-auth/react";


const Wrapper = ({ children }: any) => {
  const pathname = usePathname();
  const setFlex = pathname !== "/";

  const handleLogout = async () =>{
    await signOut()
  }

  return (
    <SessionProvider>
      <div
        style={{
          backgroundColor: "#38a169",
          minHeight: "100vh",
          padding: "1rem",
          color: "white",
        }}
      >
        <div style={{ display: "block" }}>
          <div
            style={{
              padding: "0.25rem",
              fontSize: "0.75rem",
              borderRadius: "0.125rem",
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
            }}
          >
            <Image
              src={"/logo.jpg"}
              alt="logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <Link href={"/"} style={{ fontWeight: "bold" }}>
                Menu Administrasi
              </Link>
              <span>Desa Naman Jahe</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              fontSize: "0.875rem",
              backgroundColor: "#2f855a",
              padding: "0.5rem",
              borderRadius: "0.25rem",
              fontWeight: "600",
            }}
          >
            <div
              style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
            >
              <div
                style={{ width: "2rem", height: "2rem", position: "relative" }}
              >
                <Image src={contract} alt="logo" objectFit="cover" />
              </div>
              <Link href={"/surat/sktm"}>Keterangan Tidak Mampu</Link>
            </div>
            <div
              style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
            >
              <div
                style={{ width: "2rem", height: "2rem", position: "relative" }}
              >
                <Image src={contract} alt="logo" objectFit="cover" />
              </div>
              <Link href={"/surat/ak"}>Akter Kematian</Link>
            </div>
            <div
              style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
            >
              <div
                style={{ width: "2rem", height: "2rem", position: "relative" }}
              >
                <Image src={contract} alt="logo" objectFit="cover" />
              </div>
              <Link href={"/surat/pd"}>Pindah Domisili</Link>
            </div>
            <div
              style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
            >
              <div
                style={{ width: "2rem", height: "2rem", position: "relative" }}
              >
                <Image src={logout} alt="logo" objectFit="cover" />
              </div>
              <button onClick={()=>handleLogout()}>logout</button>
            </div>
          </div>
        </div>
        {children}
      </div>
    </SessionProvider>
  );
};

export default Wrapper;
