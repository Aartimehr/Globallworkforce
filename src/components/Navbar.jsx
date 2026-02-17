import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../utilities/images/logo1.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="font-bold text-md text-white p-4 bg-blue-300 relative z-20">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </Link>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            &#9776;
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex-col md:flex md:flex-row md:space-x-8 w-full md:w-auto transition-all duration-300 
          ${mobileMenuOpen ? "block" : "hidden"} md:block`}
        >
          <li className="p-2 md:p-0">
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>

          <li className="p-2 md:p-0">
            <Link to="/current-openings" className="hover:underline">
              Current Openings
            </Link>
          </li>

          <li className="p-2 md:p-0">
            <Link to="/CandidateForm" className="hover:underline">
              Candidate Form
            </Link>
          </li>

          <li className="p-2 md:p-0">
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </li>

          <li className="p-2 md:p-0">
            <Link to="/services" className="hover:underline">
              Services
            </Link>
          </li>

          <li className="p-2 md:p-0">
            <Link to="/contact" className="hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
