import React from "react";
import SmartMenu from "../components/SmartMenu";
import OffersSlider from "../components/OffersSlider";

const MenuPage = () => {
  return (
    <div className="bg-[#fff7f2] min-h-screen pt-36 overflow-hidden">

      
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-20">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          
          <div>

            <p className="uppercase tracking-[4px] text-orange-500 font-bold text-sm">
              Explore Menu
            </p>

            <h1 className="mt-4 text-[50px] sm:text-[70px] font-black leading-[1]">
              Crafted For
              <span className="text-orange-500 block">
                Food Lovers.
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-500 max-w-xl leading-relaxed">
              Discover premium handcrafted burgers, loaded fries,
              refreshing beverages, and irresistible desserts
              crafted for unforgettable cravings.
            </p>

          </div>

        
          <OffersSlider />

        </div>

      </div>

     
      <SmartMenu />

    </div>
  );
};

export default MenuPage;