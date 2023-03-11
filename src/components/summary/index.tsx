import React, { useState, useMemo } from "react";
import Header from "./summaryHeader";
import Row from "./summaryRow";
import Title from "./summaryTitle";
import { ColumnKey, RowData, SortDirection } from "./types";

interface Props {
  data: RowData[];
}

const Summary: React.FC<Props> = ({ data }) => {
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [sortColumn, setSortColumn] = useState<ColumnKey>("min");

  const handleSortToggle = (columnKey: ColumnKey) => {
    setSortDirection((prevSortDirection) =>
      prevSortDirection === "asc" ? "desc" : "asc"
    );
    setSortColumn(columnKey);
  };

  const sortedData = useMemo(() => {
    const compareColumns = (a: RowData, b: RowData) => {
      const aVal = a[sortColumn];
      const bVal = b[sortColumn];
      return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
    };

    return [...data].sort(compareColumns);
  }, [data, sortColumn, sortDirection]);

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
