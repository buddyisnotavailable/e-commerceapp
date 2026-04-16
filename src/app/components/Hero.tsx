// import heroImg from "../../../Couple.png";

const stats = [
  { value: "200+", label: "International Brands" },
  { value: "2,000+", label: "High-Quality Products" },
  { value: "30,000+", label: "Happy Customers" },
];

const HeroSection = () => (
  <section
    className="relative bg-[#ffffff] overflow-hidden"
  >
    {/* BACKGROUND IMAGE */}
    <div className="absolute inset-0">
      <div
        className="w-full h-full bg-no-repeat bg-right-top bg-cover"
        style={{ backgroundImage: "url('/assets/images/Couple.png')" }}
      />
    </div>

    {/* CONTENT */}
    <div className="relative px-[20px] lg:px-[100px] py-[40px] lg:py-[80px] grid lg:grid-cols-2 items-center">
      
      {/* LEFT CONTENT */}
      <div className="max-w-[600px] z-10">
        
        <h1 className="text-[40px] md:text-[52px] lg:text-[64px] leading-[1.1] font-extrabold mb-[24px]">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>

        <p className="text-gray-500 text-[15px] leading-[26px] mb-[32px] max-w-[500px]">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of style.
        </p>

        <button className="bg-black text-white px-[32px] py-[14px] rounded-full mb-[40px]">
          Shop Now
        </button>

        <div className="flex flex-wrap gap-6 md:gap-10">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl md:text-4xl font-bold">{s.value}</div>
              <div className="text-xs md:text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* EMPTY RIGHT SIDE (keeps spacing) */}
      <div />
    </div>
  </section>
);
export default HeroSection;
