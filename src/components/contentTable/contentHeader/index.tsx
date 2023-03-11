import React from "react";
import { BsSortAlphaDown, BsSortAlphaUp } from "react-icons/bs";
import { largeColumn, smallColumn } from "../constants";
import { TableHeaderProps } from "../types";

const Index: React.FC<TableHeaderProps> = ({ sortDirection, onSortToggle }) => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-gray-200 text-gray-600 text-sm font-medium tracking-wider">
      <div
        className={`${smallColumn} cursor-pointer flex items-center`}
        onClick={onSortToggle}
      >
        {sortDirection === "asc" ? (
          <BsSortAlphaDown className="w-4 h-4 inline-block mr-1" />
        ) : (
          <BsSortAlphaUp className="w-4 h-4 inline-block mr-1" />
        )}
        Column 1
      </div>
      <div
        className={`${smallColumn} cursor-pointer flex items-center`}
        onClick={onSortToggle}
      >
        {sortDirection === "asc" ? (
          <BsSortAlphaDown className="w-4 h-4 inline-block mr-1" />
        ) : (
          <BsSortAlphaUp className="w-4 h-4 inline-block mr-1" />
        )}
        Column 2
      </div>
      <div className={largeColumn}>Column 3</div>
    </div>
  );
};

export default Index;
