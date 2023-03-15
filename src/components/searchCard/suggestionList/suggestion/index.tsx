import { SuggestionProps } from "../../types";

const Index: React.FC<SuggestionProps> = ({ suggestion, onClick }) => {
  const handleClick = () => {
    onClick(suggestion);
  };

  return <li onClick={handleClick}>{suggestion.name}</li>;
};

export default Index;
