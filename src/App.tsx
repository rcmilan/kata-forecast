import SummaryTable from "./components/summary";
import { RowData } from "./components/summary/types";
import Heading from "./components/heading";
import SearchInput from "./components/searchInput";

function App() {
  const tableProp: RowData[] = [
    { min: 11, max: 30, cityName: "a" },
    { min: 12, max: 29, cityName: "b" },
    { min: 13, max: 28, cityName: "c" },
    { min: 14, max: 27, cityName: "d" },
    { min: 15, max: 26, cityName: "e" },
    { min: 16, max: 25, cityName: "f" },
    { min: 17, max: 24, cityName: "g" },
    { min: 18, max: 23, cityName: "h" },
    { min: 19, max: 22, cityName: "i" },
    { min: 20, max: 21, cityName: "j" },
  ];

  return (
    <div className="flex flex-col items-center">
      <Heading>Previsão do tempo</Heading>
      <div className="mt-5 w-1/2">
        <SearchInput placeholder="Insira aqui o nome da cidade" />
        <hr className="mt-10 mb-10 flex-grow border-t border-white" />
        <SummaryTable data={tableProp} />
      </div>
    </div>
  );
}

export default App;
