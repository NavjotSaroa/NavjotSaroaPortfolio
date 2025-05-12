'use client';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1a1a1a] shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-semibold">My Portfolio</div>
        <div className="space-x-4">
            <a href="#home" className="text-white nav-text-outline hover:underline">Home</a>
            <a href="#f1" className="text-white nav-text-outline hover:underline">About Me</a>
            <a href="#bono" className="text-white nav-text-outline hover:underline">Projects</a>
        </div>
      </div>
    </nav>
  );
}
