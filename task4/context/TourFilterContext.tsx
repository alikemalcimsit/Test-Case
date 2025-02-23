"use client"
import React, { createContext, useContext, useState, ReactNode } from "react";

interface TourFilterContextProps {
  groupSizeValue: number;
  setGroupSizeValue: React.Dispatch<React.SetStateAction<number>>;
  startTimeValue: number;
  setStartTimeValue: React.Dispatch<React.SetStateAction<number>>;
  selectedFeature: string;
  setSelectedFeature: React.Dispatch<React.SetStateAction<string>>;
  priceValue: number;
  setPriceValue: React.Dispatch<React.SetStateAction<number>>;
  selectedVehicle: string;
  setSelectedVehicle: React.Dispatch<React.SetStateAction<string>>;
  selectedActivity: string;
  setSelectedActivity: React.Dispatch<React.SetStateAction<string>>;
  selectedTheme: string;
  setSelectedTheme: React.Dispatch<React.SetStateAction<string>>;
}

const TourFilterContext = createContext<TourFilterContextProps | undefined>(undefined);

export const TourFilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [groupSizeValue, setGroupSizeValue] = useState<number>(1);
  const [startTimeValue, setStartTimeValue] = useState<number>(0);
  const [selectedFeature, setSelectedFeature] = useState<string>("");
  const [priceValue, setPriceValue] = useState<number>(0);
  const [selectedVehicle, setSelectedVehicle] = useState<string>("");
  const [selectedActivity, setSelectedActivity] = useState<string>("");
  const [selectedTheme, setSelectedTheme] = useState<string>("");

  return (
    <TourFilterContext.Provider
      value={{
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
      }}
    >
      {children}
    </TourFilterContext.Provider>
  );
};

export const useTourFilters = () => {
  const context = useContext(TourFilterContext);
  if (!context) {
    throw new Error("useTourFilters must be used within a TourFilterProvider");
  }
  return context;
};
