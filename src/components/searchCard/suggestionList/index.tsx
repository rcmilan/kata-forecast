import { City } from "../types";
import Suggestion from "./suggestion";

const Index: React.FC<{
  suggestions: City[];
  onClick: (city: City) => void;
}> = ({ suggestions, onClick }) => {
  return (
    <ul className="absolute z-50 top-full left-0 w-full bg-white rounded-none max-h-40 overflow-y-auto">
      {suggestions.map((city, i) => (
        <Suggestion key={i} suggestion={city} onClick={onClick} />
      ))}
    </ul>
  );
};

export default Index;
