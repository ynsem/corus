import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import * as L from 'leda';

const Table = ({ onClick, dataTemplate, tableData }) => {
  const [table, setTable] = useState([]);

  useEffect(() => {
    setTable(tableData);
  }, [tableData]);

  const onClickData = (e) => {
    e.target.style.backgroundColor = 'rgb(111, 128, 136)';
    onClick(e.target);
  };

  const getRow = (row = {}) => (
    <L.Tr key={row.rightId || row.id}>
      <L.Td
        id={row.rightId || row.id}
        onClick={(e) => {
          onClickData(e);
        }}
      >
        {dataTemplate(row) || ''}
      </L.Td>
    </L.Tr>
  );

  const getTable = () => table.map((row) => getRow(row));

  return (
    <L.Table className="highlight">
      <L.TBody>{getTable()}</L.TBody>
    </L.Table>
  );
};

Table.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
  dataTemplate: PropTypes.func,
};

Table.defaultProps = {
  tableData: [],
  onClick: null,
  dataTemplate: null,
};

export default Table;
