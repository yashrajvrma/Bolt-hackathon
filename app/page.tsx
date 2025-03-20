import Image from "next/image";
import Hero from "./components/heroSection";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Faq } from "./components/faqSection";
import { ClientSlider } from "./components/clientSlider";
import Prize from "./components/prizes";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center w-full h-full bg-black text-white">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/img1.png"
          alt="Hackathon Background"
          layout="fill"
          objectFit="cover"
          className="z-0 rotate-180 -translate-y-100" // Adjust -translate-y-10 to move up
        />
      </div>
      <div className="relative flex flex-col items-center z-10 w-full">
        <Navbar />
        <Hero />
        <ClientSlider />
        {/* <Prize /> */}
        <Faq />
        <Footer />
      </div>
    </div>
  );
}
