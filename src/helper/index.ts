import { supabaseClient } from "@/lib/supabase";
import { NomorSurat } from "@/types";
import { PostgrestResponse, SupabaseClient } from "@supabase/supabase-js";

export const getNomorSurat = async () => {
  let { data: nomor_surat, error, status } :PostgrestResponse<NomorSurat> = await supabaseClient
    .from("nomor_surat")
    .select("*");

  return { nomor_surat, error, status };
};
