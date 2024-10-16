"use client";
import GreenLoader from "@/component/GreenLoader";
import { supabaseClient } from "@/lib/supabase";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

interface TableLaporan {
  id: number;
  created_at: string;
  pengirim: string;
  type: "sktm" | "pd" | "ak";
  nomor: number;
}

export default function Component() {
  const [data, setData] = useState<TableLaporan[] | null>([]);
  const [surat, setSurat] = useState<TableLaporan[] | null>([]);
  const [loading, setLoading] = useState<boolean>(false);
  // Sample data - replace this with your actual data

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data }: PostgrestSingleResponse<TableLaporan[]> =
        await supabaseClient.from("nomor_surat").select("*");

      const { data: surat }: PostgrestSingleResponse<TableLaporan[]> =
        await supabaseClient.from("nomor_surat").select("type");

      setSurat(surat);

      setData(data);

      setLoading(false);
    })();
  }, []);

  // Define the columns based on the "Name" from your image
  const columns = ["id", "created_at", "pengirim", "type"];

  function formatDate(input: TableLaporan["created_at"]) {
    const date = new Date(input);
    return date.toLocaleDateString("id-ID", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  }

  const handleDelete = async (id: TableLaporan["id"]) => {
    await supabaseClient.from("akun").delete().eq("id", id);
    (async () => {
      const { data }: PostgrestSingleResponse<TableLaporan[]> =
        await supabaseClient.from("akun").select("*");

      setData(data);
    })();

    toast.success("Akun dengan ID:" + id + " Berhasil di hapus", {
      position: "bottom-right",
    });
  };

  if (loading) return <GreenLoader size="large" />;

  return (
    <div className="overflow-x-auto mt-4">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-green-900 sm:text-4xl">
            Rekapitulasi Data Surat
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            Lihat Status Rekapitulasi Data Laporan berdasarkan data Status
            dibawah ini.
          </p>
        </div>

        <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Total Surat Keterangan Tidak Mampu
            </dt>

            <dd className="text-4xl font-extrabold text-green-600 md:text-5xl">
              {surat?.filter((s) => s.type === "sktm").length}
            </dd>
          </div>

          <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Total Surat Akte Kematian
            </dt>

            <dd className="text-4xl font-extrabold text-green-600 md:text-5xl">
              {surat?.filter((s) => s.type === "ak").length}
            </dd>
          </div>

          <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Total Surat Keterangan Pindah Domisili
            </dt>

            <dd className="text-4xl font-extrabold text-green-600 md:text-5xl">
              {surat?.filter((s) => s.type === "pd").length}
            </dd>
          </div>

          <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Total Jumlah Seluruh Surat
            </dt>

            <dd className="text-4xl font-extrabold text-green-600 md:text-5xl">
              {surat?.length}
            </dd>
          </div>
        </dl>
      </div>
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
          {data?.length ? (
            data?.map((item) => (
              <tr key={item.id} className="border-b border-green-600">
                {columns.map((column) => (
                  <td
                    key={`${item.id}-${column}`}
                    className="px-6 py-4 whitespace-nowrap"
                  >
                    {(column as keyof TableLaporan) == "created_at"
                      ? formatDate(item["created_at"])
                      : item[column as keyof TableLaporan]}
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
            ))
          ) : (
            <tr className="border-b border-green-600 text-2xl">
              <td colSpan={6} className="px-6 py-4 whitespace-nowrap text-lg text-left">
                Belum Ada Surat
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
