import { TableRowProps } from "../types";


const Index: React.FC<TableRowProps> = ({ data }) => {
  return (
    <div className="flex justify-between items-center border-b border-gray-200 py-2 px-4">
      <div className="w-1/3">{data.column1}</div>
      <div className="w-1/3">{data.column2}</div>
      <div className="w-1/3">{data.column3}</div>
    </div>
  );
};

export default Index;
