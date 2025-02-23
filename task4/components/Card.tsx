"use client"
import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { CiLocationOn } from "react-icons/ci";
import { IoIosReturnRight } from "react-icons/io";
import { MdSouthEast } from "react-icons/md";
import { useTourFilters } from '@/context/TourFilterContext';

const data = [
    {
      id: 1,
      name: 'Mountain Adventure',
      location: 'Alps',
      theme: 'adventure',
      activity: 'hiking',
      vehicle: 'car',
      price: 500,
      startTime: '08:00',
      groupSize: 10,
      features: ['guided', 'familyFriendly'],
      img:"https://image.pegas-touristik.ru/country_gallery/206/adKIeDAMDJhLfuDgUP7UXKiZTl7uzS75.jpg"
    },
    {
      id: 2,
      name: 'Cultural Exploration',
      location: 'Rome',
      theme: 'culture',
      activity: 'sightseeing',
      vehicle: 'bus',
      price: 300,
      startTime: '09:00',
      groupSize: 20,
      features: ['guided', 'familyFriendly'],
      img:"https://image.pegas-touristik.ru/country_gallery/206/adKIeDAMDJhLfuDgUP7UXKiZTl7uzS75.jpg"
    },
    {
      id: 3,
      name: 'Cycling Adventure',
      location: 'Tuscany',
      theme: 'nature',
      activity: 'cycling',
      vehicle: 'bike',
      price: 200,
      startTime: '06:00',
      groupSize: 15,
      features: ['guided', 'petFriendly'],
      img:"https://image.pegas-touristik.ru/country_gallery/206/adKIeDAMDJhLfuDgUP7UXKiZTl7uzS75.jpg"
    },
    {
      id: 4,
      name: 'Family Fun at the Beach',
      location: 'Hawaii',
      theme: 'nature',
      activity: 'sightseeing',
      vehicle: 'van',
      price: 400,
      startTime: '10:00',
      groupSize: 25,
      features: ['familyFriendly', 'petFriendly'],
      img:"https://image.pegas-touristik.ru/country_gallery/206/adKIeDAMDJhLfuDgUP7UXKiZTl7uzS75.jpg"
    },
    {
      id: 5,
      name: 'Island Cruise',
      location: 'Caribbean',
      theme: 'adventure',
      activity: 'cycling',
      vehicle: 'boat',
      price: 600,
      startTime: '07:00',
      groupSize: 12,
      features: ['guided', 'petFriendly'],
      img:"https://image.pegas-touristik.ru/country_gallery/206/adKIeDAMDJhLfuDgUP7UXKiZTl7uzS75.jpg"
    },
    {
      id: 6,
      name: 'Historical Journey',
      location: 'Egypt',
      theme: 'culture',
      activity: 'sightseeing',
      vehicle: 'bus',
      price: 350,
      startTime: '08:30',
      groupSize: 30,
      features: ['guided'],
      img:"https://image.pegas-touristik.ru/country_gallery/206/adKIeDAMDJhLfuDgUP7UXKiZTl7uzS75.jpg"
    },
    {
      id: 7,
      name: 'Trekking Expedition',
      location: 'Himalayas',
      theme: 'adventure',
      activity: 'hiking',
      vehicle: 'van',
      price: 550,
      startTime: '05:00',
      groupSize: 8,
      features: ['guided', 'familyFriendly'],
      img:"https://image.pegas-touristik.ru/country_gallery/206/adKIeDAMDJhLfuDgUP7UXKiZTl7uzS75.jpg"
    },
    {
      id: 8,
      name: 'Tropical Bike Tour',
      location: 'Bali',
      theme: 'nature',
      activity: 'cycling',
      vehicle: 'bike',
      price: 150,
      startTime: '07:30',
      groupSize: 10,
      features: ['guided', 'familyFriendly'],
      img:"https://image.pegas-touristik.ru/country_gallery/206/adKIeDAMDJhLfuDgUP7UXKiZTl7uzS75.jpg"
    },
  ];
  



  export const Card = () => {
    const {
      groupSizeValue,
      priceValue,
      selectedActivity,
      selectedTheme,
    } = useTourFilters();
  
    const filteredData = data.filter((item) => {
      return (
        (groupSizeValue > 0 ? item.groupSize <= groupSizeValue : true) &&
        (priceValue > 0 ? item.price <= priceValue : true) &&
        (selectedActivity ? item.activity === selectedActivity : true) &&
        (selectedTheme ? item.theme === selectedTheme : true)
      );
    });
  
    return (
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-80 md:w-72 lg:w-80 xl:w-96 bg-white border rounded-lg shadow-lg overflow-hidden"
          >
            {/* Discount banner */}
            <div className="relative">
              {/* Image */}
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-56 object-cover"
              />
              <span className="bg-primaryOrange text-white absolute bottom-2 left-4 px-4 py-1 text-sm rounded-xl">
                Tour
              </span>
  
              <div className="absolute top-2 left-2 right-2 text-orange-500 text-sm font-semibold py-1 px-2 flex justify-between items-center z-10">
                <span className="bg-white px-2 py-1 rounded-xl">%30 OFF</span>
                <div className="bg-white p-2 rounded-xl">
                  <FaHeart className="text-xl" />
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <p className="text-gray-500 text-xs font-medium">⭐ 4.3 (20)</p>
                <p className="text-gray-500 flex items-center">
                  <CiLocationOn className="text-primaryOrange" />
                  {item.location}
                </p>
              </div>
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <div className="flex flex-col items-end relative">
                <div className="flex items-center justify-center">
                  <p className="text-sm flex items-center gap-2 text-red-500 line-through mr-3">
                    THB 400
                    <MdSouthEast />
                  </p>
                  <p className="mt-2 text-lg font-bold mr-2 mb-2">THB {item.price}</p>
                </div>
                <div className="flex w-full items-center justify-between">
                  <p className="items-center flex mt-4 text-sm justify-start text-primaryOrange underline">
                    Details <IoIosReturnRight />
                  </p>
                  <button className="px-4 py-2 text-sm bg-primaryOrange text-white rounded-xl">
                    Book now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };