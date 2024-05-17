"use client";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { CiSearch } from "react-icons/ci";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <h1 className="text-h1-color">Go My Go</h1>
        </Link>
        <nav className="sidebar-nav">
          <ul className="sidebar-nav_elements">
            <div className="relative">
              <CiSearch
                fontSize={20}
                className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
              />

              <input
                type="text"
                placeholder="Search"
                className="text-sm focus:outline-none active:outline-none h-10  border border-grey-300 rounded-sm pl-11 pr-4"
              />
            </div>
            {navLinks.slice(0, 6).map((link) => {
              const isActive = link.route === pathname;
              return (
                <li
                  key={link.route}
                  className={`sidebar-nav_element group ${
                    isActive ? " text-dark" : "text-gray-700"
                  }`}
                >
                  <Link href={link.route} className="sidebar-link">
                    <Image
                      src={link.icon}
                      alt=""
                      width={24}
                      height={24}
                      className={`${isActive && "brightness-200"}`}
                    />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="sidebar-nav_elements">
            {navLinks.slice(6).map((link) => {
              const isActive = link.route === pathname;
              return (
                <li
                  key={link.route}
                  className={`sidebar-nav_element group ${
                    isActive ? "bg-purple-gradient text-white" : "text-gray-700"
                  }`}
                >
                  <Link href={link.route} className="sidebar-link">
                    <Image
                      src={link.icon}
                      alt=""
                      width={24}
                      height={24}
                      className={`${isActive && "brightness-200"}`}
                    />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
