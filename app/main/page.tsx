'use client';

import { useForm } from 'react-hook-form';
import { ResumePdfDocument } from '@/components/ResumePdfDocument';
import { ResumeHtmlPreview } from '@/components/ResumeHtmlPreview';
import { pdf } from '@react-pdf/renderer';

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

  const downloadPdf = async () => {
    const blob = await pdf(<ResumePdfDocument data={data} />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="grid grid-cols-5 gap-8 p-6 bg-gray-100 h-full max-h-full overflow-hidden">
      <div className="flex flex-col bg-white shadow-md rounded-lg col-span-2 h-full overflow-hidden">
        <div className="flex-1 p-8 overflow-y-auto">
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

        <div className="p-8 pt-4 border-t border-gray-200 bg-white">
          <button
            onClick={downloadPdf}
            style={{ backgroundColor: '#8675A9' }}
            className="w-full text-white font-bold py-3 px-4 rounded shadow-md hover:opacity-90 focus:outline-none focus:shadow-outline transition duration-150"
          >
            Download PDF
          </button>
        </div>
      </div>
      <div className="relative col-span-3 h-full overflow-auto bg-gray-200 p-8 flex justify-center">
        <ResumeHtmlPreview data={data} />
      </div>
    </div>
  );
}
