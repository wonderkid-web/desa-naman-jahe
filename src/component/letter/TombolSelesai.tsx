"use client";

// import { getNomorSurat } from "@/helper";
import { supabaseClient } from "@/lib/supabase";
import { getSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";

export default function TombolSelesai() {
  const router = useRouter();
  const pathname = usePathname()

  const typeSurat = pathname.split("/")[length+1]

  const increaseNomorSurat = async () => {
    // @ts-ignore

    const {user} = await getSession()

    const {error} = await supabaseClient.from("nomor_surat").insert([{
      pengirim: user.nama,
      type: typeSurat,
      nik: user.nik
    }])
      toast.success("berhasil membuat surat")
      if(!error) router.refresh()


    // let { nomor_surat } = await getNomorSurat();

    // if (nomor_surat) {
    //   const {error} =  await supabaseClient
    //   .from("nomor_surat")
    //   .update({
    //     nomor: (nomor_surat[0].nomor += 1),
    //   })
    //   .eq("id", "1");

    //   if(!error) router.refresh()
    // }
  };


  return (
    <button
      onClick={() => increaseNomorSurat()}
      type="submit"
      style={{ background: "orange" }}
      className="w-full py-2 px-4 mt-3 bg-rose-600 text-white font-semibold rounded-md shadow hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Selesai Membuat Surat
    </button>
  );
}
