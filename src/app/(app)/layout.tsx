import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </>

  );
}
