import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Waitlist() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    expectations: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      // Simulate network request delay
      await new Promise(resolve => setTimeout(resolve, 800));

      // Save to local storage to avoid technical hurdles
      const newEntry = {
        ...formData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString()
      };
      
      const existing = JSON.parse(localStorage.getItem('kato_waitlist') || '[]');
      localStorage.setItem('kato_waitlist', JSON.stringify([...existing, newEntry]));

      setStatus('success');
      setFormData({ fullName: '', email: '', expectations: '' });
    } catch (error: any) {
      console.error("Error saving: ", error);
      setStatus('error');
      setErrorMessage('An error occurred while submitting.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-[#E8E4D9]">
      {/* Background pattern simulating the border in the image */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #8B5A44 0, #8B5A44 10px, transparent 10px, transparent 20px, #7B8B4F 20px, #7B8B4F 30px, transparent 30px, transparent 40px)' }}></div>
      
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-4 z-10 pb-20">
        <div className="bg-kato-bg p-8 md:p-12 max-w-lg w-full shadow-2xl relative border-[12px] border-transparent" style={{ borderImage: 'repeating-linear-gradient(45deg, #3E2723 0, #3E2723 15px, #D7C4A3 15px, #D7C4A3 30px, #8B5A44 30px, #8B5A44 45px) 15' }}>
          
          <div className="text-center mb-8">
            <h1 className="font-serif text-4xl font-bold italic mb-2 text-kato-brown">Kató</h1>
            <h2 className="font-serif text-2xl italic text-kato-brown">Join the Akwete Collection Waitlist</h2>
          </div>

          {status === 'success' ? (
            <div className="text-center py-8">
              <h3 className="font-serif text-2xl text-green-700 mb-4">Thank you for joining!</h3>
              <p className="font-sans text-gray-700 mb-8">We'll be in touch soon with updates on the Akwete Collection.</p>
              <Link to="/" className="inline-block bg-kato-brown text-kato-bg font-serif px-6 py-2 rounded-sm hover:bg-kato-dark-brown transition-colors">
                Return Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block font-serif text-lg mb-2 text-kato-brown">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-[#D7C4A3]/40 border border-kato-brown/20 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-kato-brown font-sans text-kato-brown"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-serif text-lg mb-2 text-kato-brown">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#D7C4A3]/40 border border-kato-brown/20 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-kato-brown font-sans text-kato-brown"
                />
              </div>

              <div>
                <label htmlFor="expectations" className="block font-serif text-lg mb-2 text-kato-brown">What are you most expectant about?</label>
                <textarea
                  id="expectations"
                  name="expectations"
                  rows={4}
                  placeholder="e.g., Specific patterns, limited collections, exclusive pre-orders..."
                  value={formData.expectations}
                  onChange={handleChange}
                  className="w-full bg-[#D7C4A3]/40 border border-kato-brown/20 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-kato-brown font-sans placeholder:text-kato-brown/50 resize-none text-kato-brown"
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="text-red-600 text-sm font-sans">{errorMessage}</div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-kato-brown text-kato-bg font-serif text-xl py-4 rounded-sm hover:bg-kato-dark-brown transition-colors disabled:opacity-70"
              >
                {status === 'submitting' ? 'Submitting...' : 'Submit My Interest'}
              </button>

              <p className="text-center font-serif text-sm mt-6 text-kato-brown">
                You're one step closer to handwoven excellence.
              </p>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
