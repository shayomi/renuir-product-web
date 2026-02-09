/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { clsx } from "clsx";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { menuItems } from "@/components/data/menuItems";

const MobileNav = () => {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setSheetOpen(false);
  }, [pathname]);

  return (
    <section className="lg:hidden">
      <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-gray-700">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-75 sm:w-87.5 p-0 border-l border-gray-100"
        >
          <div className="flex flex-col h-full bg-white">
            <div className="flex items-center justify-between p-6 border-b border-gray-50">
              <Link href="/" onClick={() => setSheetOpen(false)}>
                <Image
                  src="/images/Renuirlogo-1.svg"
                  alt="Renuir Logo"
                  width={80}
                  height={28}
                  className="w-17.5 h-auto"
                />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSheetOpen(false)}
                className="text-gray-400"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto py-8 px-6">
              <nav className="flex flex-col space-y-6">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setSheetOpen(false)}
                    className={clsx(
                      "text-lg font-bold transition-colors",
                      pathname === item.href
                        ? "text-slate-900"
                        : "text-slate-700"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="p-6 border-t border-gray-50 mt-auto">
              <Link href="/#waitlist" onClick={() => setSheetOpen(false)}>
                <Button className="w-full h-12 rounded-xl font-bold bg-slate-900 hover:bg-slate-800 text-white text-base">
                  Join waitlist
                </Button>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
