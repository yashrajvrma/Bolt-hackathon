import Image from "next/image";
import Hero from "./components/heroSection";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Faq } from "./components/faqSection";
import { ClientSlider } from "./components/clientSlider";
import Prize from "./components/prizes";
import { TestimonialsSectionDemo } from "./components/testimonial-section";

export default function Home() {
  return (
    <div className=" flex flex-col items-center w-full h-full bg-black text-white">
      <Hero />
      <ClientSlider />
      <Prize />
      <TestimonialsSectionDemo />
      <Faq />
      <Footer />
    </div>
  );
}
