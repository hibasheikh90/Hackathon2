"use client";

import React from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function Nav() {
  return (
    <header className="flex items-center justify-between py-4 px-6 md:px-16 bg-white shadow-md border-4">
      {/* Desktop Navigation (Centered Menu) */}
      <nav className="hidden md:flex justify-center flex-grow">
        <ul className="flex items-center gap-8 ">
          <li className="hover:underline">
            <Link href="/">Plant pots</Link>
          </li>
          <li className="hover:underline">
            <Link href="/ceramics">Ceramics</Link>
          </li>
          <li className="hover:underline">
            <Link href="/tables">Tables</Link>
          </li>
          <li className="hover:underline">
            <Link href="/signup">Chairs</Link>
          </li>
          <li className="hover:underline">
            <Link href="/croakery">Croakery</Link>
          </li>
          <li className="hover:underline">
            <Link href="/tableware">Tableware</Link>
          </li>
          <li className="hover:underline">
            <Link href="/cutlery">Cutlery</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation Trigger */}
      <Sheet>
        <SheetTrigger className="md:hidden">
          <div className="text-2xl cursor-pointer">☰</div>
        </SheetTrigger>
        <SheetContent side="right" className="bg-black text-white p-4">
          <nav>
            <ul className="flex flex-col items-start gap-4 font-semibold">
              <li className="hover:underline">
                <Link href="/">Plant pots</Link>
              </li>
              <li className="hover:underline">
                <Link href="/ceramics">Ceramics</Link>
              </li>
              <li className="hover:underline">
                <Link href="/tables">Tables</Link>
              </li>
              <li className="hover:underline">
                <Link href="/chairs">Chairs</Link>
              </li>
              <li className="hover:underline">
                <Link href="/croakery">Croakery</Link>
              </li>
              <li className="hover:underline">
                <Link href="/tableware">Tableware</Link>
              </li>
              <li className="hover:underline">
                <Link href="/cutlery">Cutlery</Link>
              </li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default Nav;
