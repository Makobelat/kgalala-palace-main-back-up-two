import { Link } from 'react-router-dom';
import logo from '../data/logo wh.png';
import {Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-red-900 text-red-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
            <img src={logo} alt="Kgalala Palace" className="h-21 w-21 object-contain" />
              <span className="font-bold text-lg text-white">Kgalala Palace</span>
            </div>
            <p className="text-sm">
              Your premier destination for elegant events and memorable celebrations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-red-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/venues" className="hover:text-red-500 transition-colors">Venues</Link>
              </li>
              <li>
                <Link to="/tickets" className="hover:text-red-500 transition-colors">Tickets</Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-red-500 transition-colors">Events</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>063 093 5186</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@kgalalapalace.co.za</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>26 Lamontpark, Vanderbijlpark </span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-semibold text-white mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 10:00 - 18:00</li>
              <li>Saturday: 10:00 - 22:00</li>
              <li>Sunday: 10:00 - 18:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Kgalala Palace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}