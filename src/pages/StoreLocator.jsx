import React, { useState } from "react";
import { MapPin, Search, Clock3 } from "lucide-react";

const stores = [
  {
    city: "Satna",
    area: "Rewa Road, Satna",
    time: "15-20 Min",
    status: "Open",
  },

  {
    city: "Jabalpur",
    area: "Narmada Road, Jabalpur",
    time: "20-25 Min",
    status: "Open",
  },

  {
    city: "Jabalpur",
    area: "Civic Center, Jabalpur",
    time: "25-30 Min",
    status: "Busy",
  },
];

const StoreLocator = () => {
  const [search, setSearch] = useState("");

  const filteredStores = stores.filter((store) =>
    `${store.city} ${store.area}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-[#fff7f2] pt-36 pb-24 overflow-hidden">

      
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-200 opacity-30 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-20 relative z-10">

        
        <div className="text-center">

          <p className="uppercase tracking-[4px] text-orange-500 font-bold text-sm">
            Find Nearby Stores
          </p>

          <h1 className="mt-5 text-[50px] sm:text-[75px] leading-[0.95] font-black">

            Store
            <span className="text-orange-500 block">
              Locator.
            </span>

          </h1>

          <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-500 leading-relaxed">

            Discover nearby SVS Foods outlets,
            estimated delivery time,
            and live store availability.

          </p>

        </div>

       
        <div className="max-w-2xl mx-auto mt-14">

          <div className="bg-white rounded-[30px] shadow-xl flex items-center px-6 py-5 gap-4">

            <Search className="text-orange-500" size={28} />

            <input
              type="text"
              placeholder="Search your city or area..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent outline-none text-lg font-medium"
            />

          </div>

        </div>

     
        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {filteredStores.map((store, index) => (
            <div
              key={index}
              className="bg-white rounded-[35px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.07)] hover:-translate-y-2 transition-all duration-500"
            >

          
              <div className="flex items-start justify-between">

                <div>

                  <h3 className="text-4xl font-black">
                    {store.city}
                  </h3>

                  <div className="flex items-center gap-2 mt-4 text-gray-500">

                    <MapPin size={18} />

                    <p className="font-medium">
                      {store.area}
                    </p>

                  </div>

                </div>

              
                <div
                  className={`px-5 py-3 rounded-full text-sm font-bold ${
                    store.status === "Open"
                      ? "bg-green-100 text-green-700"
                      : "bg-orange-100 text-orange-700"
                  }`}
                >

                  {store.status}

                </div>

              </div>

              <div className="mt-8 flex items-center justify-between bg-[#fff7f2] rounded-3xl p-5">

                <div className="flex items-center gap-3">

                  <Clock3
                    size={22}
                    className="text-orange-500"
                  />

                  <div>

                    <p className="text-sm text-gray-500">
                      Estimated Delivery
                    </p>

                    <h4 className="text-2xl font-black mt-1">
                      {store.time}
                    </h4>

                  </div>

                </div>

                <button className="bg-orange-500 hover:bg-black text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300">

                  Order Now

                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default StoreLocator;