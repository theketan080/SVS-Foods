import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronRight,
  User,
} from "lucide-react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    if (mobileMenu) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [mobileMenu]);

  const navLinks = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "Menu",
    path: "/menu",
  },

  {
    name: "Tracking",
    path: "/tracking",
  },

  {
    name: "Kitchen",
    path: "/kitchen",
  },

  {
    name: "About",
    path: "/about",
  },
  {
  name: "Stores",
  path: "/store-locator",
},
];

  return (
    <>
      
      <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 pt-5">

        <div className="max-w-7xl mx-auto">

        
          <div className="backdrop-blur-2xl bg-white/50 border border-white/40 shadow-[0_10px_50px_rgba(0,0,0,0.08)] rounded-[28px] px-5 sm:px-8 py-4 flex items-center justify-between">

            
            <div className="flex items-center gap-4">

  
  <div className="w-14 h-14 rounded-2xl bg-orange-500 shadow-xl overflow-hidden flex items-center justify-center p-2">

    <img
      src="/src/assets/logo.png"
      alt="SVS Logo"
      className="w-full h-full object-contain"
    />

  </div>

  
  <div>

    <h1 className="text-2xl sm:text-3xl font-black tracking-tight leading-none">

      <span className="text-orange-500">
        SVS FOODS
      </span>

    </h1>

    <p className="text-[10px] uppercase tracking-[4px] text-gray-500 mt-1">
      Premium QSR
    </p>

  </div>

</div>

            
            <div className="hidden lg:flex items-center gap-10">

              {navLinks.map((item, index) => (
  <Link
    key={index}
    to={item.path}
    className="relative font-semibold text-[15px] hover:text-orange-500 transition group"
  >

    {item.name}

    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>

  </Link>
))}

            </div>

            
            <div className="hidden lg:flex items-center gap-4">

              <button className="px-6 py-3 rounded-2xl font-bold border border-black/10 hover:bg-white transition-all duration-300">
                Login
              </button>

              
              <button className="bg-orange-500 hover:bg-black hover:scale-105 transition-all duration-300 text-white px-6 py-3 rounded-2xl font-bold shadow-xl">
                Sign Up
              </button>

            </div>

          
            <button
              onClick={() => setMobileMenu(true)}
              className="lg:hidden w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center active:scale-95 transition"
            >

              <Menu size={24} />

            </button>

          </div>

        </div>

      </nav>

      
      <div
        onClick={() => setMobileMenu(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] transition duration-500 ${
          mobileMenu
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      
      <div
        className={`fixed top-0 right-0 h-[100dvh] overflow-y-auto w-[300px] bg-[#f8efe8]/95 backdrop-blur-3xl border-l border-white/40 shadow-[0_20px_80px_rgba(0,0,0,0.15)] z-[100] transition-all duration-500 flex flex-col ${
          mobileMenu
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        
        <div className="p-5 flex items-center justify-between border-b border-black/5">

          <div>
            <h2 className="text-2xl font-black">
              SVS <span className="text-orange-500">FOODS</span>
            </h2>

            <p className="text-[10px] uppercase tracking-[4px] text-gray-500 mt-1">
              Premium QSR
            </p>
          </div>

          <button
            onClick={() => setMobileMenu(false)}
            className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center active:scale-95 transition"
          >

            <X size={24} />

          </button>

        </div>

        
        <div className="p-5 flex flex-col gap-3">

          {navLinks.map((item, index) => (
  <Link
    key={index}
    to={item.path}
    onClick={() => setMobileMenu(false)}
    className="group w-full bg-white/90 hover:bg-orange-500 text-black hover:text-white transition-all duration-300 rounded-[24px] px-5 py-4 flex items-center justify-between shadow-md hover:shadow-orange-200 active:scale-[0.98]"
  >

    <span className="text-lg font-bold">
      {item.name}
    </span>

    <ChevronRight
      size={18}
      className="group-hover:translate-x-1 transition"
    />

  </Link>
))}

        </div>

        <div className="px-5 flex flex-col gap-3 mt-1">

        
          <button className="w-full py-4 rounded-[22px] bg-white shadow-md font-bold text-lg border border-black/5 hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-3">

            <User size={18} />

            Login

          </button>

        
          <button className="w-full py-4 rounded-[22px] bg-orange-500 text-white font-bold text-lg shadow-xl hover:bg-black transition-all duration-300">

            Sign Up →

          </button>

        </div>

        
        <div className="px-5 mt-5">

          <div className="bg-black rounded-[28px] p-5 text-white relative overflow-hidden">

            
            <div className="absolute w-[100px] h-[100px] bg-orange-500/30 blur-[60px] rounded-full top-[-20px] right-[-20px]"></div>

            <p className="text-[10px] uppercase tracking-[4px] text-white/50 relative z-10">
              Fast Delivery
            </p>

            <h3 className="text-3xl font-black mt-3 leading-tight relative z-10">
              Food In
              <br />
              15 Mins ⚡
            </h3>

            <button className="w-full mt-5 bg-orange-500 hover:bg-orange-400 transition rounded-2xl py-4 font-bold text-lg relative z-10 active:scale-[0.98]">

              Order Now →

            </button>

          </div>

        </div>

        
        <div className="mt-auto px-5 pb-6 pt-5">

          <div className="flex items-center justify-between text-sm text-gray-500">

            <span>
              © SVS Foods
            </span>

            <span>
              v1.0
            </span>

          </div>

        </div>

      </div>
    </>
  );
};

export default Navbar;