import { Badge } from "../components/ui/badge";
import { Globe, Trophy, Dot, MoveRight } from "lucide-react";
import { Button } from "./ui/button";
export default function Hero() {
  return (
    <div className="flex flex-col items-center max-w-4xl h-screen">
      <Badge className="gap-1 mt-10">
        <Globe
          className="-ms-0.5 opacity-60"
          size={12}
          strokeWidth={2}
          aria-hidden="true"
        />
        <div className="flex flex-row items-center align-middle pt-0.5">
          Virtual
          <span>
            <Dot size={12} strokeWidth={2} />
          </span>
          21st March, 2025
        </div>
      </Badge>
      <div className="text-slate-200 text-center text-8xl font-semibold font-sans mt-10 tracking-tight leading-26">
        The World's Largest Hackathon
      </div>
      <div className="text-slate-500 text-xl text-center font-medium pt-4">
        Join us for the world's biggest virtual hackathon and win over $1m+
        prize!
      </div>
      <div className="flex flex-row  items-center gap-3 pt-10">
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
          <div className="flex flex-row justify-center items-center align-middle text-slate-300 text-medium font-medium border-2 border-neutral-800 hover:border-neutral-700 hover:cursor-pointer rounded-lg px-7 py-2 gap-x-2">
            {" "}
            Learn More
            <span className="pt-0.5">
              <MoveRight size={18} strokeWidth={2} />
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
