import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import logo from "../../public/assests/logo.png";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 lg:px-24">
      {/* Top section: Logo + Contact */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
        {/* Logo Placeholder */}
        <div className="flex items-center justify-center lg:justify-start">
          <div className="w-32 h-12 rounded-lg flex items-center justify-center">
           <Image src={logo} alt="Logo" width={60} height={50} className="object-contain" />
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 text-center lg:text-left">
          <p className="font-inter font-semibold text-[#FEB420]">Tel: <span className="font-normal text-white">+234 706 998 4354, +234 705 470 3233</span></p>
          <p className="font-inter font-semibold text-[#FEB420]">Email: <span className="font-normal text-white">duremlodge@gmail.com</span></p>
          <p className="font-inter font-semibold text-[#FEB420]">Address: <span className="font-normal text-white">Zone C3, Beside FRSC Office, High School Area, Ogbomoso, Oyo State, Nigeria.</span></p>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-2 items-center lg:items-end">
          <p className="font-inter font-semibold">Follow Us</p>
          <div className="flex gap-4 text-[#FEB420]">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Durem Lodge. All rights reserved.
      </div>
    </footer>
  );
}
