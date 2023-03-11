export interface RowData {
  min: number;
  max: number;
  cityName: string;
}

export interface TableRowProps {
  data: RowData;
}

export interface TableProps {
  data: RowData[];
}

export type ColumnKey = "min" | "max";

export interface TableHeaderProps {
  sortDirection: "asc" | "desc";
  onSortToggle: (column: ColumnKey) => void;
}
