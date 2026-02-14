"use client";

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from '../../public/assests/logo.png';
import Image from "next/image";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      document.body.style.width = "100%";

      return () => {
        // Restore scroll position
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.overflow = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [open]);

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <div className="hidden lg:flex justify-between items-center">
        <div>
          <Image src={logo} alt="Logo" width={60} height={50} className="object-contain ml-4" />
        </div>

        <div className='flex justify-center gap-8 items-center mr-6'>
          {["Home", "Rooms", "Amenities", "Gallery", "Contact"].map((item) => (
            <h5
              key={item}
              className='font-semibold font-inter text-[20px] cursor-pointer duration-300 text-white hover:text-[#FEB420]'
            >
              {item}
            </h5>
          ))}

          <button className="font-semibold font-inter text-white bg-[#FEB420] cursor-pointer rounded-2xl ease-in hover:bg-transparent border-[#FEB420] hover:border-white duration-300 border py-2 px-2">
            Book Now
          </button>
        </div>
      </div>

      {/* ================= MOBILE TOP BAR ================= */}
      <div className="lg:hidden flex items-center justify-between px-6 py-4">
        <button onClick={() => setOpen(!open)} className="text-white z-50">
          <div className="relative w-7 h-7">
            <FiMenu
              className={`absolute inset-0 transition-all duration-300 text-[#FEB420] ${
                open ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
              }`}
              size={30}
            />
            <FiX
              className={`absolute inset-0 transition-all duration-300 text-[#FEB420] ${
                open ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
              }`}
              size={30}
            />
          </div>
        </button>
        <div>
          <Image src={logo} alt="Logo" width={50} height={50} className="object-contain" />
        </div>
      </div>

      {/* ================= MOBILE SLIDE NAV ================= */}
      <div
        className={`fixed top-0 left-0 h-screen w-[80%] max-w-sm bg-[#0F1115] z-40 transform transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 px-8 pt-24">
          {["Home", "Rooms", "Amenities", "Gallery", "Contact"].map((item) => (
            <h5
              key={item}
              onClick={() => setOpen(false)}
              className="font-semibold font-inter text-[16px] cursor-pointer text-white hover:text-[#FEB420] transition"
            >
              {item}
            </h5>
          ))}

          <button
            className="mt-6 font-semibold font-inter text-white bg-[#FEB420] rounded-2xl hover:bg-transparent border-[#FEB420] hover:border-white duration-300 border py-3"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* ================= OVERLAY ================= */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-30"
        />
      )}
    </>
  );
};

export default NavBar;
