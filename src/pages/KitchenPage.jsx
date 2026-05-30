import React from "react";
import KitchenDashboard from "../components/KitchenDashboard";

const KitchenPage = () => {
  return (
    <div className="bg-[#fff7f2] min-h-screen pt-36 overflow-hidden">

      
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-20">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          
          <div>

            <p className="uppercase tracking-[4px] text-orange-500 font-bold text-sm">
              Smart Restaurant Operations
            </p>

            <h1 className="mt-4 text-[50px] sm:text-[72px] font-black leading-[0.95]">

              Manage Your
              <span className="text-orange-500 block">
                Kitchen Live.
              </span>

            </h1>

            <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-xl">

              Real-time kitchen monitoring, smart order
              management, live cooking status, and analytics
              designed for modern food businesses.

            </p>

            
            <div className="mt-10 flex flex-wrap gap-4">

              <div className="bg-white px-5 py-4 rounded-2xl shadow-lg">

                <p className="text-gray-500 text-sm">
                  Active Orders
                </p>

                <h3 className="text-3xl font-black mt-1">
                  1200+
                </h3>

              </div>

              <div className="bg-white px-5 py-4 rounded-2xl shadow-lg">

                <p className="text-gray-500 text-sm">
                  Avg Delivery
                </p>

                <h3 className="text-3xl font-black mt-1 text-orange-500">
                  15 Min
                </h3>

              </div>

              <div className="bg-white px-5 py-4 rounded-2xl shadow-lg">

                <p className="text-gray-500 text-sm">
                  Success Rate
                </p>

                <h3 className="text-3xl font-black mt-1 text-green-500">
                  98%
                </h3>

              </div>

            </div>

          </div>

          
          <div className="relative flex justify-center">

            
            <div className="absolute w-[420px] h-[420px] rounded-full bg-orange-300 blur-[150px] opacity-30"></div>

           
            <div className="relative z-10 w-[360px] min-h-[500px] rounded-[42px] bg-black overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.25)] p-8 flex flex-col justify-between">

           
              <div className="flex items-start justify-between">

                <div>

                  <p className="text-orange-400 uppercase tracking-[4px] text-xs font-bold">
                    SVS Kitchen AI
                  </p>

                  <h3 className="text-white text-[42px] leading-[0.9] font-black mt-5">

                    Smart
                    <span className="block">
                      Operations
                    </span>

                  </h3>

                </div>

               
                <div className="flex items-center gap-2 bg-[#171717] px-4 py-3 rounded-full border border-[#222] shadow-lg">

                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

                  <span className="text-white text-sm font-bold">
                    Live
                  </span>

                </div>

              </div>

              
              <div className="mt-8 flex-1 flex flex-col justify-center">

                
                <div className="bg-[#111111] border border-[#222] rounded-[30px] p-5 shadow-2xl">

                
                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-gray-500 text-xs">
                        Current Queue
                      </p>

                      <h3 className="text-white text-3xl font-black mt-2">
                        24 Orders
                      </h3>

                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-2xl shadow-xl">

                      🍔

                    </div>

                  </div>

                  
                  <div className="mt-6">

                    <div className="flex items-center justify-between mb-2">

                      <p className="text-gray-400 text-sm">
                        Kitchen Efficiency
                      </p>

                      <p className="text-orange-400 text-sm font-bold">
                        92%
                      </p>

                    </div>

                    <div className="h-3 bg-[#1d1d1d] rounded-full overflow-hidden">

                      <div className="h-full w-[92%] bg-orange-500 rounded-full"></div>

                    </div>

                  </div>

                </div>

               
                <div className="grid grid-cols-2 gap-4 mt-5">

                  <div className="bg-[#111111] border border-[#222] rounded-2xl p-4">

                    <p className="text-gray-500 text-xs">
                      Preparing
                    </p>

                    <h4 className="text-white text-2xl font-black mt-2">
                      08
                    </h4>

                  </div>

                  <div className="bg-[#111111] border border-[#222] rounded-2xl p-4">

                    <p className="text-gray-500 text-xs">
                      Delivered
                    </p>

                    <h4 className="text-green-500 text-2xl font-black mt-2">
                      16
                    </h4>

                  </div>

                </div>

              </div>

              
              <div className="grid grid-cols-3 gap-3 mt-10">

                <div className="bg-[#151515] rounded-2xl p-4 border border-[#222]">

                  <p className="text-gray-500 text-xs">
                    Orders
                  </p>

                  <h4 className="text-white text-xl font-black mt-2">
                    1200+
                  </h4>

                </div>

                <div className="bg-[#151515] rounded-2xl p-4 border border-[#222]">

                  <p className="text-gray-500 text-xs">
                    Delivery
                  </p>

                  <h4 className="text-orange-500 text-xl font-black mt-2">
                    15 Min
                  </h4>

                </div>

                <div className="bg-[#151515] rounded-2xl p-4 border border-[#222]">

                  <p className="text-gray-500 text-xs">
                    Success
                  </p>

                  <h4 className="text-green-500 text-xl font-black mt-2">
                    98%
                  </h4>

                </div>

              </div>

              
              <div className="absolute -bottom-20 -right-20 w-[220px] h-[220px] bg-orange-500 opacity-20 blur-[120px] rounded-full"></div>

            </div>

          </div>

        </div>

      </div>

      <KitchenDashboard />

    </div>
  );
};

export default KitchenPage;