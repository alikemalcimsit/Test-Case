"use client";

import React, { useState } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import TourFilters from './TourFilters';
import RentFilters from './RentFilters';
import TransferFilter from './TransferFilter';
import TicketFilter from './TicketFilter';
import { useTourFilters } from '@/context/TourFilterContext';

interface ModalProps {
    setIsFilterOpen: (open: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ setIsFilterOpen }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    // State variables for range filters

    const {
        setGroupSizeValue,
        setStartTimeValue,
        setSelectedFeature,
        setPriceValue,
        setSelectedVehicle,
        setSelectedActivity,
        setSelectedTheme,
      } = useTourFilters();
    // Handle category change
    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
    };
    const handleReset = () => {
        setGroupSizeValue(1);
        setStartTimeValue(0);
        setSelectedFeature("");
        setPriceValue(0);
        setSelectedVehicle("");
        setSelectedActivity("");
        setSelectedTheme("");
      };





    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-3xl w-11/12 sm:w-9/12 md:w-7/12 lg:w-5/12 p-6 relative shadow-lg">

                {/* Close Button and Filter Options */}
                <div className="flex items-center justify-between mb-4">
                    <select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="bg-primaryOrange w-28 text-xl appearance-none text-center font-medium text-white rounded-lg mt-1 p-1 border"
                    >
                        <option className="text-base" value="transfer">TRANSFER</option>
                        <option className="text-base" value="tour">TOURS</option>
                        <option className="text-base" value="tickets">TICKETS</option>
                        <option className="text-base" value="rent">RENT</option>
                    </select>
                    <p className="underline text-xl text-center">Filter</p>

                    <div className="flex items-center">
                        <button
                            onClick={() => setIsFilterOpen(false)}
                            className="text-2xl text-gray-600 hover:text-black"
                        >
                            <IoIosCloseCircleOutline size={40} />
                        </button>
                    </div>
                </div>

                {/* Filter Content */}

                <div className="space-y-3 max-h-[450px] overflow-y-auto">

                    {selectedCategory === 'tour' &&<TourFilters />}
                    {selectedCategory === 'rent' && <RentFilters />}
                    {selectedCategory === 'transfer' && <TransferFilter />}
                    {selectedCategory === 'tickets' && <TicketFilter />}
                </div>


                {/* Apply Button */}
                <div className="flex justify-end mt-4 gap-4">
                    <button
                        onClick={handleReset}
                        className="bg-primaryOrange text-white px-4 py-2 rounded-lg hover:bg-primaryOrangeDark transition"
                    >
                        Reset
                    </button>
                    <button
                        onClick={() => setIsFilterOpen(false)}
                        className="bg-primaryOrange text-white px-4 py-2 rounded-lg hover:bg-primaryOrangeDark transition"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
