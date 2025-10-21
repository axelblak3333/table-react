import React from 'react';
import PropTypes from 'prop-types';

import './TableRows.css';
import TableRowsColumnComponent from "../TableRowsColumn/TableRowsColumn";

const TableRowsComponent = ({sethasOpenMenu, hasOpenMenu, table_header_str, table_rows_str}) => {
    return (
        <div className='table_rows'>
            {table_rows_str.map((row, index_r) => (
                <div className='table_row'>
                    {table_header_str.map((col, index) => (
                        <TableRowsColumnComponent index_r={index_r} sethasOpenMenu={sethasOpenMenu} hasOpenMenu={hasOpenMenu} key={index} value={row[col.slug]} hConfig={col}/>
                    ))}
                </div>
            ))}
        </div>
    )
};

export default TableRowsComponent;