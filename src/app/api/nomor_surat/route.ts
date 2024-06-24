import { supabaseClient } from "@/lib/supabase";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(){

    const {data, error, status} = await supabaseClient.from("nomor_surat").select("*")

    return NextResponse.json({data, error, status})
}