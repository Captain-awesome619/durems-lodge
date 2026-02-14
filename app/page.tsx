'use client'
import React from "react";
import Image from "next/image";
import NavBar from "./components/NavBar";
import comfort from '../public/assests/dorembg.jpg'
import line from '../public/assests/line.svg'
import home from '../public/assests/home.svg'
import car from '../public/assests/car.svg'
import laundry from '../public/assests/laundry.svg'
import material from '../public/assests/material.svg'
import wifi from '../public/assests/wifi.svg'
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { IoMdStar } from "react-icons/io";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./components/Footer";

export default function Home() {

const container = useRef(null);
const lodgeRef = useRef(null);
const homeAwayRef = useRef(null);
const viewRoomsRef = useRef(null);
const bookStayRef = useRef(null);
const dividerRef = useRef(null);
const experienceRef = useRef(null);
const bgImageRef = useRef(null);
const deluxeRef = useRef(null);
const executiveRef = useRef(null);
const standardRef = useRef(null);
const roomsSectionRef = useRef(null);
const amenitiesRef = useRef<HTMLDivElement>(null);
const testimonialRef = useRef<HTMLDivElement>(null);
const quoteRef = useRef<HTMLHeadingElement>(null);
const starsRef = useRef<HTMLDivElement>(null);

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

useGSAP(() => {
  /* =========================
     INITIAL STATES (SCROLL SECTIONS ONLY)
  ========================== */

  // Divider + experience text (scroll section)
  gsap.set([dividerRef.current, experienceRef.current], {
    opacity: 0,
    y: 50,
    willChange: "transform, opacity",
  });

  // Background image div (scroll section)
  gsap.set(bgImageRef.current, {
    x: 120,
    opacity: 0,
    willChange: "transform, opacity",
  });

  /* =========================
     HERO SECTION TIMELINE
     ✅ Plays immediately
     ✅ No flash (CSS controls initial opacity)
  ========================== */

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.fromTo(
    lodgeRef.current,
    { y: -120, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.5 }
  )
    .fromTo(
      homeAwayRef.current,
      { y: 120, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5 },
      "-=1.2"
    )
    .fromTo(
      viewRoomsRef.current,
      { x: -120, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.9, ease: "back.out(1.4)" },
      "-=0.8"
    )
    .fromTo(
      bookStayRef.current,
      { x: 120, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.9, ease: "back.out(1.4)" },
      "-=0.85"
    );

  /* =========================
     BACKGROUND IMAGE (SCROLL)
  ========================== */

  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: bgImageRef.current,
      start: "top 90%",
      toggleActions: "play none none none",
    },
  });

  tl3.to(bgImageRef.current, {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
  });

  /* =========================
     DIVIDER + EXPERIENCE TEXT (SCROLL)
  ========================== */

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: dividerRef.current,
      start: "top 90%",
      toggleActions: "play none none none",
    },
  });

  tl2
    .to(dividerRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power2.out",
    })
    .to(
      experienceRef.current,
      { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
      "-=0.3"
    );

  /* =========================
     ROOMS CARDS (SCROLL)
  ========================== */

  const rooms = [
    { ref: deluxeRef, from: { x: -120 } },    // slide in from left
    { ref: executiveRef, from: { y: 120 } },  // slide in from bottom
    { ref: standardRef, from: { x: 120 } },   // slide in from right
  ];

  rooms.forEach(({ ref, from }) => {
    if (ref.current) {
      gsap.set(ref.current, { ...from, opacity: 0, willChange: "transform, opacity" });

      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  });

  /* =========================
     AMENITIES ANIMATION (Individual children)
  ========================== */

  if (amenitiesRef.current) {
    const children = amenitiesRef.current.children; // HTMLCollection of all child divs
    gsap.set(children, { y: 50, opacity: 0, willChange: "transform, opacity" });

    Array.from(children).forEach((child, index) => {
      gsap.to(child, {
        scrollTrigger: {
          trigger: child,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        delay: index * 0.1, // small stagger for sequential effect
      });
    });
  }

  /* =========================
     TESTIMONIAL ANIMATION (Quote + Stars)
  ========================== */

  if (testimonialRef.current && quoteRef.current && starsRef.current) {
    gsap.set([quoteRef.current, starsRef.current], {
      y: 50,
      opacity: 0,
      willChange: "transform, opacity",
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: testimonialRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    })
      .to(quoteRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      })
      .to(
        starsRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.3" // slight overlap for smooth sequence
      );
  }

}, { scope: container });







  return (
    <div className="bg-[#0F1115]  min-h-screen overflow-x-hidden  w-screen flex flex-col   gap-15 pb-4">

     <div className=" min-h-screen   bg-cover  bg-no-repeat lg:bg-center bg-center"
      style={{ backgroundImage: "url('/assests/rec.svg')" }}
     >
      <div className="  pt-3">
      <NavBar />
      </div>
      <div
  ref={container}
  className="flex flex-col items-center lg:justify-center h-full lg:gap-5 gap-8 lg:pt-[18%] pt-[55%]"
>
  <h3
    ref={lodgeRef}
    className="font-bold text-white font-inknut lg:text-[70px] text-[40px] opacity-0"
  >
    Durem Lodge
  </h3>

  <div className="flex flex-col lg:gap-4 gap-6">
    <h4
      ref={homeAwayRef}
      className="lg:text-[35px] text-[22px] font-semibold font-inter text-white opacity-0"
    >
      A Home Away From Home
    </h4>

    <div className="flex items-center justify-center gap-4">
      <button
        ref={viewRoomsRef}
        className="font-semibold font-inter text-white bg-[#FEB420] rounded-2xl border py-2 px-3 opacity-0"
      >
        View Rooms
      </button>

      <button
        ref={bookStayRef}
        className="font-semibold font-inter text-white bg-transparent border-white border py-2 px-3 rounded-2xl opacity-0"
      >
        Book A Stay
      </button>
    </div>
  </div>
</div>


     </div>
     
     <div className="flex items-center justify-center lg:gap-4 lg:px-5">
      <div className="flex flex-col justify-center items-center gap-6">
<h3  ref={experienceRef} className="lg:font-normal italic font-inter text-[16px] lg:text-[22px] text-white w-[95%] lg:w-[99%] text-center ">
Experience refined comfort, privacy, and personalized hospitality in the heart of Ogbomoso.
</h3>
<div  ref={dividerRef} className="flex items-center justify-center">
<div className=" h-[0.5px]  lg:w-66 w-40 bg-[#FEB420] "></div>
<div className=" w-3 h-3 rounded-[50%] bg-[#FEB420]"></div>
<div className=" h-[0.5px] lg:w-66 w-40 bg-[#FEB420] "></div>
</div>
</div>
  <div   ref={bgImageRef} className="lg:w-200 lg:h-100 bg-black  flex-col gap-3 rounded-3xl hidden lg:flex ">
<div
className=" bg-cover  bg-no-repeat lg:bg-center bg-center h-full rounded-2xl "
 style={{ backgroundImage: "url('/assests/dorembg.jpg')" }}
 
>
</div>

  </div>
     </div>

<div className="flex flex-col gap-12 items-center justify-center  border-t border-gray-500 py-4 border-b ">
<div className="flex flex-col items-center justify-center gap-5 ">
<div className="flex items-center justify-center gap-2  pb-2"> 
<div className=" h-[0.5px]  lg:w-150 w-35 bg-[#FEB420] "></div>

<h3 className="font-bold text-white font-inter text-[15px]  lg:text-[22px]">
  Our Rooms
</h3>

<div className=" h-[0.5px]  lg:w-150 w-35 bg-[#FEB420] "></div>
</div>


<div className="flex lg:flex-row flex-col items-center justify-center lg:gap-10 gap-4 "   ref={roomsSectionRef}>

  <div className="lg:w-100 lg:h-95 h-95 w-95 bg-black flex flex-col gap-3 rounded-3xl "   ref={deluxeRef}>
<div
className=" bg-cover  bg-no-repeat lg:bg-center bg-center h-full rounded-2xl "
 style={{ backgroundImage: "url('/assests/dorembg.jpg')" }}
>
</div>
<div className="flex flex-col gap-2 items-center pb-3 justify-center">
<h4 className="font-inter font-semibold text-white lg:text-[20px] ">
  Deluxe Suite
</h4>
<button className="px-3 py-2 border border-gray-500 cursor-pointer rounded-md text-white font-inter font-semibold hover:bg-[#FEB420]  hover:text-black duration-300 hover:border-[#FEB420]">
View Details
</button>
</div>
  </div>
  
  <div className="lg:w-100 lg:h-95  h-95 w-95 bg-black flex flex-col gap-3 rounded-3xl "   ref={executiveRef}>
<div
className=" bg-cover  bg-no-repeat lg:bg-center bg-center h-full rounded-2xl "
 style={{ backgroundImage: "url('/assests/presi.jpg')" }}
>
</div>
<div className="flex flex-col gap-2 items-center justify-center pb-3">
<h4 className="font-inter font-semibold text-white lg:text-[20px] ">
  Executive Suite
</h4>
<button className="px-3 py-2 border border-gray-500 cursor-pointer rounded-md text-white font-inter font-semibold hover:bg-[#FEB420]  hover:text-black duration-300 hover:border-[#FEB420]">
View Details
</button>
</div>
  </div>

  <div className="lg:w-100 lg:h-95  h-95 w-95 bg-black flex flex-col gap-3 rounded-3xl " ref={standardRef}>
<div
className=" bg-cover  bg-no-repeat lg:bg-center bg-center h-full rounded-2xl "
 style={{ backgroundImage: "url('/assests/comfort.jpg')" }}
>
</div>
<div className="flex flex-col gap-2 items-center justify-center pb-3">
<h4 className="font-inter font-semibold text-white lg:text-[20px] ">
  Standard Suite
</h4>
<button className="px-3 py-2 border border-gray-500 cursor-pointer rounded-md text-white font-inter font-semibold hover:bg-[#FEB420]  hover:text-black duration-300 hover:border-[#FEB420]">
View Details
</button>
</div>
  </div>

</div>
</div>

<div className="flex flex-col gap-4 items-center justify-center">
<div className="flex items-center justify-center gap-2 pb-2"> 
<div className=" h-[0.5px]  lg:w-145 w-33 bg-[#FEB420] "></div>

<h3 className="font-bold text-white font-inter text-[15px]  lg:text-[22px]">
  Our Amenities
</h3>

<div className=" h-[0.5px]  lg:w-145 w-33 bg-[#FEB420] "></div>
</div>
<div className="flex lg:flex-row flex-col  items-center gap-8 justify-center lg:gap-32 "   ref={amenitiesRef}>
<div className="opacity-0 flex flex-col items-center justify-center gap-1 lg:gap-0">
  <Image src={home} alt="home" width={50} height={50} className="lg:h-auto lg:w-auto w-12" />
  <h5 className="text-white font-inter font-semibold text-[15px]">Resturant & Bar</h5>
</div>

<div className="opacity-0 flex flex-col items-center justify-center gap-1 lg:gap-0">
  <Image src={wifi} alt="wifi" width={50} height={50} className="lg:h-auto lg:w-auto w-12" />
  <h5 className="text-white font-inter font-semibold text-[15px]">High-Speed Wi-Fi</h5>
</div>

<div className="opacity-0 flex flex-col items-center justify-center gap-1 lg:gap-0">
  <Image src={material} alt="material" width={50} height={50} className="lg:h-auto lg:w-auto w-12" />
  <h5 className="text-white font-inter font-semibold text-[15px]">24/7 Front Desk</h5>
</div>

<div className="opacity-0 flex flex-col items-center justify-center gap-1 lg:gap-0">
  <Image src={laundry} alt="laundry" width={50} height={50} className="lg:h-auto lg:w-auto w-12" />
  <h5 className="text-white font-inter font-semibold text-[15px]">Laundry Service</h5>
</div>

<div className="opacity-0 flex flex-col items-center justify-center gap-1 lg:gap-0">
  <Image src={car} alt="car" width={50} height={50} className="lg:h-auto lg:w-auto w-12" />
  <h5 className="text-white font-inter font-semibold text-[15px]">Secure Packing</h5>
</div>


</div>
</div>
</div>


<div className="flex flex-col items-center justify-center gap-6">
<div className="flex items-center justify-center gap-2"> 
<div className=" h-[0.5px]  lg:w-160 w-33 bg-[#FEB420] "></div>
<h3 className="font-bold text-white text-[15px] font-inter lg:text-[22px]">
 Photo Gallery
</h3>
<div className=" h-[0.5px]  lg:w-160 w-33 bg-[#FEB420] "></div>
</div>

<div className="w-full flex items-center justify-center">

  <div className="flex items-center justify-center gap-8 w-[90%] max-w-6xl">

    {/* Left Arrow */}
    <button className="custom-prev text-[#FEB420] text-3xl cursor-pointer select-none">
      ❮
    </button>

    {/* Swiper */}
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation={{
        prevEl: ".custom-prev",
        nextEl: ".custom-next",
      }}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="flex-1"
    >


 <SwiperSlide>
        <div className="h-95 bg-black flex flex-col gap-3 rounded-3xl">
          <div
            className="bg-cover bg-no-repeat bg-center h-full rounded-2xl"
            style={{ backgroundImage: "url('/assests/dinning.jpeg')" }}
          />
        </div>
      </SwiperSlide>


      <SwiperSlide>
        <div className="h-95 bg-black flex flex-col gap-3 rounded-3xl">
          <div
            className="bg-cover bg-no-repeat bg-center h-full rounded-2xl"
            style={{ backgroundImage: "url('/assests/attraction1.jpg')" }}
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-95 bg-black flex flex-col gap-3 rounded-3xl">
          <div
            className="bg-cover bg-no-repeat bg-center h-full rounded-2xl"
            style={{ backgroundImage: "url('/assests/attraction4.jpg')" }}
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-95 bg-black flex flex-col gap-3 rounded-3xl">
          <div
            className="bg-cover bg-no-repeat bg-center h-full rounded-2xl"
            style={{ backgroundImage: "url('/assests/attraction2.jpg')" }}
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-95 bg-black flex flex-col gap-3 rounded-3xl">
          <div
            className="bg-cover bg-no-repeat bg-center h-full rounded-2xl"
            style={{ backgroundImage: "url('/assests/attraction3.jpeg')" }}
          />
        </div>
      </SwiperSlide>


  <SwiperSlide>
        <div className="h-95 bg-black flex flex-col gap-3 rounded-3xl">
          <div
            className="bg-cover bg-no-repeat bg-center h-full rounded-2xl"
            style={{ backgroundImage: "url('/assests/attraction5.jpg')" }}
          />
        </div>
      </SwiperSlide>


    </Swiper>

    {/* Right Arrow */}
    <button className="custom-next text-[#FEB420] text-3xl cursor-pointer select-none">
      ❯
    </button>

  </div>

</div>

<div className="flex flex-col gap-4 items-center justify-center pt-4">
<div className="flex items-center justify-center gap-2"> 
<div className=" h-[0.5px]  lg:w-160 w-32 bg-[#FEB420] "></div>
<h3 className="font-bold text-white font-inter text-[15px] lg:text-[22px]">
Guest Reviews
</h3>
<div className=" h-[0.5px]  lg:w-160 w-32 bg-[#FEB420] "></div>
</div>
<div ref={testimonialRef}  className="flex flex-col items-center justify-center gap-2">
<h5  ref={quoteRef} className="lg:text-[18px] text-center text-[15px] w-[95%] text-white italic font-inter font-bold">
  “Exceptional comfort and service. Truly a home away from home.”
</h5>
<div ref={starsRef} className="flex items-center justify-center gap-2">
<div className="flex gap-1">
  <IoMdStar className="text-[#FDD835]" size={20} />
  <IoMdStar className="text-[#FDD835]" size={20} />
  <IoMdStar className="text-[#FDD835]" size={20} />
  <IoMdStar className="text-[#FDD835]" size={20} />
  <IoMdStar className="text-[#FDD835]" size={20} />
</div>
<h5 className="lg:text-[15px] text-white font-inter font-bold">
 . Adebayo s.
</h5>
</div>
</div>
</div >

</div>
<Footer />
    </div>
  );
}
