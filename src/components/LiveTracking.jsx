import React from "react";
import {
  Clock3,
  ChefHat,
  Bike,
  CheckCircle2,
} from "lucide-react";

const trackingSteps = [
  {
    icon: <CheckCircle2 size={22} />,
    title: "Order Confirmed",
    time: "12:05 PM",
    active: true,
  },

  {
    icon: <ChefHat size={22} />,
    title: "Preparing Food",
    time: "12:08 PM",
    active: true,
  },

  {
    icon: <Bike size={22} />,
    title: "Out For Delivery",
    time: "12:15 PM",
    active: true,
  },

  {
    icon: <Clock3 size={22} />,
    title: "Arriving Soon",
    time: "12:24 PM",
    active: false,
  },
];

const LiveTracking = () => {
  return (
    <section className="relative py-28 bg-[#f8efe8] overflow-hidden">

      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-200 opacity-30 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-20 relative z-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

         
          <div>

            <p className="uppercase tracking-[4px] text-orange-500 font-bold text-sm">
              Live Tracking Experience
            </p>

            <h2 className="mt-5 text-[50px] sm:text-[70px] leading-[0.95] font-black">
              Real-Time
              <span className="text-orange-500 block">
                Order Tracking.
              </span>
            </h2>

            <p className="mt-8 text-lg text-gray-500 leading-relaxed max-w-xl">
              Track your food live from kitchen to doorstep with
              lightning-fast updates, real-time delivery progress,
              and seamless customer experience.
            </p>

            
            <div className="mt-12 relative">

           
              <div className="absolute left-[26px] top-5 w-[3px] h-[85%] bg-orange-200 rounded-full"></div>

              <div className="flex flex-col gap-8">

                {trackingSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex gap-5 items-start relative"
                  >

                   
                    <div
                      className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl ${
                        step.active
                          ? "bg-orange-500 text-white"
                          : "bg-white text-gray-400"
                      }`}
                    >

                      {step.icon}

                    </div>

                    
                    <div>

                      <h3 className="text-2xl font-black">
                        {step.title}
                      </h3>

                      <p className="text-gray-500 mt-1 font-medium">
                        {step.time}
                      </p>

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

          
          <div className="relative flex justify-center">

            
            <div className="relative w-[340px] h-[680px] bg-black rounded-[50px] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.2)]">

              
              <div className="w-full h-full bg-[#fff7f2] rounded-[40px] overflow-hidden relative">

                
                <div className="relative z-10 p-6">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-gray-500 text-sm">
                        Delivery ETA
                      </p>

                      <h3 className="text-5xl font-black mt-1">
                        12 Min
                      </h3>

                    </div>

                    <div className="w-16 h-16 rounded-3xl bg-orange-300 flex items-center justify-center shadow-xl">

                      🛵

                    </div>

                  </div>

                </div>

                
                <div className="relative mx-5 mt-2 h-[540px] rounded-[36px] overflow-hidden bg-[#f4ebe4] border border-orange-100">

              
                  <div className="absolute inset-0 opacity-30">

                    <div className="absolute top-12 left-0 w-full h-[2px] bg-orange-100"></div>
                    <div className="absolute top-28 left-0 w-full h-[2px] bg-orange-100"></div>
                    <div className="absolute top-44 left-0 w-full h-[2px] bg-orange-100"></div>
                    <div className="absolute top-60 left-0 w-full h-[2px] bg-orange-100"></div>
                    <div className="absolute top-76 left-0 w-full h-[2px] bg-orange-100"></div>

                    <div className="absolute left-12 top-0 w-[2px] h-full bg-orange-100"></div>
                    <div className="absolute left-32 top-0 w-[2px] h-full bg-orange-100"></div>
                    <div className="absolute left-56 top-0 w-[2px] h-full bg-orange-100"></div>

                  </div>

                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 350 520"
                    fill="none"
                  >

                    <path
                      d="M50 430 C90 360 130 300 190 250 C240 210 260 170 290 130"
                      stroke="#ff7a00"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray="14 14"
                      opacity="0.4"
                    />

                  </svg>

                
                  <div className="absolute left-8 bottom-24 w-6 h-6 rounded-full bg-orange-500 shadow-[0_0_25px_rgba(255,115,0,0.8)]"></div>

                  
                  <div className="absolute right-5 top-24 z-20">

                    <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center shadow-2xl text-2xl">

                      📍

                    </div>

                  </div>

                  
                  <div className="absolute swiggy-rider">

                    <div className="relative">

                      <div className="absolute inset-0 bg-orange-400 blur-xl opacity-40 rounded-full"></div>

                      <div className="relative text-4xl">
                        🛵
                      </div>

                    </div>

                  </div>

                  
                  <div className="absolute left-4 top-4 bg-white rounded-2xl px-4 py-3 shadow-xl z-20">

                    <p className="text-gray-500 text-xs">
                      Estimated Arrival
                    </p>

                    <h3 className="text-2xl font-black mt-1">
                      12 Min ⚡
                    </h3>

                  </div>

                  
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[88%] bg-white rounded-[30px] p-5 shadow-2xl z-20">

                    <div className="flex items-center gap-4">

                      <img
                        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop"
                        alt="burger"
                        className="w-20 h-20 rounded-2xl object-cover"
                      />

                      <div className="flex-1">

                        <p className="text-orange-500 font-bold text-sm">
                          OUT FOR DELIVERY
                        </p>

                        <h3 className="text-3xl font-black mt-2 leading-tight">
                          Cheese Burger
                        </h3>

                        <p className="text-gray-500 mt-1">
                          Arriving at Teen Patti, Jabalpur, India
                        </p>

                      </div>

                      <div className="w-16 h-16 rounded-2xl bg-orange-500 text-white flex items-center justify-center text-2xl shadow-xl">

                        🍔

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          
            <div className="hidden sm:block absolute -left-8 top-16 bg-white rounded-[28px] p-5 shadow-2xl">

              <p className="text-gray-500 text-sm">
                Customer Rating
              </p>

              <h3 className="text-4xl font-black mt-2">
                4.9 ⭐
              </h3>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default LiveTracking;