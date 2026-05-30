import React from "react";
import {
  Flame,
  Clock3,
  CheckCircle2,
  Wallet,
} from "lucide-react";

const orders = [
  {
    id: "#102",
    item: "Cheese Burger Combo",
    status: "Preparing",
    color: "bg-orange-500",
  },

  {
    id: "#103",
    item: "Loaded Fries",
    status: "Ready",
    color: "bg-green-500",
  },

  {
    id: "#104",
    item: "Cold Coffee",
    status: "Pending",
    color: "bg-yellow-500",
  },

  {
    id: "#105",
    item: "Veg Wrap",
    status: "Delivered",
    color: "bg-black",
  },
];

const stats = [
  {
    icon: <Flame size={26} />,
    title: "Orders Today",
    value: "1200+",
  },

  {
    icon: <Clock3 size={26} />,
    title: "Avg Delivery",
    value: "15 Min",
  },

  {
    icon: <CheckCircle2 size={26} />,
    title: "Success Rate",
    value: "98%",
  },

  {
  icon: <Wallet size={26} />,
  title: "Orders In Queue",
  value: "32",
},
];


const customerQueue = {
  yourOrder: "#102",
  currentPreparing: "#096",
  queuePosition: 8,
  estimatedWait: "4 Min",
};

const KitchenDashboard = () => {
  return (
    <section className="relative py-28 bg-[#fff7f2] overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-200 opacity-30 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-20 relative z-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

        
          <div>

            <p className="uppercase tracking-[4px] text-orange-500 font-bold text-sm">
              Kitchen Control Center
            </p>

            <h2 className="mt-5 text-[50px] sm:text-[70px] leading-[0.95] font-black">
              Smart Kitchen
              <span className="text-orange-500 block">
                Dashboard.
              </span>
            </h2>

            <p className="mt-8 text-lg text-gray-500 leading-relaxed max-w-xl">
              Monitor orders, manage kitchen operations,
              track deliveries, and optimize restaurant
              performance in real-time with SVS Foods'
              intelligent kitchen ecosystem.
            </p>

          
            <div className="grid grid-cols-2 gap-5 mt-12">

              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[30px] p-6 shadow-xl hover:-translate-y-2 transition-all duration-300"
                >

                  <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-lg">

                    {stat.icon}

                  </div>

                  <h3 className="text-4xl font-black mt-5">
                    {stat.value}
                  </h3>

                  <p className="text-gray-500 mt-2 font-medium">
                    {stat.title}
                  </p>

                </div>
              ))}

            </div>

          </div>

         
          <div className="relative">

            <div className="bg-black rounded-[40px] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.25)] overflow-hidden">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-orange-400 uppercase tracking-[3px] text-xs font-bold">
                    LIVE KITCHEN
                  </p>

                  <h3 className="text-white text-4xl font-black mt-2">
                    Active Orders
                  </h3>

                </div>

                <div className="flex items-center gap-2 bg-[#1b1b1b] px-4 py-3 rounded-full">

                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

                  <span className="text-white text-sm font-bold">
                    Live
                  </span>

                </div>

              </div>

              <div className="mt-8 flex flex-col gap-5">

                {orders.map((order, index) => (
                  <div
                    key={index}
                    className="bg-[#111111] border border-[#222] rounded-[28px] p-5 hover:border-orange-500 transition-all duration-300"
                  >

                    <div className="flex items-center justify-between">

                      <div>

                        <p className="text-gray-500 text-sm">
                          Order {order.id}
                        </p>

                        <h3 className="text-white text-2xl font-black mt-2">
                          {order.item}
                        </h3>

                      </div>

                      <div
                        className={`px-5 py-3 rounded-full text-white text-sm font-bold ${order.color}`}
                      >

                        {order.status}

                      </div>

                    </div>

                    <div className="mt-5 h-3 bg-[#1f1f1f] rounded-full overflow-hidden">

                      <div
                        className={`h-full rounded-full ${order.color} ${
                          order.status === "Preparing"
                            ? "w-[65%]"
                            : order.status === "Ready"
                            ? "w-[90%]"
                            : order.status === "Pending"
                            ? "w-[30%]"
                            : "w-full"
                        }`}
                      ></div>

                    </div>

                  </div>
                ))}

              </div>

              
              <div className="mt-8 bg-[#111111] rounded-[30px] p-6 border border-[#222] relative overflow-hidden">

                
                <div className="absolute top-0 right-0 w-[140px] h-[140px] bg-orange-500 opacity-10 blur-[70px] rounded-full"></div>

                
                <div className="flex items-center justify-between relative z-10">

                  <div>

                    <p className="text-orange-400 uppercase tracking-[3px] text-xs font-bold">
                      LIVE CUSTOMER STATUS
                    </p>

                    <h3 className="text-white text-3xl font-black mt-3">
                      Your Order Queue
                    </h3>

                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-3xl shadow-xl">

                    🍔

                  </div>

                </div>

                <div className="grid grid-cols-2 gap-4 mt-8 relative z-10">

            
                  <div className="bg-[#181818] rounded-2xl p-5 border border-[#2a2a2a]">

                    <p className="text-gray-500 text-sm">
                      Your Order
                    </p>

                    <h4 className="text-white text-3xl font-black mt-2">
                      {customerQueue.yourOrder}
                    </h4>

                  </div>

                  
                  <div className="bg-[#181818] rounded-2xl p-5 border border-[#2a2a2a]">

                    <p className="text-gray-500 text-sm">
                      Preparing Now
                    </p>

                    <h4 className="text-orange-500 text-3xl font-black mt-2">
                      {customerQueue.currentPreparing}
                    </h4>

                  </div>

                  
                  <div className="bg-[#181818] rounded-2xl p-5 border border-[#2a2a2a]">

                    <p className="text-gray-500 text-sm">
                      Queue Position
                    </p>

                    <h4 className="text-white text-3xl font-black mt-2">
                      #{customerQueue.queuePosition}
                    </h4>

                  </div>

                  
                  <div className="bg-[#181818] rounded-2xl p-5 border border-[#2a2a2a]">

                    <p className="text-gray-500 text-sm">
                      Estimated Start
                    </p>

                    <h4 className="text-green-500 text-3xl font-black mt-2">
                      {customerQueue.estimatedWait}
                    </h4>

                  </div>

                </div>

                
                <div className="mt-8 relative z-10">

                  <div className="flex items-center justify-between mb-3">

                    <p className="text-gray-400 text-sm">
                      Queue Progress
                    </p>

                    <p className="text-orange-400 text-sm font-bold">
                      72%
                    </p>

                  </div>

                  <div className="h-4 bg-[#1d1d1d] rounded-full overflow-hidden">

                    <div className="h-full w-[72%] bg-orange-500 rounded-full relative">

                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default KitchenDashboard;