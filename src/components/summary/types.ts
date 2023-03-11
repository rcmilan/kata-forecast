export interface RowData {
  min: number;
  max: number;
  cityName: string;
}

export type ColumnKey = "min" | "max";

export type SortDirection = "asc" | "desc";
