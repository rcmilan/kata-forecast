import React from "react";
import { useState } from "react";
import { BsSortAlphaDown, BsSortAlphaUp } from "react-icons/bs";
import ContentRow from "./contentRow";
import { TableProps } from "./Types";

const Table: React.FC<TableProps> = ({ data }) => {
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const sortedData = [...data].sort((a, b) => {
    if (sortDirection === "asc") {
      return a.column1.localeCompare(b.column1);
    } else {
      return b.column1.localeCompare(a.column1);
    }
  });

  return (
    <div className="w-full md:w-1/2">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-200 text-gray-600 text-sm font-medium tracking-wider">
        <div
          className="w-1/3 cursor-pointer flex items-center"
          onClick={() =>
            setSortDirection(sortDirection === "asc" ? "desc" : "asc")
          }
        >
          {sortDirection === "asc" ? (
            <BsSortAlphaDown className="w-4 h-4 inline-block mr-1" />
          ) : (
            <BsSortAlphaUp className="w-4 h-4 inline-block mr-1" />
          )}
          Column 1
        </div>
        <div
          className="w-1/3 cursor-pointer flex items-center"
          onClick={() =>
            setSortDirection(sortDirection === "asc" ? "desc" : "asc")
          }
        >
          {sortDirection === "asc" ? (
            <BsSortAlphaDown className="w-4 h-4 inline-block mr-1" />
          ) : (
            <BsSortAlphaUp className="w-4 h-4 inline-block mr-1" />
          )}
          Column 2
        </div>
        <div className="w-1/3">Column 3</div>
      </div>
      {sortedData.map((item) => (
        <ContentRow key={item.column1} data={item} />
      ))}
    </div>
  );
};

export default Table;
