import ContentTable from "./components/contentTable";
import { TableData } from "./components/contentTable/types";
import Heading from "./components/heading";
import SearchInput from "./components/searchInput";
import Subtitle from "./components/subtitle";

function App() {
  const tableProp: TableData[] = [
    { column1: 11, column2: 30, column3: "a" },
    { column1: 12, column2: 29, column3: "b" },
    { column1: 13, column2: 28, column3: "c" },
    { column1: 14, column2: 27, column3: "d" },
    { column1: 15, column2: 26, column3: "e" },
    { column1: 16, column2: 25, column3: "f" },
    { column1: 17, column2: 24, column3: "g" },
    { column1: 18, column2: 23, column3: "h" },
    { column1: 19, column2: 22, column3: "i" },
    { column1: 20, column2: 21, column3: "j" },
  ];

  return (
    <div className="flex flex-col items-center">
      <Heading>Previsão do tempo</Heading>
      <div className="mt-5 w-1/2">
        <SearchInput placeholder="Insira aqui o nome da cidade" />
        <hr className="mt-10 mb-10 flex-grow border-t border-white" />

        <Subtitle text="Capitais" />

        <ContentTable data={tableProp} />
      </div>
    </div>
  );
}

export default App;
