"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center p-3 mb-4 border-b-2 border-black border-solid shadow">
      <div className="text-3xl font-bold">Next Gify</div>
      <div className="flex gap-2 text-xl">
        <div className="nav-link">
          <Link href="/" className={pathname === "/" ? "underline" : ""}>
            Home
          </Link>
        </div>
        <div className="nav-link">
          <Link
            href="/about"
            className={pathname === "/about" ? "underline" : ""}
          >
            About
          </Link>
        </div>
        <div className="nav-link">
          <Link
            href="/contact"
            className={pathname === "/contact" ? "underline" : ""}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
