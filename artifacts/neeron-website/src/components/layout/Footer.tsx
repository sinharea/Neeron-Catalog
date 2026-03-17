import { Link } from "wouter";
import { Sparkles, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-neeron flex items-center justify-center text-white shadow-lg">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Neeron<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Your Partner for Premium Cleaning Solutions. Trusted by homes & businesses for quality and shine since 2008.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-primary transition-colors">Our Products</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-primary transition-colors">Why Choose Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Top Products</h4>
            <ul className="space-y-4">
              <li className="text-gray-400">Floor Cleaner</li>
              <li className="text-gray-400">Toilet Cleaner</li>
              <li className="text-gray-400">Dish Wash Liquid</li>
              <li className="text-gray-400">Glass Cleaner</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>SH-16/57 D-9KA-9A Jai Durga Nagar Colony Kadipur, Shivpur, Varanasi-221003</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+91 9264975493</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Neeron Cleaning Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-gray-500 text-sm cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span className="text-gray-500 text-sm cursor-pointer hover:text-white transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
