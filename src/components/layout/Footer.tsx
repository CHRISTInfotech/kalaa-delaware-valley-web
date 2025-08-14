import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-gray-400 bg-kerala-blue text-white">
      {/* Top Line Full Width */}
      <div className="w-full border-t border-gray-400"></div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-18 h-20">
                <img
                  src="/src/components/images/kalaa logo1.jpg"
                  alt="Website Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <div className="text-xl font-serif font-bold text-kerala-gold">കലാ</div>
                <div className="text-sm">Malayali Association of Delaware Valley</div>
              </div>
            </div>
            <p className="text-sm text-black max-w-md">
              Celebrating Kerala's vibrant culture and traditions in the heart of Delaware Valley.
              Join our community that brings together the Malayalee diaspora to preserve heritage
              and create lasting connections.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-black transition-colors">
                <Facebook className="h-5 w-5 text-black" />
              </a>
              <a href="#" className="text-black transition-colors">
                <Instagram className="h-5 w-5 text-black" />
              </a>
              <a href="mailto:info@kalaa.org" className="text-black transition-colors">
                <Mail className="h-5 w-5 text-black" />
              </a>
            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-kerala-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-black hover:text-black">Home</Link></li>
              <li><Link to="/about" className="text-black hover:text-black">About Us</Link></li>
              <li><Link to="/events/upcoming" className="text-black hover:text-black">Events</Link></li>
              <li><Link to="/gallery" className="text-black hover:text-black">Gallery</Link></li>
              <li><Link to="/membership" className="text-black hover:text-black">Membership</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-kerala-gold">Contact</h3>
            <div className="space-y-2 text-sm text-black">
              <p>Philadelphia pa</p>
              <p>Email: KALAA.MALAYALEE@gmail.com</p>
              <p>Phone: +1 (484) 535- 1553</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line Full Width */}
      <div className="w-full border-t border-gray-600">
        <div className="text-center text-sm text-black py-4">
          <p>&copy; {new Date().getFullYear()} Copyright CHRIST Infotech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
