import { Mail } from 'lucide-react';
import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail('');
  };

  return (
    <div className="px-[100px] py-[40px]">
      <div className="bg-black rounded-[20px] px-[64px] py-[36px] flex items-center justify-between">
        <h2 className="font-['Integral_CF:Bold',sans-serif] text-[40px] text-white max-w-[550px] leading-[45px]">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-[14px] w-[350px]">
          <div className="bg-white rounded-[62px] flex items-center gap-[12px] px-[16px] py-[12px]">
            <Mail className="w-[24px] h-[24px] text-[rgba(0,0,0,0.4)]" />
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 outline-none font-['Satoshi:Regular',sans-serif] text-[16px] placeholder:text-[rgba(0,0,0,0.4)]"
            />
          </div>
          <button
            type="submit"
            className="bg-white text-black rounded-[62px] px-[16px] py-[12px] font-['Satoshi:Medium',sans-serif] text-[16px] hover:bg-gray-100 transition-colors"
          >
            Subscribe to Newsletter
          </button>
        </form>
      </div>
    </div>
  );
}
