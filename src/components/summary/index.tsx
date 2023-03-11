import React, { useState } from "react";
import Header from "./summaryHeader";
import Row from "./summaryRow";
import Title from "./summaryTitle";
import { ColumnKey, RowData } from "./types";

type SortDirection = "asc" | "desc";

interface Props {
  data: RowData[];
}

const Summary: React.FC<Props> = ({ data }) => {
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [sortColumn, setSortColumn] = useState<ColumnKey>("min");

  const compareColumns = (a: RowData, b: RowData) => {
    const aVal = a[sortColumn];
    const bVal = b[sortColumn];
    return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
  };

  const sortedData = [...data].sort(compareColumns);

  const handleSortToggle = (columnKey: ColumnKey) => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    setSortColumn(columnKey);
  };

  return (
    <>
      <Title text="Capitais" />
      <div className="w-full">
        <Header sortDirection={sortDirection} onSortToggle={handleSortToggle} />
        {sortedData.map((row) => (
          <Row key={row.min} row={row} />
        ))}
      </div>
    </>
  );
};

export default Summary;
