import React, { InputHTMLAttributes, useState } from "react";
import { FaSearch } from "react-icons/fa";
import cities from "../../assets/locations.json";
import SuggestionList from "./suggestionList";
import { City } from "./types";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
}

const Index: React.FC<Props> = ({ width = "w-full", ...rest }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<City[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    // Filter cities based on user input
    const filteredCities = cities.filter(
      (city) => city.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
    setSuggestions(filteredCities);
  };

  const handleSuggestionClick = (city: City) => {
    console.log(
      `Selected city: ${city.name} (${city.latitude}, ${city.longitude})`
    );
    setInputValue(city.name);
    setSuggestions([]);
  };

  return (
    <div className={`relative ${width} px-5`}>
      <input
        type="text"
        className="py-2 pl-2 pr-3 block w-full border border-gray-300 rounded-none leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-100"
        value={inputValue}
        onChange={handleInputChange}
        {...rest}
      />
      <div className="absolute inset-y-0 right-0 pr-8 flex items-center pointer-events-none">
        <FaSearch className="h-5 w-5 text-gray-400" />
      </div>
      {suggestions.length > 0 && (
        <SuggestionList
          suggestions={suggestions}
          onClick={handleSuggestionClick}
        />
      )}
    </div>
  );
};

export default Index;
