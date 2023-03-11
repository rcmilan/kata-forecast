import React from "react";
import { useState } from "react";
import ContentHeader from "./contentHeader";
import ContentRow from "./contentRow";
import { TableProps } from "./types";

const Index: React.FC<TableProps> = ({ data }) => {
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const sortedData = [...data].sort((a, b) => {
    if (sortDirection === "asc") {
      return a.column1.localeCompare(b.column1);
    } else {
      return b.column1.localeCompare(a.column1);
    }
  });

  const handleSortToggle = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  return (
    <div className="w-full">
      <ContentHeader
        sortDirection={sortDirection}
        onSortToggle={handleSortToggle}
      />
      {sortedData.map((item) => (
        <ContentRow key={item.column1} data={item} />
      ))}
    </div>
  );
};

export default Index;
