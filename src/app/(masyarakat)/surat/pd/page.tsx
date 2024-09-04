// File: DomisiliForm.js
"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DomisiliPDF from '@/component/letter/PD';
import dynamic from "next/dynamic";
import TombolSelesai from '@/component/letter/TombolSelesai';

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);

export default function Page() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formData, setFormData] = useState<Object>({});

  const onSubmit = (data:any) => {
    setFormData(data);
  };

  return (
    <main className="w-full h-full">
      <h1 className="text-center my-4 text-3xl font-bold #38a169">
        Form Surat Keterangan Domisili
      </h1>
      <div className="flex gap-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-4xl mx-auto bg-white p-6 rounded shadow-md space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nama Lengkap:
              </label>
              <input
                {...register('name', { required: true })}
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
                Jenis Kelamin:
              </label>
              <select
                {...register('gender', { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
              {errors.gender && (
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
                {...register('dob', { required: true })}
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
                No. KK/KTP:
              </label>
              <input
                {...register('nik', { required: true })}
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
                Pekerjaan:
              </label>
              <input
                {...register('occupation', { required: true })}
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
                {...register('religion', { required: true })}
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
                Kewarganegaraan:
              </label>
              <input
                {...register('nationality', { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.nationality && (
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
                {...register('address', { required: true })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.address && (
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
          {/* {formData && <TombolSelesai />} */}
        </form>
        {formData && (
          <PDFViewer width="50%" height="600">
            <DomisiliPDF {...formData} />
          </PDFViewer>
        )}
      </div>
    </main>
  );
}
