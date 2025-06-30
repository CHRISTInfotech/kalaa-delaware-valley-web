
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const NavLink = ({ to, children, className = "" }: { to: string; children: React.ReactNode; className?: string }) => (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-kerala-gold/10 ${isActive(to)
          ? 'text-kerala-gold border-b-2 border-kerala-gold'
          : 'text-black hover:text-kerala-gold'
        } ${className}`}
    >
      {children}
    </Link>
  );

  return (
    <nav className="sticky  w-full bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 md:h-24 items-center justify-between">

          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-4">
            <div className="w-18 h-20">
              <img
                src="/src/components/images/kalaa logo.jpg"
                alt="Kalaa Logo"
               className="w-full h-full object-cover"
              />
            </div>

            <div className="hidden md:block">
              <div className="text-lg font-serif font-bold text-kerala-gold">കലാ</div>
              <div className="text-xs text-gray-600">Malayali Association of Delaware Valley</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>

            {/* Events Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={`px-3 py-2 text-sm font-medium ${isActive('/events') ? 'text-kerala-gold' : 'text-black hover:text-kerala-gold'
                  }`}>
                  Events <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg">
                <DropdownMenuItem asChild>
                  <Link to="/events/upcoming" className="w-full text-black hover:text-kerala-gold">Upcoming Events</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/events/past" className="w-full text-black hover:text-kerala-gold">Past Events</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/team">Team</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/membership">Membership</NavLink>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-black">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white">
              <SheetHeader>
                <SheetTitle className="text-kerala-gold">Navigation Menu</SheetTitle>
                <SheetDescription className="text-black">
                  Malayali Association of Delaware Valley
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-8">
                <Link to="/" onClick={() => setIsOpen(false)} className="text-lg text-black hover:text-kerala-gold">Home</Link>
                <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg text-black hover:text-kerala-gold">About Us</Link>
                <div className="space-y-2">
                  <div className="text-lg font-medium text-black">Events</div>
                  <Link to="/events/upcoming" onClick={() => setIsOpen(false)} className="text-base text-gray-600 hover:text-kerala-gold ml-4 block">Upcoming Events</Link>
                  <Link to="/events/past" onClick={() => setIsOpen(false)} className="text-base text-gray-600 hover:text-kerala-gold ml-4 block">Past Events</Link>
                </div>
                <Link to="/gallery" onClick={() => setIsOpen(false)} className="text-lg text-black hover:text-kerala-gold">Gallery</Link>
                <Link to="/team" onClick={() => setIsOpen(false)} className="text-lg text-black hover:text-kerala-gold">Team</Link>
                <Link to="/news" onClick={() => setIsOpen(false)} className="text-lg text-black hover:text-kerala-gold">News</Link>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="text-lg text-black hover:text-kerala-gold">Contact</Link>
                <Link to="/membership" onClick={() => setIsOpen(false)} className="text-lg text-black hover:text-kerala-gold">Membership</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
