import React from "react";
import LiveTracking from "../components/LiveTracking";

const TrackingPage = () => {
  return (
    <div className="bg-[#f8efe8] min-h-screen pt-36 overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          
          <div>

            <p className="uppercase tracking-[4px] text-orange-500 font-bold text-sm">
              Real-Time Delivery
            </p>

            <h1 className="mt-4 text-[50px] sm:text-[70px] font-black leading-[1]">
              Track Your
              <span className="text-orange-500 block">
                Order Live.
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-xl">
              Experience lightning-fast live tracking with
              real-time order updates, delivery progress,
              and accurate ETA notifications powered by
              SVS Foods technology.
            </p>

            
            <div className="flex flex-wrap gap-6 mt-10">

              <div className="bg-white rounded-[28px] px-6 py-5 shadow-lg">

                <p className="text-gray-500 text-sm">
                  Avg Delivery
                </p>

                <h3 className="text-3xl font-black mt-2">
                  15 Min ⚡
                </h3>

              </div>

              <div className="bg-white rounded-[28px] px-6 py-5 shadow-lg">

                <p className="text-gray-500 text-sm">
                  Live Orders
                </p>

                <h3 className="text-3xl font-black mt-2">
                  1200+
                </h3>

              </div>

            </div>

          </div>

          
          <div className="relative flex justify-center">

            <div className="w-[320px] h-[320px] rounded-full bg-orange-200 blur-[120px] opacity-50 absolute"></div>

            <div className="relative z-10 w-[350px] h-[350px] rounded-full bg-orange-500 shadow-[0_30px_100px_rgba(255,115,0,0.35)] flex items-center justify-center text-[120px]">

              🛵

            </div>

          </div>

        </div>

      </div>

      
      <LiveTracking />

    </div>
  );
};

export default TrackingPage;