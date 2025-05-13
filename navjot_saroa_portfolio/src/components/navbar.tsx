'use client';

import { useState } from 'react';

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
          <a href="#home" className="text-white hover:underline">Home</a>
          <a href="#f1" className="text-white hover:underline">About Me</a>
          <a href="#bono" className="text-white hover:underline">Projects</a>
        </div>
      </div>

      {/* Mobile Dropdown Links */}
      <div className={`md:hidden ${isOpen ? 'flex' : 'hidden'} flex-col items-end px-4 pb-4 w-full bg-[#1a1a1a]`}>
        <a href="#home" className="block py-2 text-white hover:underline">Home</a>
        <a href="#f1" className="block py-2 text-white hover:underline">About Me</a>
        <a href="#bono" className="block py-2 text-white hover:underline">Projects</a>
      </div>
    </nav>
  );
}
