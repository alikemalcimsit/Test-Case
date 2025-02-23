import React from "react";
import { FaHeart } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoIosReturnRight } from "react-icons/io";
import { MdSouthEast } from "react-icons/md";
import Image from "next/image";

// Define prop types
interface Tour {
  id: number;
  name: string;
  location: string;
  theme: string;
  activity: string;
  vehicle: string;
  price: number;
  startTime:  number;
  groupSize: number;
  features: string[];
  img: string;
}

interface CardProps {
  data: Tour;
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      <div className="w-full sm:w-80 md:w-72 lg:w-80 xl:w-96 bg-white border rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <Image
            height={224}
            width={100}
            src={data.img}
            alt={data.name}
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
              {data.location}
            </p>
          </div>
          <h3 className="text-xl font-semibold">{data.name}</h3>
          <div className="flex flex-col items-end relative">
            <div className="flex items-center justify-center">
              <p className="text-sm flex items-center gap-2 text-red-500 line-through mr-3">
                THB 400
                <MdSouthEast />
              </p>
              <p className="mt-2 text-lg font-bold mr-2 mb-2">
                THB {data.price}
              </p>
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
    </div>
  );
};

export default Card;
