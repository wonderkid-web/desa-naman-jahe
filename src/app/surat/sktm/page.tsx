// @ts-nocheck
// File: Home.js
"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SKTM from "@/component/letter/SKTM";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);
export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = useState(true);

  const onSubmit = (data) => {
    setFormData(data);
  };

  return (
    <main className="w-full h-full">
      <h1 className="text-center my-4 text-3xl font-bold">
        Form Surat Keterangan Tidak Mampu
      </h1>
      <div className="flex gap-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-4xl mx-auto bg-white p-6 rounded shadow-md space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nama:
              </label>
              <input
                {...register("name", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.name && (
                <span className="text-red-600 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                NIK:
              </label>
              <input
                {...register("nik", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.nik && (
                <span className="text-red-600 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tempat/Tanggal Lahir:
              </label>
              <input
                {...register("dob", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.dob && (
                <span className="text-red-600 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Jenis Kelamin:
              </label>
              <input
                {...register("gender", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.gender && (
                <span className="text-red-600 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Status Perkawinan:
              </label>
              <input
                {...register("status", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.status && (
                <span className="text-red-600 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Pekerjaan:
              </label>
              <input
                {...register("occupation", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.occupation && (
                <span className="text-red-600 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Agama:
              </label>
              <input
                {...register("religion", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.religion && (
                <span className="text-red-600 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Alamat:
              </label>
              <input
                {...register("address", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.address && (
                <span className="text-red-600 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tanggal SK:
              </label>
              <input
                {...register("skDate", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.skDate && (
                <span className="text-red-600 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nama Anak:
              </label>
              <input
                {...register("applicantName", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.applicantName && (
                <span className="text-red-600 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tempat/Tanggal Lahir Anak:
              </label>
              <input
                {...register("applicantDob", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.applicantDob && (
                <span className="text-red-600 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Sekolah Anak:
              </label>
              <input
                {...register("schoolName", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.schoolName && (
                <span className="text-red-600 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Penandatangan:
              </label>
              <input
                {...register("issuer", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.issuer && (
                <span className="text-red-600 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tanggal:
              </label>
              <input
                {...register("date", { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.date && (
                <span className="text-red-600 text-sm">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Generate PDF
          </button>
        </form>
        {formData && (
          <PDFViewer width="50%" height="600">
            <SKTM
            
              name={formData.name}
              nik={formData.nik}
              dob={formData.dob}
              gender={formData.gender}
              status={formData.status}
              occupation={formData.occupation}
              religion={formData.religion}
              address={formData.address}
              skDate={formData.skDate}
              applicantName={formData.applicantName}
              applicantDob={formData.applicantDob}
              schoolName={formData.schoolName}
              issuer={formData.issuer}
              date={formData.date}
            />
          </PDFViewer>
        )}
      </div>
    </main>
  );
}
