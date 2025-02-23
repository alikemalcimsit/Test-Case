"use client";


import React, { useState } from 'react';
import { CiFilter } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import { FcLike } from "react-icons/fc";
import { FiShoppingCart } from "react-icons/fi";
import Image from 'next/image';
import logo from "../assets/logo.png";
import Modal from './Modal';

const Navbar = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="flex w-11/12 lg:w-10/12 m-auto justify-between items-center py-2  bg-white">
        {/* Sol Kısım */}
        <div className="flex items-center gap-1 sm:gap-2">
          <CiFilter
            className="cursor-pointer text-2xl sm:text-3xl"
            onClick={() => setIsFilterOpen(true)} // Modal açılır
          />
          <p className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg">
            Travellers Local Market
          </p>
        </div>

        {/* Responsive Logo */}
        <div className="w-8 h-10 sm:w-10 sm:h-12 md:w-12 md:h-14 lg:w-14 lg:h-16">
          <Image 
            src={logo} 
            alt="Travellers Local Market Logo" 
            layout="responsive"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Sağ Kısım */}
        <div className="flex items-center gap-3 sm:gap-5 lg:gap-8">
          <TfiWorld className="text-xl sm:text-2xl md:text-3xl" />
          <FcLike className="text-xl sm:text-2xl md:text-3xl" />
          <FiShoppingCart className="text-xl sm:text-2xl md:text-3xl" />
          <div className="h-7 w-7 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-full bg-pink-500">
            {/* Profil resmi eklenebilir */}
          </div>
        </div>
      </div>

      {/* Filtreleme Popup (Modal) */}
      {isFilterOpen && (
       <Modal setIsFilterOpen={setIsFilterOpen}></Modal>
      )}
    </>
  );
};

export default Navbar;
