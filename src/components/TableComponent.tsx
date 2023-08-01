import React, { ReactNode } from 'react';
import Table from 'react-bootstrap/Table';

type TableType = {
  title: string;
  listThead: string[];
  children: ReactNode;
};

const TableComponent: React.FC<TableType> = ({ title, listThead, children }) => {
  return (
    <>
      <h1 className="m-5 text-center text-primary">{title}</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            {listThead.map((el, i) => (
              <th key={i} className="text-center">
                {el}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </Table>
    </>
  );
};

export default TableComponent;
