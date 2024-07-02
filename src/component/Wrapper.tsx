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

  const hidden = pathname.includes("/signin") || pathname.includes("/signup")

  return (
    <SessionProvider>
      <div
        style={{
          backgroundColor: `${hidden ? "#38a169" : "white"}`,
          minHeight: "100vh",
          padding: "1rem",
        }}
      >
        <div className={`${ hidden ? "hidden" : "flex"} flex-col justify-center`}>
          <div
          className={`self-center flex-col ${hidden ? "#38a169" : "white"}`}
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
              width={70}
              height={70}
              className="rounded-full"
            />
            <div
            className="justify-center items-center"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <Link className="text-xl" href={"/"} style={{ fontWeight: "bold" }}>
                Menu Administrasi
              </Link>
              <span className="text-lg">Desa Naman Jahe</span>
            </div>
          </div>
          <div
          className={`justify-between bg-green-700 text-white flex ${ hidden ? "hidden" : "flex"}`}
            style={{
              gap: "0.5rem",
              fontSize: "0.875rem",
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
                {/* <Image src={contract} alt="logo" objectFit="cover" /> */}
              </div>
              <Link href={"/surat/sktm"}>Keterangan Tidak Mampu</Link>
            </div>
            <div
              style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
            >
              <div
                style={{ width: "2rem", height: "2rem", position: "relative" }}
              >
                {/* <Image src={contract} alt="logo" objectFit="cover" /> */}
              </div>
              <Link href={"/surat/ak"}>Akter Kematian</Link>
            </div>
            <div
              style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
            >
              <div
                style={{ width: "2rem", height: "2rem", position: "relative" }}
              >
                {/* <Image src={contract} alt="logo" objectFit="cover" /> */}
              </div>
              <Link href={"/surat/pd"}>Pindah Domisili</Link>
            </div>
            <div
              style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
            >
              <div
                style={{ width: "2rem", height: "2rem", position: "relative" }}
              >
                {/* <Image src={logout} alt="logo" objectFit="cover" /> */}
              </div>
              <button className="bg-green-600 text-white rounded-md px-2 py-1" onClick={()=>handleLogout()}>logout</button>
            </div>
          </div>
        </div>
        {children}
      </div>
    </SessionProvider>
  );
};

export default Wrapper;
