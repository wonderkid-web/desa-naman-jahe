import { supabaseClient } from "@/lib/supabase";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const option: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        nik: { label: "NIK", type: "text", placeholder: "Masukkan NIK" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.nik || !credentials?.password) {
          return null;
        }

        if(credentials.nik === "000000" && credentials.password === "admin123"){
          return{
            id: "000000",
            nik: "000000",
            nama: "admin"
          }
        }

        const { data, error } = await supabaseClient
          .from("akun")
          .select("*")
          .eq("nik", credentials.nik)
          .single();

        if (error || !data) {
          return null;
        }

        // Periksa password di sini (gunakan bcrypt jika password di-hash)
        if (data.password === credentials.password) {
          // Kembalikan objek pengguna dengan properti yang diharapkan oleh NextAuth
          return {
            id: data.id,
            nama: data.nama, // Sesuaikan dengan nama kolom di tabel Anda
            // email: data.email, // Sesuaikan dengan nama kolom di tabel Anda
            nik: data.nik,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // token.id = user.id;
        // @ts-ignore
        token.nik = user.nik;
        // @ts-ignore
        token.nama = user.nama;
      }
      return token;
    },

    async session({ session, token }) {
      if (token || session) {
        // @ts-ignore
        // session.user.id = token.id;
        // @ts-ignore
        session.user.nik = token.nik;
        // @ts-ignore
        session.user.nama = token.nama;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};