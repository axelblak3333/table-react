import React from 'react';
import PropTypes from 'prop-types';

import './TableHeader.css';
import TableHeaderColumnComponent from "../TableHeaderColumn/TableHeaderColumn";

const TableHeaderComponent = ({sort={}, setSort={}, table_header_str}) => {
    return (
        <div className='table_header'>
            {table_header_str.map((col, index) => (
                <TableHeaderColumnComponent sort={sort} setSort={setSort} key={index} col={col} />
            ))}
        </div>
    )
};

export default TableHeaderComponent;