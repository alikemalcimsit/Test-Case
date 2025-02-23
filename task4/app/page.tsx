"use client"
import Card from "@/components/Card";
import { useTourFilters } from "@/context/TourFilterContext";

export default function Home() {
  const {
    groupSizeValue,
    startTimeValue,
    selectedFeature,
    priceValue,
    selectedVehicle,
    selectedActivity,
    selectedTheme,
  } = useTourFilters();

  // Sample data (datas) as you already have it
  const datas = [
    {
      id: 1,
      name: "Mountain Adventure",
      location: "Alps",
      theme: "adventure",
      activity: "hiking",
      vehicle: "car",
      price: 500,
      startTime: 9,
      groupSize: 10,
      features: ["guided", "familyFriendly"],
      img: "https://image.pegas-touristik.ru/country_gallery/206/adKIeDAMDJhLfuDgUP7UXKiZTl7uzS75.jpg",
    },
    {
      id: 2,
      name: "Cultural Exploration",
      location: "Rome",
      theme: "culture",
      activity: "sightseeing",
      vehicle: "bus",
      price: 300,
      startTime: 9,
      groupSize: 20,
      features: ["guided", "familyFriendly"],
      img: "https://image.pegas-touristik.ru/country_gallery/206/adKIeDAMDJhLfuDgUP7UXKiZTl7uzS75.jpg",
    },
    {
      id: 3,
      name: "Cycling Adventure",
      location: "Tuscany",
      theme: "nature",
      activity: "cycling",
      vehicle: "bike",
      price: 200,
      startTime: 32,
      groupSize: 15,
      features: ["guided", "petFriendly"],
      img: "https://image.pegas-touristik.ru/country_gallery/206/adKIeDAMDJhLfuDgUP7UXKiZTl7uzS75.jpg",
    },
    {
      id: 4,
      name: "Family Fun at the Beach",
      location: "Hawaii",
      theme: "nature",
      activity: "sightseeing",
      vehicle: "van",
      price: 400,
      startTime: 22,
      groupSize: 25,
      features: ["familyFriendly", "petFriendly"],
      img: "https://image.pegas-touristik.ru/country_gallery/206/adKIeDAMDJhLfuDgUP7UXKiZTl7uzS75.jpg",
    },
    {
      id: 5,
      name: "Island Cruise",
      location: "Caribbean",
      theme: "adventure",
      activity: "cycling",
      vehicle: "boat",
      price: 600,
      startTime: 22,
      groupSize: 12,
      features: ["guided", "petFriendly"],
      img: "https://image.pegas-touristik.ru/country_gallery/206/adKIeDAMDJhLfuDgUP7UXKiZTl7uzS75.jpg",
    },
    {
      id: 6,
      name: "Historical Journey",
      location: "Egypt",
      theme: "culture",
      activity: "sightseeing",
      vehicle: "bus",
      price: 350,
      startTime: 28,
      groupSize: 30,
      features: ["guided"],
      img: "https://image.pegas-touristik.ru/country_gallery/206/adKIeDAMDJhLfuDgUP7UXKiZTl7uzS75.jpg",
    },
    {
      id: 7,
      name: "Trekking Expedition",
      location: "Himalayas",
      theme: "adventure",
      activity: "hiking",
      vehicle: "van",
      price: 550,
      startTime: 10,
      groupSize: 8,
      features: ["guided", "familyFriendly"],
      img: "https://image.pegas-touristik.ru/country_gallery/206/adKIeDAMDJhLfuDgUP7UXKiZTl7uzS75.jpg",
    },
    {
      id: 8,
      name: "Tropical Bike Tour",
      location: "Bali",
      theme: "nature",
      activity: "cycling",
      vehicle: "bike",
      price: 150,
      startTime: 6,
      groupSize: 10,
      features: ["guided", "familyFriendly"],
      img: "https://image.pegas-touristik.ru/country_gallery/206/adKIeDAMDJhLfuDgUP7UXKiZTl7uzS75.jpg",
    },
  ];
  // Filter the data based on selected filters
  const filteredData = datas.filter((data) => {
    const isGroupSizeMatch = data.groupSize >= groupSizeValue;
    const isStartTimeMatch = startTimeValue ? data.startTime.startsWith(startTimeValue) : true;
    const isFeatureMatch = selectedFeature ? data.features.includes(selectedFeature) : true;
    const isPriceMatch = priceValue ? data.price <= priceValue : true;
    const isVehicleMatch = selectedVehicle ? data.vehicle === selectedVehicle : true;
    const isActivityMatch = selectedActivity ? data.activity === selectedActivity : true;
    const isThemeMatch = selectedTheme ? data.theme === selectedTheme : true;

    return (
      isGroupSizeMatch &&
      isStartTimeMatch &&
      isFeatureMatch &&
      isPriceMatch &&
      isVehicleMatch &&
      isActivityMatch &&
      isThemeMatch
    );
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {filteredData.map((data) => (
        <Card data={data} key={data.id} />
      ))}
    </div>
  );
}
