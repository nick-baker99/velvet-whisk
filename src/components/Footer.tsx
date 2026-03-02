import React from 'react';
import footerLogo from '../assets/images/velvet-whisk-logo-light-medium.png';
import { LuFacebook, LuInstagram } from "react-icons/lu";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-burgundy-500 p-6 transform-gpu">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[2fr_1fr_1fr]">
        <div className="p-2 flex flex-col justify-between gap-4">
          <a href="#home" className="flex items-end gap-3">
            <img src={footerLogo} alt="velvet whisk logo" className="max-w-8 lg:max-w-10" />
            <span className="text-2xl lg:text-3xl font-titan text-tacha-500 whitespace-nowrap">VELVET WISK</span>
          </a>
          <div className="">
            <h3 className="text-2xl text-white font-semibold mb-3">Our Socials</h3>
            <div className="space-x-3">
              <a href="#instagram" className="bg-white/10 hover:bg-white/20 text-white inline-block p-2.5 w-10 h-10 rounded-full transition-colors duration-300">
                <LuFacebook className="w-full h-full block" />
              </a>
              <a href="#instagram" className="bg-white/10 hover:bg-white/20 text-white inline-block p-2.5 w-10 h-10 rounded-full transition-colors duration-300">
                <LuInstagram className="w-full h-full block" />
              </a>
              <a href="#x" className="bg-white/10 hover:bg-white/20 text-white inline-block p-2.5 w-10 h-10 rounded-full transition-colors duration-300">
                <FaXTwitter className="w-full h-full block" />
              </a>
              <a href="#facebook" className="bg-white/10 hover:bg-white/20 text-white inline-block p-2.5 w-10 h-10 rounded-full transition-colors duration-300">
                <FaWhatsapp className="w-full h-full block" />
              </a>
            </div>
          </div>
        </div>
        <div className="p-2">
          <h3 className="text-2xl text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 pl-1">
            <li><Link to="/" className="text-white/90 hover:text-tacha-500 transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-white/90 hover:text-tacha-500 transition-colors">About</Link></li>
            <li><Link to="/menu" className="text-white/90 hover:text-tacha-500 transition-colors">Our Menu</Link></li>
            <li><Link to="/reviews" className="text-white/90 hover:text-tacha-500 transition-colors">Reviews</Link></li>
            <li><Link to="/order" className="text-white/90 hover:text-tacha-500 transition-colors">Order</Link></li>
          </ul>
        </div>
        <div className="p-2">
          <h3 className="text-2xl text-white/90 font-semibold mb-3">Services</h3>
          <ul className="space-y-2 pl-1">
            <li><Link to="/menu/birthday-cakes" className="text-white/90 hover:text-tacha-500 transition-colors">Birthday Cakes</Link></li>
            <li><Link to="/wedding-cakes" className="text-white/90 hover:text-tacha-500 transition-colors">Wedding Cakes</Link></li>
            <li><Link to="" className="text-white/90 hover:text-tacha-500 transition-colors">Corporate Events</Link></li>
            <li><Link to="" className="text-white/90 hover:text-tacha-500 transition-colors">Catering</Link></li>
          </ul>
        </div>
        <hr className="col-span-full border-white opacity-40 my-5" />
        <div className="col-span-full text-center p-4">
          <p className="text-sm text-white opacity-70">Copyright © 2016 - {currentYear} Velvet Whisk Ltd All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer