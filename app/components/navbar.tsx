import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { ButtonColorful } from "./ui/buttonColorful";

export default function Navbar() {
  return (
    <div className="Navbar flex flex-row justify-between py-10 px-12 w-full font-sans">
      {/* logo */}
      <div className="flex justify-center items-center align-middle hover:cursor-pointer">
        <a href="https://bolt.new/" target="blank">
          <svg
            className="w-16 h-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 51 21.9"
          >
            <path
              fill="#fff"
              d="M24.1 19.3c-4.7 0-7-2.7-7-6.1s3.2-7.7 7.9-7.7 7 2.7 7 6.1-3.2 7.7-7.9 7.7Zm.2-4.3c1.6 0 2.7-1.5 2.7-3.1s-.8-2-2.2-2-2.7 1.5-2.7 3.1.8 2 2.2 2ZM37 19h-4.9l4-18.2H41l-4 18.1Z"
            />
            <path
              fill="#fff"
              d="M9.6 19.3c-1.5 0-3-.5-3.8-1.7L5.5 19 0 21.9.6 19 4.6.8h4.9L8.1 7.2c1.1-1.2 2.2-1.7 3.6-1.7 3 0 4.9 1.9 4.9 5.5s-2.3 8.3-7 8.3Zm1.9-7.3c0 1.7-1.2 3-2.8 3s-1.7-.3-2.2-.9l.8-3.3c.6-.6 1.2-.9 2-.9 1.2 0 2.2.9 2.2 2.2Z"
              style={{ fillRule: "evenodd" }}
            />
            <path
              fill="#fff"
              d="M46.1 19.3c-2.8 0-4.9-1-4.9-3.3s0-.7.1-1l1.1-4.9h-2.2l1-4.2h2.2l.8-3.6L49.7 0l-.6 2.3-.8 3.6H51l-1 4.2h-2.7l-.7 3.2v.6c0 .6.4 1.1 1.2 1.1s.6 0 .7-.1v3.9c-.5.4-1.4.5-2.3.5Z"
            />
          </svg>
        </a>
      </div>
      <div className="flex flex-row justify-between items-center gap-x-8 font-base text-lg text-slate-200 ">
        <div className="hover:cursor-pointer hover:text-neutral-50">Info</div>
        <div className="hover:cursor-pointer hover:text-neutral-50">Stages</div>
        <div className="hover:cursor-pointer hover:text-neutral-50">Judges</div>
        <div className="hover:cursor-pointer hover:text-neutral-50">FAQ</div>
      </div>
      {/* Register btn */}
      <div>
        <a
          href="https://form.typeform.com/to/wf94YwH4?typeform-source=t.co"
          target="blank"
        >
          <div className="flex flex-row justify-center items-center align-middle text-medium font-medium border-2 bg-neutral-200 border-neutral-100 hover:border-neutral-50  hover:cursor-pointer hover:bg-neutral-50 hover:text-neutral-900 rounded-lg px-3 py-2 gap-x-1">
            <span className="text-slate-700">Sign up</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-700" />
          </div>
        </a>
      </div>
    </div>
  );
}
