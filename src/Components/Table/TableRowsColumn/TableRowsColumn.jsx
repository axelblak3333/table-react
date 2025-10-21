import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import './TableRowsColumn.css';
import TableRowsColumnEditComponent from "./TableRowsColumnEdit/TableRowsColumnEdit";

import selectOpenIcon from '../../../assets/icons/select_open.svg';

const TableRowsColumnComponent = ({index_r, hasOpenMenu, sethasOpenMenu, value, hConfig}) => {
    const [OpenSelect, setOpenSelect] = useState(false);

    const OpenSelectMenu = () => {
        setOpenSelect(!OpenSelect)
        sethasOpenMenu(hConfig.slug+'_'+index_r);
    }

    useEffect(()=>{
        if (hasOpenMenu !== hConfig.slug+'_'+index_r){
            setOpenSelect(false);
        }

    }, [hasOpenMenu, ])

    return (
        <div className='table_rows_col'>
            <div className={"lab " + (OpenSelect ? 'active': '')} onClick={OpenSelectMenu}>
                {value}
                {OpenSelect ? <img src={selectOpenIcon}/>: ''}
            </div>
            {hConfig.addMenu ? <div className="table_rows_col_menu"><span></span><span></span><span></span></div> : ''}

            {OpenSelect ? <TableRowsColumnEditComponent /> : ''}
        </div>
    )
};

export default TableRowsColumnComponent;