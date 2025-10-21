import React from 'react';
import PropTypes from 'prop-types';

import './TableRowsColumnEdit.css';

import okIcon from '../../../../assets/icons/ok.svg';

const TableRowsColumnEditComponent = () => {
    return (
        <div className='table_rows_col_select'>
            <div className='table_rows_col_select_list_one'>
                <img src={okIcon}/>
                Дизайнер
            </div>
            <div className='table_rows_col_select_list_one'>
                <img src={okIcon}/>
                Front End разработчик
            </div>
            <div className='table_rows_col_select_list_one'>
                <img src={okIcon}/>
                Back End разработчик
            </div>
        </div>
    )
};

export default TableRowsColumnEditComponent;