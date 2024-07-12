"use client";

import Link from "next/link";
import logo from "@/../../public/logo.jpg"
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormLogin } from "@/types";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";

function Page() {
  const { handleSubmit, register } = useForm<FormLogin>();
  const [load, setLoad] = useState(false)
  const router = useRouter()

  const onSubmit:SubmitHandler<FormLogin> = async (form) =>{
    setLoad(true)
    
    const signin = await signIn("credentials", {
        ...form,
        redirect: false,
    })

    setLoad(false)

    if(signin?.ok){
      router.push('/')
    }else{
      toast.warning("NIK atau Password kamu salah nih")
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 pb-4 min-h-[120vh]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          href="/"
          className="flex items-center mb-12 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <div className="w-24 h-24 relative mt-12">
            <Image src={logo} alt="logo" objectFit="cover" />
          </div>
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login Ke Website Naman Jahe
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="nik"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  NIK
                </label>
                <input
                  {...register("nik")}
                  type="number"
                  name="nik"
                  id="nik"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="NIK Kamu"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  {...register("password")}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className={`${load ? 'bg-green-400' : 'bg-green-600'} w-full text-white hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`}
              >
               {load ? "Authentikasi..." : "Sign in"}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Belum punya akun? daftar disini {"->  "}
                <Link
                  href="/auth/signup"
                  className="font-medium text-green-600 hover:underline dark:text-green-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;