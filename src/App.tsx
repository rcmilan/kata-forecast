import SummaryTable from "./components/summary";
import { RowData } from "./components/summary/types";
import Heading from "./components/heading";
import SearchInput from "./components/searchInput";

function App() {
  const tableProp: RowData[] = [
    { min: -8.77, max: -70.55, cityName: "AC: [ -8.77, -70.55]" },
    { min: -9.71, max: -35.73, cityName: "AL: [ -9.71, -35.73]" },
    { min: -3.07, max: -61.66, cityName: "AM: [ -3.07, -61.66]" },
    { min: 1.41, max: -51.77, cityName: "AP: [  1.41, -51.77]" },
    { min: -12.96, max: -38.51, cityName: "BA: [-12.96, -38.51]" },
    { min: -3.71, max: -38.54, cityName: "CE: [ -3.71, -38.54]" },
    { min: -15.83, max: -47.86, cityName: "DF: [-15.83, -47.86]" },
    { min: -19.19, max: -40.34, cityName: "ES: [-19.19, -40.34]" },
    { min: -16.64, max: -49.31, cityName: "GO: [-16.64, -49.31]" },
    { min: -2.55, max: -44.3, cityName: "MA: [ -2.55, -44.30]" },
    { min: -12.64, max: -55.42, cityName: "MT: [-12.64, -55.42]" },
    { min: -20.51, max: -54.54, cityName: "MS: [-20.51, -54.54]" },
    { min: -18.1, max: -44.38, cityName: "MG: [-18.10, -44.38]" },
    { min: -5.53, max: -52.29, cityName: "PA: [ -5.53, -52.29]" },
    { min: -7.06, max: -35.55, cityName: "PB: [ -7.06, -35.55]" },
    { min: -24.89, max: -51.55, cityName: "PR: [-24.89, -51.55]" },
    { min: -8.28, max: -35.07, cityName: "PE: [ -8.28, -35.07]" },
    { min: -8.28, max: -43.68, cityName: "PI: [ -8.28, -43.68]" },
    { min: -22.84, max: -43.15, cityName: "RJ: [-22.84, -43.15]" },
    { min: -5.22, max: -36.52, cityName: "RN: [ -5.22, -36.52]" },
    { min: -11.22, max: -62.8, cityName: "RO: [-11.22, -62.80]" },
    { min: -30.01, max: -51.22, cityName: "RS: [-30.01, -51.22]" },
    { min: 1.89, max: -61.22, cityName: "RR: [  1.89, -61.22]" },
    { min: -27.33, max: -49.44, cityName: "SC: [-27.33, -49.44]" },
    { min: -10.9, max: -37.07, cityName: "SE: [-10.90, -37.07]" },
    { min: -23.55, max: -46.64, cityName: "SP: [-23.55, -46.64]" },
    { min: -10.25, max: -48.25, cityName: "TO: [-10.25, -48.25]" },
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
