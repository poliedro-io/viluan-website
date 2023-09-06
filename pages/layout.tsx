import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="mt-[80px] min-h-screen w-full">{children}</main>
      <Footer />
    </>
  );
}
