import { minMaxColumn, cityNameColumn } from "../constants";
import { RowData } from "../types";

interface RowProps {
  row: RowData;
}

const Row: React.FC<RowProps> = ({ row }) => (
  <div className="flex justify-between items-center font-medium py-2 px-4">
    <div className={`${minMaxColumn}`}>{row.min}</div>
    <div className={`${minMaxColumn}`}>{row.max}</div>
    <div className={`${cityNameColumn}`}>{row.cityName}</div>
  </div>
);

export default Row;
