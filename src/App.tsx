import SummaryTable from "./components/summary";
import { RowData } from "./components/summary/types";
import Heading from "./components/heading";
import SearchInput from "./components/searchInput";
import { useQuery } from "react-query";
import { getForecast } from "./api";
import { fixedCities } from "./domain/constants";

function App() {
  const citiesData = fixedCities.map((city) => ({
    uf: city.uf,
    latitude: city.latlong[0],
    longitude: city.latlong[1],
  }));

  const { isLoading, isError, data, error } = useQuery(
    ["forecast", citiesData],
    () =>
      Promise.all(
        citiesData.map(({ latitude, longitude }) =>
          getForecast(latitude, longitude)
        )
      ),
    {
      enabled: !!citiesData.length,
    }
  );

  const tableProp: RowData[] = [];

  const RenderContents = () => {
    if (isLoading) return <div>Loading...</div>;

    if (isError) return <>Error: {error}</>;

    return <SummaryTable data={tableProp} />;
  };

  console.log(data);

  return (
    <div className="flex flex-col items-center">
      <Heading>Previsão do tempo</Heading>
      <div className="mt-5 w-1/2">
        <SearchInput placeholder="Insira aqui o nome da cidade" />
        <hr className="mt-10 mb-10 flex-grow border-t border-white" />
        <RenderContents />
      </div>
    </div>
  );
}

export default App;
