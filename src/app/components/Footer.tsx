import svgPaths from '../../imports/svg-uqilpx73oj';


export function Footer() {
  return (
    <footer className="bg-[#f0f0f0] px-[100px] pt-[80px] pb-[40px]">
      <div className="grid grid-cols-5 gap-[100px] pb-[50px] border-b border-[rgba(0,0,0,0.1)]">
        {/* Company Info */}
        <div className="col-span-2">
          <h3 className="font-['Integral_CF:Bold',sans-serif] text-[32px] mb-[25px]">
            SHOP.CO
          </h3>
          <p className="font-['Satoshi:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.6)] leading-[22px] mb-[35px]">
            We have clothes that suits your style and which you're proud to wear. From women to men.
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-[12px]">
            {/* Twitter */}
            <div className="w-[28px] h-[28px] bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                <path d={svgPaths.p27bf5700} fill="black" />
              </svg>
            </div>
            
            {/* Facebook */}
            <div className="w-[28px] h-[28px] bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
              <svg width="7" height="13" viewBox="0 0 7 13" fill="none">
                <path d={svgPaths.p16f66d00} fill="black" />
              </svg>
            </div>
            
            {/* Instagram */}
            <div className="w-[28px] h-[28px] bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black">
              <path d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7ZM18 6.5C18 7.32843 17.3284 8 16.5 8C15.6716 8 15 7.32843 15 6.5C15 5.67157 15.6716 5 16.5 5C17.3284 5 18 5.67157 18 6.5Z"/>
            </svg>
            </div>
            
            {/* GitHub */}
            <div className="w-[28px] h-[28px] bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d={svgPaths.p2cf07700} fill="black" />
              </svg>
            </div>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-['Satoshi:Medium',sans-serif] text-[16px] mb-[26px] tracking-[3px]">
            COMPANY
          </h4>
          <ul className="space-y-[16px]">
            <li>
              <a href="#" className="font-['Satoshi:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.6)] hover:text-black transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="font-['Satoshi:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.6)] hover:text-black transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="font-['Satoshi:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.6)] hover:text-black transition-colors">
                Works
              </a>
            </li>
            <li>
              <a href="#" className="font-['Satoshi:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.6)] hover:text-black transition-colors">
                Career
              </a>
            </li>
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h4 className="font-['Satoshi:Medium',sans-serif] text-[16px] mb-[26px] tracking-[3px]">
            HELP
          </h4>
          <ul className="space-y-[16px]">
            <li>
              <a href="#" className="font-['Satoshi:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.6)] hover:text-black transition-colors">
                Customer Support
              </a>
            </li>
            <li>
              <a href="#" className="font-['Satoshi:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.6)] hover:text-black transition-colors">
                Delivery Details
              </a>
            </li>
            <li>
              <a href="#" className="font-['Satoshi:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.6)] hover:text-black transition-colors">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="font-['Satoshi:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.6)] hover:text-black transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* FAQ Links */}
        <div>
          <h4 className="font-['Satoshi:Medium',sans-serif] text-[16px] mb-[26px] tracking-[3px]">
            FAQ
          </h4>
          <ul className="space-y-[16px]">
            <li>
              <a href="#" className="font-['Satoshi:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.6)] hover:text-black transition-colors">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="font-['Satoshi:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.6)] hover:text-black transition-colors">
                Manage Deliveries
              </a>
            </li>
            <li>
              <a href="#" className="font-['Satoshi:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.6)] hover:text-black transition-colors">
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="font-['Satoshi:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.6)] hover:text-black transition-colors">
                Payments
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex items-center justify-between pt-[25px]">
        <p className="font-['Satoshi:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.6)]">
          Shop.co © 2000-2026, All Rights Reserved
        </p>
        
        {/* Payment Methods */}
      <div className="flex gap-3">

        {/* Mastercard */}
        <div className="bg-white rounded-md w-[70px] h-[45px] flex items-center justify-center shadow-sm">
          <img
            src="/assets/payments/Mastercard.png"
            alt="Mastercard"
            className="h-5 object-contain"
          />
        </div>

        {/* Google Pay */}
        <div className="bg-white rounded-md w-[70px] h-[45px] flex items-center justify-center shadow-sm">
          <img
            src="/assets/payments/gpay.png"
            alt="Google Pay"
            className="h-5 object-contain"
          />
        </div>

        {/* PayPal */}
        <div className="bg-white rounded-md w-[70px] h-[45px] flex items-center justify-center shadow-sm">
          <img
            src="/assets/payments/Paypal.png"
            alt="PayPal"
            className="h-5 object-contain"
          />
        </div>

        {/* Apple Pay */}
        <div className="bg-white rounded-md w-[70px] h-[45px] flex items-center justify-center shadow-sm">
          <img
            src="/assets/payments/applepay.png"
            alt="Apple Pay"
            className="h-5 object-contain"
          />
        </div>

        {/* Visa */}
        <div className="bg-white rounded-md w-[70px] h-[45px] flex items-center justify-center shadow-sm">
          <img
            src="/assets/payments/Visa.png"
            alt="Visa"
            className="h-5 object-contain"
          />
        </div>

      </div>
      </div>
    </footer>
  );
}