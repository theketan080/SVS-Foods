import React from "react";
import founderImg from "../assets/founder.png";

const AboutPage = () => {
  return (
    <section className="bg-[#fff7f2] min-h-screen py-32 overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-20">

        
        <div className="text-center">

          <p className="uppercase tracking-[4px] text-orange-500 font-bold text-sm">
            About SVS Foods
          </p>

          <h1 className="mt-5 text-[50px] sm:text-[75px] leading-[0.95] font-black">

            Crafted With
            <span className="text-orange-500 block">
              Purity & Speed.
            </span>

          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-500 leading-relaxed">

            A modern vegetarian QSR brand combining
            traditional taste, smart technology,
            and lightning-fast delivery experience.

          </p>

        </div>

      
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">

          
          <div className="relative">

           
            <div className="absolute inset-0 bg-orange-300 opacity-20 blur-[120px] rounded-full"></div>

            
            <div className="relative bg-[#f97342] rounded-[40px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.15)] h-[620px] sm:h-[760px]">

             
              <img
                src={founderImg}
                alt="Founder"
                className="
                  absolute inset-0
                  w-full h-full
                  object-cover
                  object-top
                  sm:object-center
                  scale-[1.01]
                  sm:scale-[1.03]
                  md:scale-[1.05]
                  opacity-0
                  animate-founder
                "
              />

              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              
              <div className="absolute bottom-0 left-0 w-full z-20">

                <div className="px-6 sm:px-10 pb-8 sm:pb-12 pt-32 sm:pt-40">

                  <h2
                    className="
                      mt-6
                      text-white
                      font-black
                      leading-[0.88]
                      tracking-tight
                      text-[72px]
                      sm:text-[88px]
                      md:text-[110px]
                      drop-shadow-2xl
                    "
                  >

                    Paras
                    <span className="block">
                      Jain
                    </span>

                  </h2>

                  
                  <p
                    className="
                      mt-6
                      text-white/90
                      text-base
                      sm:text-xl
                      leading-relaxed
                      max-w-lg
                      font-medium
                    "
                  >

                    “Don’t be afraid to give up
                    the good to go for the great.”

                  </p>

                </div>

              </div>

            </div>

          </div>

        
          <div>

            <div className="bg-white rounded-[35px] p-8 shadow-xl">

              <h2 className="text-4xl font-black leading-tight">

                Redefining
                <span className="text-orange-500 block">
                  Vegetarian QSR.
                </span>

              </h2>

              <p className="mt-6 text-gray-500 leading-relaxed text-lg">

                Established in 2018 in Satna, Madhya Pradesh,
                SVS Foods is a pure vegetarian quick-service
                restaurant brand focused on speed,
                hygiene, innovation, and customer satisfaction.

              </p>

              <p className="mt-5 text-gray-500 leading-relaxed text-lg">

                From self-order kiosks to WhatsApp order tracking
                and smart kitchen systems, every part of
                the experience is designed for modern customers.

              </p>

              
              <div className="grid grid-cols-2 gap-5 mt-10">

                <div className="bg-[#fff7f2] rounded-3xl p-5">

                  <h3 className="text-4xl font-black text-orange-500">
                    1200+
                  </h3>

                  <p className="mt-2 text-gray-500 font-medium">
                    Weekend Orders
                  </p>

                </div>

                <div className="bg-[#fff7f2] rounded-3xl p-5">

                  <h3 className="text-4xl font-black text-orange-500">
                    3 Min
                  </h3>

                  <p className="mt-2 text-gray-500 font-medium">
                    Avg Prep Time
                  </p>

                </div>

                <div className="bg-[#fff7f2] rounded-3xl p-5">

                  <h3 className="text-4xl font-black text-orange-500">
                    94%
                  </h3>

                  <p className="mt-2 text-gray-500 font-medium">
                    Repeat Customers
                  </p>

                </div>

                <div className="bg-[#fff7f2] rounded-3xl p-5">

                  <h3 className="text-4xl font-black text-orange-500">
                    100%
                  </h3>

                  <p className="mt-2 text-gray-500 font-medium">
                    Pure Veg
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        
        <div className="mt-28">

          <div className="bg-black rounded-[45px] p-10 sm:p-16 relative overflow-hidden">

            
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-orange-500 opacity-20 blur-[120px] rounded-full"></div>

            <p className="uppercase tracking-[4px] text-orange-400 font-bold text-sm relative z-10">
              Our Vision
            </p>

            <h2 className="text-white text-[42px] sm:text-[70px] font-black leading-[0.95] mt-5 relative z-10">

              Building The
              <span className="text-orange-500 block">
                Future Of Veg QSR.
              </span>

            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mt-8 relative z-10">

              Our mission is to become the world’s
              largest pure vegetarian food chain by
              blending traditional purity with
              technology-driven customer experience,
              unmatched speed, and operational excellence.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutPage;