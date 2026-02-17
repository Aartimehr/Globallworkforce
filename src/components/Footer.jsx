// Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-8 px-4 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Logo / Description */}
        <div>
          <h2 className="text-xl font-bold text-black mb-2">Globalworkforce</h2>
          <p className="text-sm text-black">
            Your job findings are right here.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-blue-700">
            <li><Link to="/" className="hover:text-blue-700 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-700 transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-700 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Social or Info */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Get in Touch</h3>
          <p className="text-sm text-black">Email: globalworkforce22@gmail.com</p>
          <p className="text-sm text-black">Phone: +91-9217918831</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8 border-t pt-4">
        © {new Date().getFullYear()} Globalworkforce. All rights reserved.
      </div>
    </footer>
  );
}

