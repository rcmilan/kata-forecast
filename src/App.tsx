import { useQuery } from "react-query";
import { getForecast } from "./api";
import Heading from "./components/heading";
import SearchCard from "./components/searchCard";
import SummaryTable from "./components/summary";
import { citiesData } from "./domain/constants";
import { mapForecastResponseToRowData } from "./domain/mapper";

function App() {
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
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    }
  );

  const renderContents = () => {
    if (isLoading) return <div>Loading...</div>;

    if (isError) return <>Error: {error}</>;

    const summaryData = data ? data.flatMap(mapForecastResponseToRowData) : [];

    return <SummaryTable data={summaryData} />;
  };

  return (
    <div className="flex flex-col items-center">
      <Heading>Previsão do tempo</Heading>
      <div className="mt-5 w-2/3">
        <SearchCard placeholder="Insira aqui o nome da cidade" />
        <hr className="mt-10 mb-10 flex-grow border-t border-white" />
        {renderContents()}
      </div>
    </div>
  );
}

export default App;
