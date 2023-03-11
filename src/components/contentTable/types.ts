export interface TableData {
  column1: number;
  column2: number;
  column3: string;
}

export interface TableRowProps {
  data: TableData;
}

export interface TableProps {
  data: TableData[];
}

export interface TableHeaderProps {
  sortDirection: "asc" | "desc";
  onSortToggle: () => void;
}
