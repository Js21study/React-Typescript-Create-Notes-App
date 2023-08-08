import React, { ReactNode } from 'react';

type TableType = {
  title: string;
  listThead: string[];
  children: ReactNode;
};

const TableComponent: React.FC<TableType> = ({ title, listThead, children }) => {
  return (
    <>
      <h1 className="m-5 text-center text-3xl text-blue-700">{title}</h1>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {listThead.map((el, i) => (
              <th key={i} scope="col" className="text-center px-6 py-3">
                {el}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </>
  );
};

export default TableComponent;
