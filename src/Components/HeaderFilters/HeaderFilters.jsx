import React from 'react';
import PropTypes from 'prop-types';

import './HeaderFilters.css';
import ButtonSquareComponent from "../ButtonSquare/ButtonSquare";

import filterIcon from '../../assets/icons/filter.svg';
import settingsIcon from '../../assets/icons/settings.svg';
import PlusIcon from '../../assets/icons/plus.svg';
import SearchComponent from "../Search/Search";
import ButtonBaseComponent from "../ButtonBase/ButtonBase";

const HeaderFiltersComponent = () => {
    return (
        <div className='header_filters'>
            <SearchComponent/>
            <div className="header_filters_del"></div>
            <div className="header_filters_buttons">
                <ButtonSquareComponent icon={settingsIcon}/>
                <ButtonSquareComponent icon={filterIcon}/>
            </div>
            <div className="header_filters_right">
                <ButtonBaseComponent text="Добавить пользователя" icon={PlusIcon}/>
            </div>
        </div>
    )
};

export default HeaderFiltersComponent;