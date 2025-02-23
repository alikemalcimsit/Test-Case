"use client"

import { useTourFilters } from '@/context/TourFilterContext';
import React from 'react'
import { IoIosSearch } from 'react-icons/io';



const TourFilters: React.FC = () => {

    const {
        groupSizeValue,
        setGroupSizeValue,
        startTimeValue,
        setStartTimeValue,
        selectedFeature,
        setSelectedFeature,
        priceValue,
        setPriceValue,
        selectedVehicle,
        setSelectedVehicle,
        selectedActivity,
        setSelectedActivity,
        selectedTheme,
        setSelectedTheme,
    } = useTourFilters();

    const handleFilterChange = (value: string, type: string) => {
        switch (type) {
            case 'theme':
                setSelectedTheme(value);
                break;
            case 'activity':
                setSelectedActivity(value);
                break;
            case 'feature':
                setSelectedFeature(value);
                break;
            case 'vehicle':
                setSelectedVehicle(value);
                break;
            default:
                break;
        }
    };
    return (
        <>
            {/* Location Section */}
            <label className="font-medium">Location</label>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Enter location"
                    className="w-full text-sm  p-1 pl-8 border rounded-xl"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-2/4 text-gray-600">
                    <IoIosSearch className='text-primaryOrange' size={16} />
                </span>
            </div>

            {/* Theme Section */}
            <div className="mt-4">
                <label className="font-medium">Theme:</label>
                <div className="grid align-middle justify-start grid-cols-3 gap-2 text-xs   mt-3">
                    <button
                        className={` p-2 border rounded-md transition duration-200 ${selectedTheme === 'nature' ? 'bg-primaryOrange text-white' : ''}`}
                        onClick={() => handleFilterChange('nature', 'theme')}
                    >
                        Nature
                    </button>
                    <button
                        className={` p-2 border rounded-md transition duration-200 ${selectedTheme === 'adventure' ? 'bg-primaryOrange text-white' : ''}`}
                        onClick={() => handleFilterChange('adventure', 'theme')}
                    >
                        Adventure
                    </button>
                    <button
                        className={` p-2 border rounded-md transition duration-200 ${selectedTheme === 'culture' ? 'bg-primaryOrange text-white' : ''}`}
                        onClick={() => handleFilterChange('culture', 'theme')}
                    >
                        Culture
                    </button>
                </div>
            </div>

            {/* Activity Section */}
            <div className="mt-4">
                <label className="font-medium">Activity:</label>
                <div className="grid align-middle justify-start grid-cols-3 gap-2 mt-2  text-xs overflow-x-auto">
                    <button
                        className={`p-2 border rounded-md transition duration-200 ${selectedActivity === 'hiking' ? 'bg-primaryOrange text-white' : ''}`}
                        onClick={() => handleFilterChange('hiking', 'activity')}
                    >
                        Hiking
                    </button>
                    <button
                        className={`p-2 border rounded-md transition duration-200 ${selectedActivity === 'cycling' ? 'bg-primaryOrange text-white' : ''}`}
                        onClick={() => handleFilterChange('cycling', 'activity')}
                    >
                        Cycling
                    </button>
                    <button
                        className={`p-2 border rounded-md transition duration-200 ${selectedActivity === 'sightseeing' ? 'bg-primaryOrange text-white' : ''}`}
                        onClick={() => handleFilterChange('sightseeing', 'activity')}
                    >
                        Sightseeing
                    </button>
                </div>
            </div>
            {/* Price Filter */}
            <div className="mt-4">
                <label className="font-medium ">Price:</label>
                <div className="flex items-center">
                    <input
                        type="range"
                        min="0"
                        max="1000"
                        value={priceValue}
                        onChange={(e) => setPriceValue(Number(e.target.value))}
                        className="w-full mt-1 h-1 bg-orange-500 rounded-none appearance-none"  // Flat line

                    />
                    <span className="ml-2 px-2 py-1 rounded-lg  text-xs border-2 ">
                        {priceValue}₺
                    </span>
                </div>
                <style jsx>{`
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #ff7f32; /* Turuncu */
      cursor: pointer;
    }

    input[type="range"]::-moz-range-thumb {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #ff7f32; /* Turuncu */
      cursor: pointer;
    }
  `}</style>
            </div>



            {/* Start Time Filter */}
            <div className="mt-4">
                <label className="font-medium">Start Time:</label>
                <div className="flex items-center">
                    <input
                        type="range"
                        min="0"
                        max="48"
                        value={startTimeValue}
                        onChange={(e) => setStartTimeValue(Number(e.target.value))}
                        step="1"
                        className="w-full mt-1 h-1 bg-orange-500 rounded-none appearance-none"

                    />
                    <span className="ml-2  text-xs   px-2 py-1 rounded-lg border-2">
                        {Math.floor(startTimeValue / 2)}:{startTimeValue % 2 === 0 ? '00' : '30'}
                    </span>
                </div>
                <style jsx>{`
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #ff7f32; /* Turuncu */
      cursor: pointer;
    }

    input[type="range"]::-moz-range-thumb {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #ff7f32; /* Turuncu */
      cursor: pointer;
    }
  `}</style>
            </div>

            {/* Group Size Filter */}
            <div className="mt-4">
                <label className="font-medium">Group Size:</label>
                <div className="flex items-center">
                    <input
                        type="range"
                        min="1"
                        max="50"
                        value={groupSizeValue}
                        onChange={(e) => setGroupSizeValue(Number(e.target.value))}
                        className="w-full mt-1 h-1 bg-orange-500 rounded-none appearance-none" />
                    <span className="ml-2  text-xs  px-2 py-1 rounded-lg border-2">
                        {groupSizeValue}
                    </span>
                </div>
                <style jsx>{`
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #ff7f32; /* Turuncu */
      cursor: pointer;
    }

    input[type="range"]::-moz-range-thumb {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #ff7f32; /* Turuncu */
      cursor: pointer;
    }
  `}</style>
            </div>

            {/* Vehicle Section */}
            <div className="mt-4">
                <label className="font-medium">Vehicle:</label>
                <div className="grid align-middle justify-start grid-cols-3  text-xs gap-2 mt-2">
                    <button
                        className={` p-2 border rounded-md transition duration-200 ${selectedVehicle === 'car' ? 'bg-primaryOrange text-white' : ''}`}
                        onClick={() => handleFilterChange('car', 'vehicle')}
                    >
                        Car
                    </button>
                    <button
                        className={` p-2 border rounded-md transition duration-200 ${selectedVehicle === 'bus' ? 'bg-primaryOrange text-white' : ''}`}
                        onClick={() => handleFilterChange('bus', 'vehicle')}
                    >
                        Bus
                    </button>
                    <button
                        className={` p-2 border rounded-md transition duration-200 ${selectedVehicle === 'van' ? 'bg-primaryOrange text-white' : ''}`}
                        onClick={() => handleFilterChange('van', 'vehicle')}
                    >
                        Van
                    </button>
                    <button
                        className={` p-2 border rounded-md transition duration-200 ${selectedVehicle === 'bike' ? 'bg-primaryOrange text-white' : ''}`}
                        onClick={() => handleFilterChange('bike', 'vehicle')}
                    >
                        Bike
                    </button>
                    <button
                        className={` p-2 border rounded-md transition duration-200 ${selectedVehicle === 'boat' ? 'bg-primaryOrange text-white' : ''}`}
                        onClick={() => handleFilterChange('boat', 'vehicle')}
                    >
                        Boat
                    </button>
                </div>
            </div>

            {/* Features Section */}
            <div className="mt-4">
                <label className="font-medium">Features:</label>
                <div className="grid align-middle justify-start grid-cols-3  text-xs  gap-2 mt-2">
                    <button
                        className={` p-2  border rounded-md transition duration-200 ${selectedFeature === 'guided' ? 'bg-primaryOrange text-white' : ''}`}
                        onClick={() => handleFilterChange('guided', 'feature')}
                    >
                        Guided
                    </button>
                    <button
                        className={` p-2 border  rounded-md transition duration-200 ${selectedFeature === 'familyFriendly' ? 'bg-primaryOrange text-white' : ''}`}
                        onClick={() => handleFilterChange('familyFriendly', 'feature')}
                    >
                        Family
                    </button>
                    <button
                        className={` p-2 border rounded-md transition duration-200 ${selectedFeature === 'petFriendly' ? 'bg-primaryOrange text-white' : ''}`}
                        onClick={() => handleFilterChange('petFriendly', 'feature')}
                    >
                        Pet Friendly
                    </button>
                </div>

                
            </div>
        </>
    )
}

export default TourFilters
