"use client";

import { useState, useRef } from "react";
import PDF from "@/app/pdf/page";
import { useForm } from "react-hook-form";

type FormData = {
  profilepic: string;
  firstname: string;
  lastname: string;
  email: string;
  contact: string;
  location: string;
  linkedIn: string;
};

export default function ResumePDF() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      profilepic: "",
      firstname: "",
      lastname: "",
      email: "",
      contact: "",
      location: "",
      linkedIn: "",
    },
  });

  const data = watch();
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setValue("profilepic", url, { shouldValidate: true });
  };

  const generatePDF = async () => {
    setIsLoading(true);
    const res = await fetch("/api/pdf");
    const blob = await res.blob(); // directly get Blob from response
    const blobUrl = URL.createObjectURL(blob);
    setIsLoading(false);
  };

  return (
    <div className="flex-1 grid grid-cols-5 gap-8 p-6 bg-gray-100">
      <div className="flex flex-col bg-white p-8 shadow-md rounded-lg col-span-2">
        <div className="flex flex-wrap -mx-3 mt-2 mb-4">
          <div className="w-full px-3 mb-2 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Profile Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500
                      file:mr-4 file:rounded-md file:border-0
                      file:bg-blue-600 file:px-4 file:py-2
                      file:text-white hover:file:bg-blue-700"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              First Name
            </label>
            <input className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" {...register("firstname")} placeholder="" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Last Name
            </label>
            <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" {...register("lastname")} placeholder="" />
          </div>
        </div>
        <hr className="mb-8" />
        <div className="flex flex-wrap -mx-3 mt-4 mb-4">
          <div className="w-full px-3 mb-2">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Title
            </label>
            <input className="appearance-none bg-gray-200 block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" value="Contact" readOnly />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" {...register("email")} placeholder="" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Phone Number
            </label>
            <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" {...register("contact")} placeholder="" />
          </div>
          <div className="w-full px-3 mb-2">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Location
            </label>
            <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" {...register("location")} placeholder="" />
          </div>
          <div className="w-full px-3 mb-2">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              LinkedIn URL
            </label>
            <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" {...register("linkedIn")} placeholder="" />
          </div>
        </div>
        <div className="flex flex-wrap justify-end items-baseline -mx-3 mt-4 mb-4 px-3 mt-auto">
          {isLoading && <label className="block tracking-wide text-gray-700 text-sm font-bold mr-2">Generating PDF...</label>}
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={generatePDF}>
            Generate PDF
          </button>
        </div>
      </div>
      <div className="relative col-span-3">
        <div className="absolute top-0 left-0 right-0 bottom-0 p-8 bg-gray-200 opacity-100 rounded-lg overflow-auto">
          <PDF data={data} />
        </div>
      </div>
    </div>
  );
}
