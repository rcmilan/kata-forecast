import Heading from "./components/heading";
import SearchInput from "./components/searchInput";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Heading>Previsão do tempo</Heading>

      <div className="m-10">
        <SearchInput placeholder="insira aqui o nome da cidade" />
      </div>
      <div>02</div>
      <div>03</div>
    </div>
  );
}

export default App;
