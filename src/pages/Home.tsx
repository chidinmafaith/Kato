import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-kato-bg">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center justify-center px-4 relative z-10 pb-20">
        {/* Background decorative elements (simulating the textiles) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[800px] -z-10 flex justify-center items-center">
            {/* Left white/patterned textile */}
            <div className="absolute w-72 h-[500px] bg-[#F4F4F4] rotate-[-12deg] -translate-x-[350px] shadow-2xl border border-black/5 overflow-hidden">
                <div className="w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, #8B5A44 40px, #8B5A44 45px, transparent 45px, transparent 80px, #3E2723 80px, #3E2723 82px)' }}></div>
            </div>
            
            {/* Center Red textile */}
            <div className="absolute w-[450px] h-[550px] bg-[#B22222] rotate-[-4deg] -translate-x-[100px] shadow-2xl border border-black/20 z-10 overflow-hidden">
                <div className="w-full h-full opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 20px, #000 20px, #000 22px)' }}></div>
            </div>
            
            {/* Right Brown textile */}
            <div className="absolute w-[400px] h-[500px] bg-[#5D4037] rotate-[6deg] translate-x-[150px] shadow-xl border border-black/10 z-0 overflow-hidden">
                <div className="w-full h-full opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 15px, #fff 15px, #fff 17px)' }}></div>
            </div>
            
            {/* Far Right Green textile */}
            <div className="absolute w-64 h-[480px] bg-[#556B2F] rotate-[18deg] translate-x-[380px] shadow-lg border border-black/10 -z-10 overflow-hidden">
                <div className="w-full h-full opacity-40" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 30px, #000 30px, #000 32px)' }}></div>
            </div>
        </div>

        <div className="text-center z-20 mt-12 bg-kato-bg/10 backdrop-blur-sm p-8 rounded-2xl">
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-white drop-shadow-md mb-2 tracking-wide">AKWETE</h1>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-kato-bg drop-shadow-md italic mb-6">
            Sourced, Sold &<br />Shipped Worldwide
          </h2>
          
          <div className="flex items-center justify-center space-x-4 mb-10 text-kato-bg drop-shadow-md">
            <span className="font-serif text-xl">Handwoven Textiles</span>
            <span className="text-2xl">⟡</span>
            <span className="font-serif text-xl">From Eastern Nigeria</span>
          </div>

          <Link 
            to="/waitlist" 
            className="inline-block bg-kato-brown text-kato-bg font-serif text-xl px-10 py-4 rounded-sm hover:bg-kato-dark-brown transition-colors shadow-lg"
          >
            Join Our Priority Waitlist
          </Link>
          
          <div className="mt-8">
            <a href="#" className="font-serif text-kato-bg drop-shadow-md underline underline-offset-4 hover:text-white transition-colors">
              Click here for more information
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
