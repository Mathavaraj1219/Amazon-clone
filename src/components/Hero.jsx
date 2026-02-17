import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/January25/5299-HI---Jan-HMD-Heros_3000X1200_Unrec._CB551672577_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/af_pc_2x._CB792409181_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG25/Home/2025/GW/BAU/Dec/Hero/Mega_home_sale_BAU_PC_-_Drying_racks._CB777818991_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/Unrec/Live_PC_Hero_Lifestyle_3000x1200-m-2x._CB780065834_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2025/Uber/Unrec_GW/Updated/D323819370_3000._CB788515770_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2025/GW/BAU/Unrec/PC/934044814._CB551384116_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/tdhruvko/GW/BAU/Feb26/1_GW-Hero-Pc-HDFC-KOTAK-ONE-YES-Bank._CB787666247_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2025/GW/BAU/Unrec/PC/934044815._CB551384116_.jpg",
];

function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">

      <div
        className="flex transition-transform duration-700 h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="banner"
            className="w-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/4 left-5 -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full shadow-md"
      >
        <FaChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/4 right-5 -translate-y-1/2 bg-white/70 hover:bg-white p-3 rounded-full shadow-md"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
}

export default Hero;
