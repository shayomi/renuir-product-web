"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import { clsx } from "clsx";

import { menuItems } from "@/components/data/menuItems";
import MobileNav from "../shared/navbar/MobileNav";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-transparent  w-full">
      <div className="app-container flex justify-between items-center py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/icons/renuirlogo.png"
            alt="Renuir Logo"
            width={90}
            height={90}
            className="w-20 sm:w-24 h-auto"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center space-x-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={clsx(
                pathname === item.href ||
                  (pathname === "/" && item.href.startsWith("/#"))
                  ? "text-slate-100"
                  : "text-slate-300 hover:text-slate-300",
                "px-4 py-2 text-sm font-semibold transition-colors"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="pl-4">
          <Link href="/#waitlist">
            <Button
              size="sm"
              className="rounded-full font-medium px-5  bg-white text-black transition-all"
            >
              Get the app
            </Button>
          </Link>
        </div>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Nav;
