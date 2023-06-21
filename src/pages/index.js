import Image from "next/image";
import "../app/globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavigationBar from "@/components/NavigateBar";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Header />
      <Footer />
    </>
  );
}
