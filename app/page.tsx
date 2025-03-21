import Image from "next/image";
import Hero from "./components/heroSection";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Faq } from "./components/faqSection";
import { ClientSlider } from "./components/clientSlider";
import Prize from "./components/prizes";

export default function Home() {
  return (
    <div className=" flex flex-col items-center w-full h-full bg-black text-white">
      {/* <Navbar /> */}
      <Hero />
      <ClientSlider />
      <Prize />
      <Faq />
      <Footer />
    </div>
  );
}
