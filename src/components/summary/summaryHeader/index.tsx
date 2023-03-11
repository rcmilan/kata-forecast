import { cityNameColumn } from "../constants";
import { ColumnKey, SortDirection } from "../types";
import HeaderColumn from "./summaryHeaderColumn";

interface HeaderProps {
  sortDirection: SortDirection;
  onSortToggle: (column: ColumnKey) => void;
}

const Header: React.FC<HeaderProps> = ({ sortDirection, onSortToggle }) => {
  return (
    <div className="flex justify-between items-center px-4 py-2 text-black-100 text-sm font-small tracking-wider">
      <HeaderColumn
        columnKey="min"
        sortDirection={sortDirection}
        onSortToggle={onSortToggle}
      />
      <HeaderColumn
        columnKey="max"
        sortDirection={sortDirection}
        onSortToggle={onSortToggle}
      />
      <div className={cityNameColumn}></div>
    </div>
  );
};

export default Header;
