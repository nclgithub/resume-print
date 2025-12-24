import "../globals.css";
import Navbar from "@/components/navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex flex-col h-screen max-h-screen overflow-hidden">
        <Navbar basePath="/main" />
        <main className="flex-1 overflow-hidden">
          {children}
        </main>
    </section>
  );
}
