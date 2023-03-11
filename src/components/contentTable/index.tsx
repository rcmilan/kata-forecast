import React, { useState } from "react";
import { BsSortNumericUp, BsSortNumericDown } from "react-icons/bs";
import { largeColumn, smallColumn } from "./constants";
import { TableProps, TableRowProps } from "./types";

const TableHeaderCell: React.FC<{
  label: string;
  onClick: () => void;
  sortDirection: "asc" | "desc";
}> = ({ label, onClick, sortDirection }) => {
  return (
    <div
      className={`${smallColumn} cursor-pointer flex items-center`}
      onClick={onClick}
    >
      {sortDirection === "asc" ? (
        <BsSortNumericUp className="w-4 h-4 inline-block mr-1" />
      ) : (
        <BsSortNumericDown className="w-4 h-4 inline-block mr-1" />
      )}
      {label}
    </div>
  );
};

const TableRow: React.FC<TableRowProps> = ({ data }) => {
  return (
    <div className="flex justify-between items-center font-medium py-2 px-4">
      <div className={`${smallColumn}`}>{data.column1}</div>
      <div className={`${smallColumn}`}>{data.column2}</div>
      <div className={`${largeColumn}`}>{data.column3}</div>
    </div>
  );
};

const Summary: React.FC<TableProps> = ({ data }) => {
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const sortedData = [...data].sort((a, b) =>
    sortDirection === "asc" ? a.column1 - b.column1 : b.column1 - a.column1
  );

  const handleSortToggle = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center px-4 py-2 text-black-100 text-sm font-small tracking-wider">
        <TableHeaderCell
          label="Min"
          onClick={handleSortToggle}
          sortDirection={sortDirection}
        />
        <TableHeaderCell
          label="Max"
          onClick={handleSortToggle}
          sortDirection={sortDirection}
        />
        <div className={largeColumn}></div>
      </div>
      {sortedData.map((item) => (
        <TableRow key={item.column1} data={item} />
      ))}
    </div>
  );
};

export default Summary;
