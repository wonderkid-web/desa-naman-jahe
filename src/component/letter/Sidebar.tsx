"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import contract from "@/../../public/contract.png";

export default function Sidebar() {
  const pathname = usePathname();

  const showSidebar = pathname !== "/";

  return (
    <div style={{display:`${showSidebar ? "flex" : "none"}`}} className={` bg-green-500 min-h-screen p-4 text-white md:flex-col gap-2`}>
      <div className="py-1 px-1 text-xs rounded-sm text-white border-md flex gap-2 justify-center  items-center bg-red-400">
        <Image
          src={"/logo.jpg"}
          alt="logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="flex flex-col gap-2">
          <span className="flex font-bold ">Menu Administrasi </span>
          <span className="flex">Desa Naman Jahe</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-sm bg-green-600 p-2 rounded-md font-semibold">
        <div className="flex gap-2 items-center">
          <div className="w-8 h-8 relative">
            <Image src={contract} alt="logo" objectFit="cover" />
          </div>
          <Link href={"/surat/sktm"}>Keterangan Tidak Mampu</Link>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-8 h-8 relative">
            <Image src={contract} alt="logo" objectFit="cover" />
          </div>
          <Link href={"/surat/ak"}>Akter Kematian</Link>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-8 h-8 relative">
            <Image src={contract} alt="logo" objectFit="cover" />
          </div>
          <Link href={"/surat/pd"}>Pindah Domisili</Link>
        </div>
      </div>
    </div>
  );
}
