export function DressStyleSection() {
  return (
        <div className="px-4 sm:px-8 lg:px-16 py-8 lg:py-12">
          <div className="bg-[#f0f0f0] rounded-2xl lg:rounded-[32px] px-6 sm:px-10 lg:px-12 py-8 lg:py-12">
            
            <h2 className="text-2xl sm:text-4xl lg:text-5xl leading-tight font-extrabold mb-8 lg:mb-10 text-center">
              BROWSE BY DRESS STYLE
            </h2>

        <div className="grid grid-cols-3 gap-[40px]">
          {/* Casual */}
          <div className="col-span-1 bg-white rounded-[20px] h-[289px] overflow-hidden relative cursor-pointer hover:scale-105 transition-transform">
            <img
              src="/assets/images/image11(1).png"
              alt="Casual"
              className="w-full h-full object-cover scale-x-[1]"
            />
            <p className="absolute top-[25px] left-[36px] font-['Satoshi:Bold',sans-serif] text-[36px]">
              Casual
            </p>
          </div>

          {/* Formal */}
          <div className="col-span-2 bg-white rounded-[20px] h-[289px] overflow-hidden relative cursor-pointer hover:scale-105 transition-transform">
            <img
              src="/assets/images/image13.png"
              alt="Formal"
              className="w-full h-full object-cover"
            />
            <p className="absolute top-[25px] left-[36px] font-['Satoshi:Bold',sans-serif] text-[36px] font-bold">
              Formal
            </p>
          </div>

          {/* Party */}
          <div className="col-span-2 bg-white rounded-[20px] h-[289px] overflow-hidden relative cursor-pointer hover:scale-105 transition-transform">
            <img
              src="/assets/images/image12.png"
              alt="Party"
              className="w-full h-full object-cover"
            />
            <p className="absolute top-[25px] left-[36px] font-['Satoshi:Bold',sans-serif] text-[36px] font-bold">
              Party
            </p>
          </div>

          {/* Gym */}
          <div className="col-span-1 bg-white rounded-[20px] h-[289px] overflow-hidden relative cursor-pointer hover:scale-105 transition-transform">
            <img
              src="/assets/images/image14.png"
              alt="Gym"
              className="w-full h-full object-cover"
            />
            <p className="absolute top-[25px] left-[36px] font-['Satoshi:Bold',sans-serif] text-[36px]">
              Gym
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
