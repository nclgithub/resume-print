import PDF from "@/app/pdf/page";

export default function ResumePDF() {
  return (
    <div className="flex justify-center items-center p-4 bg-gray-200">
      <PDF />
      <button className="absolute bg-blue-500 text-white rounded hover:bg-blue-600">Download PDF</button>
    </div>
  );
}
