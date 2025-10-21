import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import './TableHeaderColumn.css';
import strikeOffIcon from '../../../assets/icons/strike_table_off.svg';
import strikeOnIcon from '../../../assets/icons/strike_table_on.svg';
import infoIcon from '../../../assets/icons/info.svg';

const TableHeaderColumnComponent = ({sort={}, setSort={}, col}) => {
    const [statusSort, setStatusSort] = useState(0);

    const changeSort = () => {
        if (statusSort === 2){
            setSort(null);
            setStatusSort(0)
        }else{
            var sort_direction = 'asc';
            if (statusSort === 1){
                sort_direction = 'desc';
            }

            setSort(col.slug + '_' + sort_direction);
            setStatusSort(statusSort+1)
        }
    }

    useEffect(() => {
        if (sort && (sort.split('_')[0] !== col.slug)){
            setStatusSort(0);
        }
    }, [sort]);

    return (
        <div className={'table_header_col type_sort_' + (statusSort)}>
            <img className="table_header_col_sort" src={statusSort < 1 ? strikeOffIcon : strikeOnIcon} onClick={changeSort}/>
            {col.name}
            {col.hasInfo ? (<img className="table_header_col_has_info" src={infoIcon}/>) : ''}
        </div>
    )
};

export default TableHeaderColumnComponent;