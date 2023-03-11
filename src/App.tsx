import { useState } from "react";
import { useQuery } from "react-query";
import { fixedCities } from "./domain/constants";
import { getForecast } from "./api";
import { RowData } from "./components/summary/types";
import Heading from "./components/heading";
import SearchInput from "./components/searchInput";
import SummaryTable from "./components/summary";

function App() {
  const citiesData = fixedCities.map((city) => ({
    uf: city.uf,
    latitude: city.latlong[0],
    longitude: city.latlong[1],
  }));

  const [searchTerm, setSearchTerm] = useState("");
  const { isLoading, isError, data, error } = useQuery(
    ["forecast", citiesData],
    () =>
      Promise.all(
        citiesData.map(({ latitude, longitude }) =>
          getForecast(latitude, longitude)
        )
      ),
    { enabled: !!citiesData.length }
  );

  const summaryData: RowData[] = [];

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  const renderContents = () => {
    if (isLoading) return <div>Loading...</div>;

    if (isError) return <>Error: {error}</>;

    return <SummaryTable data={summaryData} />;
  };

  console.log(searchTerm, data);

  return (
    <div className="flex flex-col items-center">
      <Heading>Previsão do tempo</Heading>
      <div className="mt-5 w-2/3">
        <SearchInput
          placeholder="Insira aqui o nome da cidade"
          onChange={handleSearchTermChange}
        />
        <hr className="mt-10 mb-10 flex-grow border-t border-white" />
        {renderContents()}
      </div>
    </div>
  );
}

export default App;
