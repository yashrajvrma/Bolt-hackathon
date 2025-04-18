import { Badge } from "../components/ui/badge";
import { Globe, Dot } from "lucide-react";
import { Button } from "./ui/button";
import Navbar from "./navbar";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 h-screen"
        style={{ pointerEvents: "none" }}
      >
        <Image
          src="/assets/images/img1.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="z-0 rotate-180"
        />
      </div>
      <Navbar />
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl font-sans px-4">
        <Badge className="gap-1 sm:mt-10 mt-1">
          <Globe
            className="-ms-0.5 opacity-60"
            size={12}
            strokeWidth={2}
            aria-hidden="true"
          />
          <div className="flex flex-row items-center align-middle pt-0.5 text-xs">
            Virtual
            <span>
              <Dot size={12} strokeWidth={2} />
            </span>
            May, 2025
          </div>
        </Badge>
        <div
          className="text-center sm:text-8xl text-6xl font-medium font-sans mt-10 tracking-tighter sm:leading-26 leading-14 bg-gradient-to-r text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e4e4e7 70%, #52525b 85%, #18181b 100%)",
          }}
        >
          The World&apos;s Largest Hackathon
        </div>

        <div className="text-neutral-400 sm:text-xl text-medium text-center tracking-tight sm:font-medium font-normal pt-4">
          Join us for the world&apos;s biggest virtual hackathon and win over
          $1m+ prize!
        </div>

        <div className="flex flex-row items-center gap-3 pt-10">
          <Button>
            <a
              href="https://form.typeform.com/to/wf94YwH4?typeform-source=t.co"
              target="blank"
            >
              Register
            </a>
          </Button>
          <a
            href="https://x.com/boltdotnew/status/1902064573261476001"
            target="blank"
          >
            <div className="flex flex-row justify-center items-center align-middle text-zinc-700 sm:text-lg text-sm font-medium border-1  bg-slate-300 hover:bg-slate-50 hover:text-zinc-900 hover:cursor-pointer sm:rounded-lg rounded-md px-5 py-2">
              Become A Sponsor
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
