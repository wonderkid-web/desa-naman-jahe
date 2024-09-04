"use client"
import GreenLoader from "@/component/GreenLoader";
import { supabaseClient } from "@/lib/supabase";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

interface TableData {
  id: number;
  created_at: string;
  nik: string;
  nama: string;
  password: string;
}

export default function Component() {
  const [data, setData] = useState<TableData[] | null>([])
  // Sample data - replace this with your actual data

  useEffect(()=>{
    (async ()=>{
      const { data }: PostgrestSingleResponse<TableData[]> = await supabaseClient
      .from("akun")
      .select("*");

      setData(data)
    })()
  },[])
 

  // Define the columns based on the "Name" from your image
  const columns = ["id", "created_at", "nik", "nama", "password"];

  
 function formatDate(input:TableData["created_at"]) {
  const date = new Date(input)
  return date.toLocaleDateString("id-ID", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
  })
}


  const handleDelete = async (id: TableData["id"]) => {
    await supabaseClient.from("akun").delete().eq("id", id);
    (async ()=>{
      const { data }: PostgrestSingleResponse<TableData[]> = await supabaseClient
      .from("akun")
      .select("*");

      setData(data)
    })()

    toast.success("Akun dengan ID:" + id + " Berhasil di hapus",{
      position: "bottom-right"
    })
  };

  if (!data?.length) return <GreenLoader size="large" />;
  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-green-800 text-white">
        <thead>
          <tr className="border-b border-green-700">
            {columns.map((column) => (
              <th
                key={column}
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                {column}
              </th>
            ))}
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"></th>
          </tr>
        </thead>
        <tbody className="bg-green-700">
          {data.map((item) => (
            <tr key={item.id} className="border-b border-green-600">
              {columns.map((column) => (
                <td
                  key={`${item.id}-${column}`}
                  className="px-6 py-4 whitespace-nowrap"
                >
                  
                  {column as keyof TableData == "created_at" ? formatDate(item["created_at"]) : item[column as keyof TableData]}
                </td>
              ))}
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-white px-4 py-1 hover:scale-110 transition text-green-800 rounded-md font-bold"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
