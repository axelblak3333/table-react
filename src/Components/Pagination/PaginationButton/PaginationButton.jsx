import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import './PaginationButton.css';

import leftStrikeIcon from '../../../assets/icons/left_strike.svg';

const PaginationButtonComponent = ({id, has_active, has_add = false, setCurrectPage = {}, currectPage, pagination_pages}) => {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        if (id === '...'){
            if (!has_add){
                if (currectPage >= (pagination_pages-2)){
                    setVisible(false);
                }else{
                    setVisible(true);
                }

                if (pagination_pages < 6){
                    setVisible(false);
                }
            }else{
                if (currectPage >= 4){
                    setVisible(true);
                }else{
                    setVisible(false);
                }

                if (pagination_pages < 6){
                    setVisible(false);
                }
            }
        }

        if (id === 1 && has_add){
            if (currectPage === 1){
                setVisible(false);
            }else{
                if (currectPage >= 4){
                    setVisible(true);
                }else{
                    setVisible(false);
                }
            }

            if (pagination_pages < 6){
                setVisible(false);
            }
        }

        if (id === pagination_pages && has_add){
            if (currectPage === pagination_pages){
                setVisible(false);
            }else{
                if (currectPage > (pagination_pages-3)){
                    setVisible(false);
                }else{
                    setVisible(true);
                }
            }

            if (pagination_pages < 6){
                setVisible(false);
            }
        }
    }, [currectPage])

    var handleClick = () => {
        if (id !== '...'){
            setCurrectPage(id);
        }
    };

    if (id === 'left'){
        handleClick = () => {
            if (currectPage > 1){
                setCurrectPage(currectPage-1);
            }
        };
        id = <img src={leftStrikeIcon}/>
    }

    if (id === 'right'){
        handleClick = () => {
            if (currectPage < pagination_pages){
                setCurrectPage(currectPage+1);
            }
        };
        id = <img className='image_rotate_180' src={leftStrikeIcon}/>
    }

    return (
        <>
            {visible ? (<div className={'pagination_button' + (has_active ? ' active' : '')} onClick={handleClick}>
                {id}
            </div>) : ''}
        </>
    )
};

export default PaginationButtonComponent;