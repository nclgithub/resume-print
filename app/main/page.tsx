'use client';

import { useForm } from 'react-hook-form';
import dynamic from 'next/dynamic';
import { ResumePdfDocument } from '@/components/ResumePdfDocument';

const PDFViewer = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => (
      <div className="p-8 text-center text-gray-500">Loading PDF Viewer...</div>
    ),
  }
);

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
  const { register, watch, setValue } = useForm<FormData>({
    defaultValues: {
      profilepic: '',
      firstname: '',
      lastname: '',
      email: '',
      contact: '',
      location: '',
      linkedIn: '',
    },
  });

  const data = watch();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setValue('profilepic', reader.result as string, { shouldValidate: true });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex-1 grid grid-cols-5 gap-8 p-6 bg-gray-100 h-screen">
      <div className="flex flex-col bg-white p-8 shadow-md rounded-lg col-span-2 overflow-y-auto">
        <h2 className="text-xl font-bold mb-6 text-gray-800">Edit Details</h2>
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
            <input
              className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              {...register('firstname')}
              placeholder="Ng"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Last Name
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              {...register('lastname')}
              placeholder="Chun Liang"
            />
          </div>
        </div>
        <hr className="mb-8" />
        <div className="flex flex-wrap -mx-3 mt-4 mb-4">
          <div className="w-full px-3 mb-2">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Contact Info
            </label>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              {...register('email')}
              placeholder="ngchunliangy@gmail.com"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Phone Number
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              {...register('contact')}
              placeholder="+65 8433 2042"
            />
          </div>
          <div className="w-full px-3 mb-2">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Location
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              {...register('location')}
              placeholder="Singapore"
            />
          </div>
          <div className="w-full px-3 mb-2">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              LinkedIn URL
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              {...register('linkedIn')}
              placeholder="linkedin.com/in/..."
            />
          </div>
        </div>
      </div>
      <div className="relative col-span-3 h-full">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-200 rounded-lg overflow-hidden border border-gray-300">
          <PDFViewer width="100%" height="100%" showToolbar={true}>
            <ResumePdfDocument data={data} />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
}
