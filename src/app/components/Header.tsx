import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onSearchChange: (query: string) => void;
  cartItemCount: number;
}

export function Header({ onSearchChange, cartItemCount }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearchChange(value);
  };

  return (
    <>
      {/* Promo Banner */}
      <div className="bg-black h-[38px] flex items-center justify-center text-white text-[14px] relative">
        <p className="font-['Satoshi:Regular',sans-serif]">
          Sign up and get 20% off to your first order.{' '}
          <span className="underline cursor-pointer hover:opacity-80">Sign Up Now</span>
        </p>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between px-[100px] py-[20px] bg-white">
        {/* Logo */}
        <Link to="/" className="font-['Integral_CF:Bold',sans-serif] text-[32px] text-black whitespace-nowrap">
          SHOP.CO
        </Link>

        {/* Navigation */}
        <nav className="flex gap-[24px] items-center text-[16px]">
          <Link to="/" className="font-['Satoshi:Regular',sans-serif] text-black hover:opacity-70">
            Home
          </Link>
          <Link to="/category/casual" className="font-['Satoshi:Regular',sans-serif] text-black hover:opacity-70">
            Casual
          </Link>
          <Link to="/category/formal" className="font-['Satoshi:Regular',sans-serif] text-black hover:opacity-70">
            Formal
          </Link>
          <Link to="/category/party" className="font-['Satoshi:Regular',sans-serif] text-black hover:opacity-70">
            Party
          </Link>
          <Link to="/category/gym" className="font-['Satoshi:Regular',sans-serif] text-black hover:opacity-70">
            Gym
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="bg-[#f0f0f0] rounded-[62px] flex-1 max-w-[500px] mx-[40px]">
          <div className="flex gap-[12px] items-center px-[16px] py-[12px]">
            <Search className="w-[24px] h-[24px] text-[rgba(0,0,0,0.4)]" />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={handleSearchInput}
              className="flex-1 bg-transparent outline-none font-['Satoshi:Regular',sans-serif] text-[16px] text-black placeholder:text-[rgba(0,0,0,0.4)]"
            />
          </div>
        </div>

        {/* Icons */}
        <div className="flex gap-[14px] items-center relative">
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-[24px] h-[24px] cursor-pointer hover:opacity-70" />
            {cartItemCount > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cartItemCount}
              </div>
            )}
          </Link>
          <User className="w-[24px] h-[24px] cursor-pointer hover:opacity-70" />
        </div>
      </div>
    </>
  );
}
