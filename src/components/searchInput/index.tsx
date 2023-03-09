import { InputHTMLAttributes } from "react";
import { FaSearch } from "react-icons/fa";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  width?: string;
}

function Index({ placeholder, width = "w-full", ...rest }: Props) {
  return (
    <div className={`relative ${width}`}>
      <input
        className="py-2 pl-10 pr-3 block w-full border border-gray-300 rounded-none leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-100 sm:max-w-sm"
        placeholder={placeholder}
        {...rest}
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <FaSearch className="h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
}

export default Index;
