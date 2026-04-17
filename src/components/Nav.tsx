"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/career", label: "Career" },
  { href: "/founder", label: "Founder" },
  { href: "/speaking", label: "Speaking" },
  { href: "/community", label: "Community" },
  { href: "/content", label: "Content" },
  { href: "/clicks", label: "Clicks" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = links.find((l) => l.href === pathname);

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-0.5 bg-white/90 backdrop-blur-md border border-[#e8e8e5] rounded-full px-2 py-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-all duration-150 ${
                  isActive
                    ? "bg-[#f5f5f3] text-[#1a1a1a]"
                    : "text-[#999] hover:text-[#1a1a1a]"
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#473ECE] shrink-0" />
                )}
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile nav */}
      <nav className="md:hidden fixed top-4 left-0 right-0 z-50 px-4">
        <div className="flex items-center justify-between bg-white/90 backdrop-blur-md border border-[#e8e8e5] rounded-full px-4 py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
          <span className="text-[13px] font-medium text-[#1a1a1a] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#473ECE] shrink-0" />
            {active?.label ?? "Menu"}
          </span>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex flex-col gap-[5px] p-1"
          >
            <span className={`block w-5 h-[1.5px] bg-[#1a1a1a] transition-all duration-200 origin-center ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-[#1a1a1a] transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-[#1a1a1a] transition-all duration-200 origin-center ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>

        {/* Dropdown */}
        {open && (
          <div className="mt-2 bg-white/95 backdrop-blur-md border border-[#e8e8e5] rounded-[20px] shadow-[0_8px_40px_rgba(0,0,0,0.1)] overflow-hidden">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-5 py-3.5 text-[15px] font-medium transition-colors border-b border-[#f5f5f3] last:border-0 ${
                    isActive ? "text-[#1a1a1a]" : "text-[#999] hover:text-[#1a1a1a]"
                  }`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#473ECE] shrink-0" />
                  )}
                  {!isActive && <span className="w-1.5 h-1.5 shrink-0" />}
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </>
  );
}
