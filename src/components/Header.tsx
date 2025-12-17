import { Menu, X, Search, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="bg-amber-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <a href="tel:8445484755" className="flex items-center gap-2 hover:text-amber-200 transition">
              <Phone size={14} />
              <span>8445484755</span>
            </a>
            <a href="mailto:raajarsh6@gmail.com" className="flex items-center gap-2 hover:text-amber-200 transition">
              <Mail size={14} />
              <span>raajarsh6@gmail.com</span>
            </a>
          </div>
          <div className="hidden md:flex gap-4">
            <a href="#dealers" className="hover:text-amber-200 transition">Find a Dealer</a>
            <a href="#contact" className="hover:text-amber-200 transition">Contact Us</a>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-3xl font-bold text-amber-900">
              Woodcraft <span className="text-amber-600">Adda</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-amber-900 font-medium transition">Home</a>
            <a href="#products" className="text-gray-700 hover:text-amber-900 font-medium transition">Products</a>
            <a href="#features" className="text-gray-700 hover:text-amber-900 font-medium transition">Features</a>
            <a href="#about" className="text-gray-700 hover:text-amber-900 font-medium transition">About Us</a>
            <a href="#gallery" className="text-gray-700 hover:text-amber-900 font-medium transition">Gallery</a>
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <Search size={20} className="text-gray-700" />
            </button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-gray-700 hover:text-amber-900 font-medium">Home</a>
              <a href="#products" className="text-gray-700 hover:text-amber-900 font-medium">Products</a>
              <a href="#features" className="text-gray-700 hover:text-amber-900 font-medium">Features</a>
              <a href="#about" className="text-gray-700 hover:text-amber-900 font-medium">About Us</a>
              <a href="#gallery" className="text-gray-700 hover:text-amber-900 font-medium">Gallery</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
