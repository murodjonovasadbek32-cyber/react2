import React from "react";
import foodgril from "../assets/intersect.svg";
const Header = () => {
  return (
    <header className="w-full bg-white">

      {/* NAVBAR */}
      <nav className="max-w-[1200px] mx-auto h-[90px] px-8 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-[24px] font-bold text-black">
          <span className="bg-[#39DB4A] text-white px-1.5 py-0.5 rounded-md mr-1">
            F
          </span>
          OODI
        </h1>

        {/* MENU */}
        <div className="flex items-center gap-12">
          <a
            href="#"
            className="text-[#39DB4A] font-semibold"
          >
            Home
          </a>

          <a
            href="#"
            className="text-black font-medium flex items-center gap-2"
          >
            Menu
            <span className="text-[#39DB4A]">⌄</span>
          </a>

          <a
            href="#"
            className="text-black font-medium flex items-center gap-2"
          >
            Services
            <span className="text-[#39DB4A]">⌄</span>
          </a>

          <a
            href="#"
            className="text-black font-medium"
          >
            Offers
          </a>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-8">

          {/* SEARCH */}
          <button className="text-2xl">
            ⌕
          </button>

          {/* CONTACT */}
          <button className="bg-[#39DB4A] text-white px-6 py-3 rounded-full flex items-center gap-2">
            <span>☎</span>
            Contact
          </button>

        </div>
      </nav>


      {/* HERO */}
      <section className="max-w-[1200px] mx-auto px-8 min-h-[550px] flex items-center justify-between">

        {/* LEFT */}
        <div className="w-[50%]">

          <h2 className="text-[55px] font-bold leading-[1.2] text-black">
            Dive into Delights
            <span className="block">
              Of Delectable{" "}
              <span className="text-[#39DB4A]">
                Food
              </span>
            </span>
          </h2>

          <p className="text-[#555555] text-lg leading-8 mt-8 max-w-[520px]">
            Where Each Plate Weaves a Story of Culinary
            <br />
            Mastery and Passionate Craftsmanship
          </p>

          {/* BUTTONS */}
          <div className="flex items-center gap-8 mt-10">

            <button className="bg-[#39DB4A] text-white px-8 py-4 rounded-full font-semibold shadow-lg">
              Order Now
            </button>

            <button className="font-semibold text-[#4D4D4D]">
              Watch Video
            </button>

            <button className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center bg-white text-xl">
              ▶
            </button>

          </div>
        </div>


        {/* RIGHT */}
        <div className="w-[50%] flex justify-center relative">

          {/* GREEN CIRCLE */}
          <div className="w-[430px] h-[430px] rounded-full bg-[#39DB4A] flex items-center justify-center">

            

              <img
                src={foodgril}
                alt="Food"
                className="w-[430px]"
              />
           

            <p className="text-white font-semibold">
            
            </p>

          </div>

          {/* HOT SPICY FOOD */}
          <div className="absolute top-[80px] left-[10px] bg-white px-5 py-3 rounded-full shadow-lg">
            <p className="text-[#FF6868] font-semibold text-sm">
              Hot spicy Food 🌶️
            </p>
          </div>

        </div>

      </section>

    </header>
  );
};

export default Header;