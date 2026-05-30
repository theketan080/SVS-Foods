import React, { useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const offers = [
  {
    title: "FREE FRIES",
    code: "FRYDAY",
    desc: "On Burger Orders Above ₹299",
  },

  {
    title: "50% OFF",
    code: "CHEEZY",
    desc: "Flat Discount On Combos",
  },

  {
    title: "FREE DRINK",
    code: "COOLUP",
    desc: "Free Beverage With Meals",
  },

  {
    title: "BUY 1 GET 1",
    code: "BURGERX",
    desc: "Applicable On Selected Burgers",
  },
];

const OffersSlider = () => {
  const sliderRef = useRef();

 
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({
          left: 320,
          behavior: "smooth",
        });

        
        if (
          sliderRef.current.scrollLeft +
            sliderRef.current.clientWidth >=
          sliderRef.current.scrollWidth - 10
        ) {
          sliderRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

 
  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">

      {/* ARROWS */}
      <div className="flex justify-end gap-3 mb-5">

        <button
          onClick={scrollLeft}
          className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition"
        >

          <ChevronLeft size={22} />

        </button>

        <button
          onClick={scrollRight}
          className="w-12 h-12 rounded-2xl bg-orange-500 text-white shadow-lg flex items-center justify-center hover:bg-black transition"
        >

          <ChevronRight size={22} />

        </button>

      </div>

      
      <div
        ref={sliderRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth"
      >

        {offers.map((offer, index) => (
          <div
            key={index}
            className="min-w-[300px] bg-white rounded-[34px] p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-white/50 relative overflow-hidden group"
          >

            
            <div className="absolute w-[120px] h-[120px] bg-orange-300 opacity-0 group-hover:opacity-40 blur-[70px] rounded-full top-[-20px] right-[-20px] transition duration-500"></div>

            <p className="text-sm uppercase tracking-[4px] text-orange-500 font-bold relative z-10">
              Exclusive Offer
            </p>

            <h3 className="text-4xl font-black mt-5 leading-tight relative z-10">
              {offer.title}
            </h3>

            <p className="mt-4 text-gray-500 font-medium relative z-10">
              {offer.desc}
            </p>

            
            <div className="mt-6 inline-block bg-[#fff4ed] text-orange-500 px-5 py-3 rounded-full font-black relative z-10">

              Use Code: {offer.code}

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default OffersSlider;