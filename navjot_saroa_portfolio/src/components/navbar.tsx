'use client';

import { useState } from 'react';
import Link from 'next/link';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
<nav className="fixed top-0 left-0 w-full z-50 bg-[#1a1a1a] shadow-md overflow-x-hidden">
<div className="w-full flex flex-wrap items-center justify-between px-4 py-3 overflow-x-hidden">



        {/* Logo */}
        <div className="text-xl font-semibold text-white truncate max-w-[60%]">
  My Portfolio
</div>

<button
  className="md:hidden text-white text-2xl focus:outline-none shrink-0"
  onClick={() => setIsOpen(!isOpen)}
  aria-label="Toggle menu"
>
  ☰
</button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
        <Link href="/" className="text-white hover:underline">Home</Link>
        <Link href="/projects" className="text-white hover:underline">Projects</Link>
        <Link href="/about" className="text-white hover:underline">About Me</Link>    
        </div>
      </div>

      {/* Mobile Dropdown Links */}
      <div className={`md:hidden ${isOpen ? 'flex' : 'hidden'} flex-col items-end px-4 pb-4 w-full bg-[#1a1a1a]`}>
        <Link href="/" className="text-white hover:underline">Home</Link>
        <Link href="/projects" className="text-white hover:underline">Projects</Link>
        <Link href="/about" className="text-white hover:underline">About Me</Link>
    </div>
    </nav>
  );
}
