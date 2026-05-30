import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const menuData = {
  BURGERS: [
    {
      name: "Classic Burger",
      price: "₹149",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    },

    {
      name: "Cheese Burger",
      price: "₹179",
      image:
        "https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=1200&auto=format&fit=crop",
    },

    {
      name: "Paneer Burger",
      price: "₹199",
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop",
    },
  ],

  SIDES: [
    {
      name: "French Fries",
      price: "₹99",
      image:
        "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=1200&auto=format&fit=crop",
    },

    {
      name: "Cheese Fries",
      price: "₹129",
      image:
        "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=1200&auto=format&fit=crop",
    },
  ],

  BEVERAGES: [
    {
      name: "Cold Coffee",
      price: "₹89",
      image:
        "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop",
    },

    {
      name: "Chocolate Shake",
      price: "₹119",
      image:
        "https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=1200&auto=format&fit=crop",
    },
  ],

  "NAAN & ROLLS": [
    {
      name: "Paneer Roll",
      price: "₹149",
      image:
        "https://spicecravings.com/wp-content/uploads/2020/12/Paneer-kathi-Roll-Featured-1.jpg",
    },

    {
      name: "Veg Wrap",
      price: "₹129",
      image:
        "https://www.eatingwell.com/thmb/BKZhWx-_Xyo6MKrh3s_gi10DQ8w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4526733-45129f82ed554ea1be3ac980d096a6f1.jpg",
    },
  ],

  "TASTE MAKER DIPS": [
    {
      name: "Cheese Dip",
      price: "₹49",
      image:
        "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=1200&auto=format&fit=crop",
    },

    {
      name: "Spicy Mayo",
      price: "₹39",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZE0-43QyptpVnYobdR2JQyxnCGM3LEHIaNQ&s",
    },
  ],

  "PARTY COMBOS": [
    {
      name: "Family Combo",
      price: "₹599",
      image:
        "https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=1200&auto=format&fit=crop",
    },

    {
      name: "Mega Combo Meal",
      price: "₹799",
      image:
        "https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=1200&auto=format&fit=crop",
    },
  ],

  DESSERTS: [
    {
      name: "Cheese Cake",
      price: "₹159",
      image:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1200&auto=format&fit=crop",
    },

    {
      name: "Chocolate Brownie",
      price: "₹139",
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200&auto=format&fit=crop",
    },
  ],
};

const categories = Object.keys(menuData);

const SmartMenu = () => {
  const [activeCategory, setActiveCategory] = useState("BURGERS");

  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-24 bg-[#fff7f2] overflow-hidden">

      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-200 opacity-30 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-20 relative z-10">

        
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

          <div>

            <p className="uppercase tracking-[4px] text-orange-500 font-bold text-sm">
              Smart Menu Experience
            </p>

            <h2 className="mt-5 text-[42px] sm:text-[60px] leading-[1] font-black max-w-3xl">
              Crafted To Make
              <span className="text-orange-500 block">
                Ordering Addictive.
              </span>
            </h2>

          </div>

          
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">

            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`px-6 py-3 rounded-2xl whitespace-nowrap font-bold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-orange-500 text-white shadow-xl"
                    : "bg-white hover:bg-black hover:text-white"
                }`}
              >

                {category}

              </button>
            ))}

          </div>

        </div>

       
        <div className="flex justify-end gap-4 mt-10">

          <button
            onClick={scrollLeft}
            className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300"
          >

            <ChevronLeft size={24} />

          </button>

          <button
            onClick={scrollRight}
            className="w-14 h-14 rounded-2xl bg-orange-500 text-white shadow-lg flex items-center justify-center hover:bg-black transition-all duration-300"
          >

            <ChevronRight size={24} />

          </button>

        </div>

        
        <div
          ref={scrollRef}
          className="mt-10 flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-5"
        >

          {menuData[activeCategory].map(
            (item, index) => (
              <div
  key={index}
  className="group min-w-[300px] sm:min-w-[340px] bg-white rounded-[40px] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.07)] hover:-translate-y-4 hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)] transition-all duration-500 relative flex flex-col"
>

  <div className="relative h-[320px] overflow-hidden">

    <img
      src={item.image}
      alt={item.name}
      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
    />

   
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

    <div className="absolute top-5 right-5 bg-black text-white px-5 py-3 rounded-full text-xl font-black shadow-2xl">

      {item.price}

    </div>

    <div className="absolute top-5 left-5 bg-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold tracking-wide shadow-xl">

      BESTSELLER

    </div>

    <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">

      <div className="w-3 h-3 rounded-full bg-green-500"></div>

      <span className="text-sm font-bold">
        Pure Veg
      </span>

    </div>

  </div>

  <div className="p-7 flex flex-col flex-1">

    <div className="flex items-start justify-between gap-4">

      <div>

        <h3 className="text-[42px] font-black leading-[0.95] tracking-tight">

          {item.name}

        </h3>

        <p className="text-gray-500 mt-3 font-medium">
          Premium Veg Delight
        </p>

      </div>

    </div>

   
    <div className="flex flex-wrap items-center gap-3 mt-6">

      <div className="bg-[#fff7f2] px-4 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-sm">

        ⭐ 4.9

      </div>

      
      <div className="bg-[#fff7f2] px-4 py-3 rounded-2xl font-bold shadow-sm">

        ⚡ 15 Min

      </div>

      
      <div className="bg-[#fff7f2] px-4 py-3 rounded-2xl font-bold shadow-sm">

        🔥 420 Cal

      </div>

    </div>

    <button className="mt-auto pt-7 w-full bg-orange-500 hover:bg-black text-white py-5 rounded-[22px] text-2xl font-black transition-all duration-300 shadow-xl hover:scale-[1.02]">

      Add To Cart →

    </button>

  </div>

</div>
            )
          )}

        </div>

      </div>

    </section>
  );
};

export default SmartMenu;