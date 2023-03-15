import { InputHTMLAttributes } from "react";

export interface City {
  name: string;
  latitude: number;
  longitude: number;
}

export interface SuggestionProps {
  suggestion: City;
  onClick: (city: City) => void;
}

export interface SearchInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
}
