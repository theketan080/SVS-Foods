import React from "react";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <>
    <section className="relative overflow-hidden bg-[#f8efe8] min-h-screen flex items-center pt-32 sm:pt-36 lg:pt-44 pb-24">

      <div className="absolute top-1/2 right-[-200px] -translate-y-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-orange-300 opacity-30 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-20">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-10 items-center">

       
          <div className="relative z-10 text-center lg:text-left order-2 lg:order-1">

           
            <div className="inline-flex items-center gap-2 bg-white shadow-lg border border-black/5 rounded-full px-5 py-3 mb-7">

             

              <span className="uppercase tracking-[3px] text-orange-500 font-bold text-[10px] sm:text-xs">
                Shark Tank Featured Premium QSR
              </span>

            </div>

           \
            <h1 className="font-black tracking-tight leading-[0.9] text-[56px] sm:text-[75px] md:text-[95px]">

              Crafting The

              <span className="block text-orange-500">
                Ultimate Burger
              </span>

              Experience.

            </h1>

            <p className="mt-7 text-[18px] sm:text-[20px] text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">

              Fresh vegetarian gourmet burgers engineered for
              lightning-fast delivery, premium taste, and unforgettable
              customer experience.

            </p>

            
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">

              <button className="bg-orange-500 hover:bg-black hover:scale-105 transition-all duration-300 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl">

                Order Now →

              </button>

              <Link
  to="/menu"
  className="border border-black/10 hover:bg-white transition-all duration-300 px-8 py-5 rounded-2xl font-bold text-lg bg-[#fdf7f3] inline-flex items-center justify-center"
>

  Explore Menu

</Link>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-5 sm:gap-8 mt-14 max-w-lg mx-auto lg:mx-0">

              <div>
                <h3 className="text-3xl sm:text-5xl font-black">
                  800+
                </h3>

                <p className="text-gray-500 mt-2 text-sm sm:text-base">
                  Daily Orders
                </p>
              </div>

              <div>
                <h3 className="text-3xl sm:text-5xl font-black">
                  4.9★
                </h3>

                <p className="text-gray-500 mt-2 text-sm sm:text-base">
                  Customer Rating
                </p>
              </div>

              <div>
                <h3 className="text-3xl sm:text-5xl font-black">
                  800+
                </h3>

                <p className="text-gray-500 mt-2 text-sm sm:text-base">
                  Cities Served
                </p>
              </div>

            </div>

          </div>

          
          <div className="relative flex justify-center order-1 lg:order-2">

            
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] h-[520px] sm:h-[620px] bg-white/40 backdrop-blur-2xl rounded-[35px] sm:rounded-[45px] border border-white/50 shadow-[0_20px_80px_rgba(0,0,0,0.08)] overflow-hidden">

              
              <div className="absolute top-5 right-5 bg-black text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold z-20">

                Scroll to Explore ✨

              </div>

             
              <div className="absolute w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-orange-300 opacity-40 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

              
              <div className="absolute inset-0 flex items-center justify-center px-5 z-10">

                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop"
                  alt="Burger"
                  className="w-full max-w-[300px] sm:max-w-[340px] rounded-[30px] shadow-2xl hover:-translate-y-3 hover:rotate-1 transition duration-500"
                />

              </div>

              
              <div className="absolute left-4 sm:left-6 top-20 sm:top-24 bg-white shadow-xl rounded-2xl px-4 sm:px-5 py-3 sm:py-4 z-20">

                <p className="text-xs sm:text-sm text-gray-500">
                  Delivery Time
                </p>

                <h3 className="font-black text-xl sm:text-3xl">
                  15 Mins ⚡
                </h3>

              </div>

            
              <div className="absolute right-4 sm:right-6 bottom-20 sm:bottom-24 bg-white shadow-xl rounded-2xl px-4 sm:px-5 py-3 sm:py-4 z-20">

                <p className="text-xs sm:text-sm text-gray-500">
                  Customer Rating
                </p>

                <h3 className="font-black text-xl sm:text-3xl">
                  4.9 ★
                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
    </>
  );
};

export default HeroSection;