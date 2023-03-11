import ContentTable from "./components/contentTable";
import { TableData } from "./components/contentTable/types";
import Heading from "./components/heading";
import SearchInput from "./components/searchInput";
import Subtitle from "./components/subtitle";

function App() {
  const tableProp: TableData[] = [
    { column1: "a", column2: "b", column3: "c" },
    { column1: "d", column2: "e", column3: "f" },
  ];

  return (
    <div className="flex flex-col items-center">
      <Heading>Previsão do tempo</Heading>
      <div className="mt-6">
        <SearchInput placeholder="Insira aqui o nome da cidade" width="w-96" />
        <hr className="mt-10 mb-10 flex-grow border-t border-white" />
      </div>
      <Subtitle />

      <ContentTable data={tableProp} />
    </div>
  );
}

export default App;
