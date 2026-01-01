import { Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Woodcraft <span className="text-amber-600">Adda</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading manufacturer of premium plywood, laminates, veneers, and doors.
              Committed to quality, innovation, and sustainability.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 hover:bg-amber-600 p-2 rounded-full transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-amber-600 p-2 rounded-full transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-amber-600 p-2 rounded-full transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-amber-600 p-2 rounded-full transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-amber-600 p-2 rounded-full transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-amber-600 transition">Plywood</a></li>
              <li><a href="#" className="hover:text-amber-600 transition">Laminates</a></li>
              <li><a href="#" className="hover:text-amber-600 transition">Veneers</a></li>
              <li><a href="#" className="hover:text-amber-600 transition">Doors</a></li>
              <li><a href="#" className="hover:text-amber-600 transition">Designer Panels</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-amber-600 transition">About Us</a></li>
              <li><a href="#" className="hover:text-amber-600 transition">Dealers</a></li>
              <li><a href="#" className="hover:text-amber-600 transition">Downloads</a></li>
              <li><a href="#" className="hover:text-amber-600 transition">Careers</a></li>
              <li><a href="#" className="hover:text-amber-600 transition">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-amber-600 flex-shrink-0 mt-1" />
                <span>peer bahora baareilly near aslam colony</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-amber-600 flex-shrink-0" />
                <a href="tel:8445484755" className="hover:text-amber-600 transition">
                  8445484755
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-amber-600 flex-shrink-0" />
                <a href="mailto:raajarsh6@gmail.com" className="hover:text-amber-600 transition">
                  raajarsh6@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#FF073A]"> Developed by
             <a href="https://www.instagram.com/sheikh_arshad.143/" target="_blank">
             Er Arshad sheikh</a>
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-amber-600 transition">Privacy Policy</a>
              <a href="#" className="hover:text-amber-600 transition">Terms of Service</a>
              <a href="#" className="hover:text-amber-600 transition">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
