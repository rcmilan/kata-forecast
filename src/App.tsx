import Heading from "./components/heading";
import SearchInput from "./components/searchInput";
import Subtitle from "./components/subtitle";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Heading>Previsão do tempo</Heading>
      <div className="mt-6">
        <SearchInput placeholder="Insira aqui o nome da cidade" width="w-96" />
        <hr className="mt-10 mb-10 flex-grow border-t border-white" />
      </div>
      <Subtitle />
    </div>
  );
}

export default App;
