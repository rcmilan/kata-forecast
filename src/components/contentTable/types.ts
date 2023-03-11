export interface TableData {
  column1: string;
  column2: string;
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
