"use client";

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const Navbar = () => {
  const pathname = usePathname();

  const routes = [
    {
      label: "Forside",
      href: "/",
      active: pathname === "/",
    },
    {
      label: "Hold",
      href: "/hold",
      active: pathname === "/hold",
    },
    {
      label: "Teamet",
      href: "/teamet",
      active: pathname === "/teamet",
    },
    {
      label: "Kontakt",
      href: "/kontakt",
      active: pathname === "/kontakt",
    },
    {
      label: "Blog",
      href: "/blog",
      active: pathname === "/blog",
    },
  ];
  return (
    <nav className="p-3 flex flex-row items-center space-x-4 lg:space-x-6 bg-gray-800">
      <Link
        href="/"
        className="mr-auto flex flex-row gap-2 items-center cursor-pointer"
      >
        <div className="relative h-14 w-12">
          <Image src="/logo.png" alt="logo" fill />
        </div>
        <h1 className="text-lg font-bold text-white">NIF Gymnastik</h1>
      </Link>

      <div className="md:hidden bg-gray-800">
        <Sheet>
          <SheetTrigger>
            <Menu className="text-white" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <div className="flex flex-row gap-2 items-center">
                  <div className="w-10 h-10 relative">
                    <Image src="/logo.png" alt="logo" fill />
                  </div>
                  <h1>NIF Gymnastik</h1>
                </div>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-3 w-full mt-5">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "mr-auto text-sm font-medium transition-colors hover:text-primary",
                    route.active ? "text-primary" : "text-muted-foreground¨"
                  )}
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:flex flex-row gap-4 pr-10">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-md font-medium transition-colors hover:text-secondary",
              route.active ? "text-white" : "text-gray-400"
            )}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
