import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-8 md:px-16 max-w-7xl mx-auto w-full">
      <Link to="/" className="text-4xl font-serif font-bold italic tracking-tighter text-kato-brown">Kató</Link>
      <div className="hidden md:flex space-x-8 items-center font-serif text-lg text-kato-brown">
        <Link to="/waitlist" className="hover:text-kato-tan transition-colors font-semibold">Join Waitlist</Link>
        <button className="hover:text-kato-tan transition-colors">
          <ShoppingCart size={24} strokeWidth={1.5} />
        </button>
      </div>
    </nav>
  );
}
