import { BsSortNumericDown, BsSortNumericUp } from "react-icons/bs";
import { minMaxColumn } from "../../constants";
import { ColumnKey, SortDirection } from "../../types";

interface ColumnProps {
  columnKey: ColumnKey;
  sortDirection: SortDirection;
  onSortToggle: (column: ColumnKey) => void;
}

const HeaderColumn: React.FC<ColumnProps> = ({
  columnKey,
  sortDirection,
  onSortToggle,
}) => {
  const getSortIcon = () => {
    const IconComponent =
      sortDirection === "asc" ? BsSortNumericDown : BsSortNumericUp;
    return <IconComponent className="w-4 h-4 inline-block mr-1" />;
  };

  return (
    <div
      className={`${minMaxColumn} cursor-pointer flex items-center select-none`}
      onClick={() => onSortToggle(columnKey)}
    >
      {getSortIcon()}
      {columnKey}
    </div>
  );
};

export default HeaderColumn;
