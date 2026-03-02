
import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Câu chuyện', href: '#story' },
    { name: 'Bộ sưu tập', href: '#collections' },
    { name: 'Chất liệu', href: '#materials' },
    { name: 'Giá trị', href: '#why-us' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className={`font-serif text-3xl font-bold tracking-tighter ${isScrolled ? 'text-earth-green' : 'text-earth-green md:text-white'}`}>ECOBAM</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium tracking-widest uppercase hover:opacity-70 transition-opacity ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <button className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>
            <ShoppingBag size={20} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className={isScrolled ? 'text-gray-800' : 'text-white'}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 animate-fadeIn">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-800"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
