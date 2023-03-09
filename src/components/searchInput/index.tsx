type Props = {
  placeholder: string;
  width?: string;
};

function Index({ placeholder, width = "w-80" }: Props) {
  return (
    <div className={`relative ${width}`}>
      <input
        className="py-2 pl-10 pr-3 block w-full border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-100"
        placeholder={placeholder}
      />
      {/* <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <SearchIcon className="h-5 w-5 text-gray-400" />
      </div> */}
    </div>
  );
}

export default Index;
