import { BsSortNumericUp, BsSortNumericDown } from "react-icons/bs";
import { minMaxColumn, cityNameColumn } from "../constants";
import { ColumnKey } from "../types";

interface HeaderProps {
  sortDirection: "asc" | "desc";
  onSortToggle: (column: ColumnKey) => void;
}

const Header: React.FC<HeaderProps> = ({ sortDirection, onSortToggle }) => {
  const getSortIcon = () => {
    const IconComponent =
      sortDirection === "asc" ? BsSortNumericDown : BsSortNumericUp;
    return <IconComponent className="w-4 h-4 inline-block mr-1" />;
  };

  const Column: React.FC<{ columnKey: ColumnKey }> = ({ columnKey }) => (
    <div
      className={`${minMaxColumn} cursor-pointer flex items-center`}
      onClick={() => onSortToggle(columnKey)}
    >
      {getSortIcon()}
      {columnKey}
    </div>
  );

  return (
    <div className="flex justify-between items-center px-4 py-2 text-black-100 text-sm font-small tracking-wider">
      <Column columnKey="min" />
      <Column columnKey="max" />
      <div className={cityNameColumn}></div>
    </div>
  );
};

export default Header;
