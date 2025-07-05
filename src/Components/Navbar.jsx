import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // or any icon library

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#3636367b] px-4 sm:px-6 py-3 flex items-center justify-between">
      {/* Left: Logo + Name */}
      <div className="flex items-center gap-3 sm:gap-5">
        <img
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain"
          src="/globe-img.png"
          alt="logo"
        />
        <NavLink
          to="/"
          className="uppercase text-lg sm:text-xl md:text-2xl font-semibold text-[#8fb188]"
        >
          GlobeNavigator
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 text-sm sm:text-base md:text-lg font-semibold text-[#f1f1ec]">
        <li><NavLink to="/Product">Product</NavLink></li>
        <li><NavLink to="/Pricing">Pricing</NavLink></li>
        <li>
          <a
            className="rounded-lg bg-[#f1f1ec] px-5 py-2 text-[#5e8a53] hover:bg-[#5e8a53] hover:text-[#f1f1ec] transition-all"
            href=""
          >
            Login
          </a>
        </li>
      </ul>

      {/* Hamburger for Mobile */}
      <button
        className="md:hidden text-[#f1f1ec]"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#363636] text-[#f1f1ec] px-6 py-4 space-y-4 z-50 flex flex-col md:hidden font-semibold text-lg">
          <NavLink to="/Product" onClick={() => setIsOpen(false)}>Product</NavLink>
          <NavLink to="/Pricing" onClick={() => setIsOpen(false)}>Pricing</NavLink>
          <a
            href=""
            onClick={() => setIsOpen(false)}
            className="rounded-lg bg-[#f1f1ec] px-4 py-2 text-[#5e8a53] hover:bg-[#5e8a53] hover:text-[#f1f1ec] transition-all"
          >
            Login
          </a>
        </div>
      )}
    </nav>
  );
}
