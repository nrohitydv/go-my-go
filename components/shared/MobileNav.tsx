"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <h1 className="text-h1-color">Go My Go</h1>
      </Link>
      <nav className="flex gap-2">
        <Sheet>
          <SheetTrigger>
            <Image
              src="/assets/icons/menu.svg"
              alt=""
              width={32}
              height={32}
              className="cursor-pointer"
            />
          </SheetTrigger>
          <SheetContent className="sheet-content sm:w-64">
            <>
              <Link href="/" className="flex items-center gap-2 md:py-2">
                <h1 className="text-h1-color">Go My Go</h1>
              </Link>
              <ul className="header-nav_elements">
                {navLinks.map((link) => {
                  const isActive = link.route === pathname;
                  return (
                    <li
                      key={link.route}
                      className={`${
                        isActive && "gradient-text"
                      }p-18 flex whitespace-nowrap text-dark-700`}
                    >
                      <Link
                        href={link.route}
                        className="sidebar-link cursor-pointer"
                      >
                        <Image src={link.icon} alt="" width={24} height={24} />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default MobileNav;
