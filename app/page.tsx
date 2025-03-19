import Image from "next/image";
import Hero from "./components/heroSection";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Faq } from "./components/faqSection";
import { ClientSlider } from "./components/clientSlider";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center w-full h-full bg-black text-white">
      <Image
        src="/assets/images/img1.png"
        alt="Hackathon Background"
        layout="fill"
        objectFit="cover"
        className="z-0 rotate-180"
      />
      <div className="relative flex flex-col items-center z-10 w-full">
        <Navbar />
        <Hero />
        <ClientSlider />
        <Faq />
        <Footer />
      </div>
    </div>
  );
}
