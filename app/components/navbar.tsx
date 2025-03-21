"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathName = usePathname(); // Get the current path
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: any) => {
    // Check if the user is already on the homepage
    if (pathName === "/") {
      // Scroll to the section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to the homepage with the hash and then scroll to the section
      // @ts-ignore
      router.push(`/#${sectionId}`).then(() => {
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }, 100); // Small delay to ensure the page has loaded
      });
    }
  };

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { label: "Prizes", sectionId: "prize" },
    { label: "Judges", sectionId: "judge" },
    { label: "FAQ", sectionId: "faq" },
  ];

  return (
    <>
      <div className="Navbar sm:max-w-7xl flex flex-row justify-between sm:py-10 py-8 w-full font-sans relative z-50 sm:px-5 px-5">
        {/* Logo */}
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row justify-between items-center gap-x-8 font-base text-lg text-slate-200">
          {navItems.map((item) => (
            <a
              key={item.label}
              onClick={() => scrollToSection(item.sectionId)}
              className="hover:cursor-pointer hover:text-neutral-50"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Trigger - Hamburger/Close Button */}
        <div className="md:hidden">
          <button
            className="text-slate-200 hover:text-neutral-50 focus:outline-none py-2 px-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              {/* Top bar */}
              <span
                className={`block w-4.5 h-0.5 bg-current absolute transition-all duration-300 ease-in-out ${
                  isOpen ? "top-3 rotate-45" : "top-2"
                }`}
              ></span>
              {/* Middle bar */}
              <span
                className={`block w-4.5 h-0.5 bg-current absolute transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : "opacity-100 top-3"
                }`}
              ></span>
              {/* Bottom bar */}
              <span
                className={`block w-4.5 h-0.5  bg-current absolute transition-all duration-300 ease-in-out ${
                  isOpen ? "top-3 -rotate-45" : "top-4"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Register btn - visible on desktop only */}
        <div className="hidden md:block">
          <a
            href="https://form.typeform.com/to/wf94YwH4?typeform-source=t.co"
            target="blank"
          >
            <div className="flex flex-row justify-center items-center align-middle text-medium font-medium border-2 bg-neutral-200 border-neutral-100 hover:border-neutral-50 hover:cursor-pointer hover:bg-neutral-50 hover:text-neutral-900 rounded-lg px-5 py-2 gap-x-1">
              <span className="text-slate-700">Sign up</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-700" />
            </div>
          </a>
        </div>
      </div>

      {/* Mobile Menu - Fullscreen */}
      <div
        className={`fixed inset-0 bg-black z-40 flex flex-col transition-all duration-300 ease-in-out overflow-hidden`}
        style={{
          transform: isOpen ? "translateY(0)" : "translateY(-100%)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        {/* Menu Items - Centered */}
        <div className="flex flex-col items-center py-8 px-8 gap-7 font-sans mt-24">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              onClick={() => {
                scrollToSection(item.sectionId);
                setIsOpen(false); // Close the menu after clicking
              }}
              className="text-zinc-300 text-xl font-medium hover:text-zinc-100 transition-colors"
              style={{
                animationDelay: `${index * 100}ms`,
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(-20px)",
                transition: "opacity 500ms ease, transform 500ms ease",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Sign Up Button - Full width */}
        <div className="p-8 max-w-sm">
          <a
            href="https://form.typeform.com/to/wf94YwH4?typeform-source=t.co"
            target="_blank"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex flex-row justify-center items-center font-sans sm:text-lg text-md font-medium border-2 bg-neutral-200 border-neutral-100 hover:border-neutral-50 hover:cursor-pointer hover:bg-neutral-50 hover:text-neutral-900 rounded-lg sm:px-6 px-3 py-3">
              <span className="text-slate-700 hover:text-slate-900">
                Sign up
              </span>
              <ArrowUpRight className="w-5 h-5 text-slate-700" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
