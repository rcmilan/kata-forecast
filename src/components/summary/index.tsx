import React, { useState } from "react";
import { BsSortNumericUp, BsSortNumericDown } from "react-icons/bs";
import { RowData } from "./types";

const minMaxColumn = "w-1/5";
const cityNameColumn = "w-3/5";

interface TableRowProps {
  data: RowData;
}

interface TableProps {
  data: RowData[];
}

type ColumnKey = "min" | "max";

interface TableHeaderProps {
  sortDirection: "asc" | "desc";
  onSortToggle: (column: ColumnKey) => void;
}

interface SubtitleProps {
  text: string;
}

const Subtitle = ({ text }: SubtitleProps) => (
  <div>
    <h2 className="text-white text-3xl font-semibold">{text}</h2>
  </div>
);

const ContentHeader: React.FC<TableHeaderProps> = ({
  sortDirection,
  onSortToggle,
}) => {
  const getSortIcon = () => {
    const IconComponent =
      sortDirection === "asc" ? BsSortNumericDown : BsSortNumericUp;
    return <IconComponent className="w-4 h-4 inline-block mr-1" />;
  };

  const HeaderColumn: React.FC<{ columnKey: ColumnKey }> = ({ columnKey }) => (
    <div
      className={`${minMaxColumn} cursor-pointer flex items-center`}
      onClick={() => onSortToggle(columnKey)}
    >
      {getSortIcon()}
      {columnKey}
    </div>
  );

  return (
    <div className="flex justify-between items-center px-4 py-2 text-black-100 text-sm font-small tracking-wider">
      <HeaderColumn columnKey="min" />
      <HeaderColumn columnKey="max" />
      <div className={cityNameColumn}></div>
    </div>
  );
};

const ContentRow: React.FC<TableRowProps> = ({ data }) => (
  <div className="flex justify-between items-center font-medium py-2 px-4">
    <div className={`${minMaxColumn}`}>{data.min}</div>
    <div className={`${minMaxColumn}`}>{data.max}</div>
    <div className={`${cityNameColumn}`}>{data.cityName}</div>
  </div>
);

const Summary: React.FC<TableProps> = ({ data }) => {
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
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
      <Subtitle text="Capitais" />
      <div className="w-full">
        <ContentHeader
          sortDirection={sortDirection}
          onSortToggle={handleSortToggle}
        />
        {sortedData.map((item) => (
          <ContentRow key={item.min} data={item} />
        ))}
      </div>
    </>
  );
};

export default Summary;
