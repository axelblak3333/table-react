import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './Pagination.css';
import PaginationButtonComponent from "./PaginationButton/PaginationButton";

const PaginationComponent = () => {
    const [currectPage, setCurrectPage] = useState(1)

    var pagination_config = {
        elements: 20,
        el_per_page: 2
    }

    var pagination_pages = Math.round(pagination_config.elements / pagination_config.el_per_page);
    var pagination_end = [];
    var pagination_start_calc = 0;

    if (currectPage <= 3){
        pagination_end.push(1)

        if (pagination_pages >= 2){
            pagination_end.push(2)
        }

        if (pagination_pages >= 3){
            pagination_end.push(3)
        }

        if (pagination_pages >= 4){
            pagination_end.push(4)
        }

        if (pagination_pages >= 5){
            pagination_end.push(5)
        }
    }else{
        if (currectPage > (pagination_pages - 3)){
            if ((pagination_pages - 4) > 0){
                pagination_end.push(pagination_pages - 4)
            }

            if ((pagination_pages - 3) > 0){
                pagination_end.push(pagination_pages - 3)
            }

            if ((pagination_pages - 2) > 0){
                pagination_end.push(pagination_pages - 2)
            }

            if ((pagination_pages - 1) > 0){
                pagination_end.push(pagination_pages - 1)
            }

            pagination_end.push(pagination_pages)
        }else{
            if (currectPage - 2 > 0){
                pagination_end.push(currectPage - 2)
                pagination_start_calc++;
            }

            if (currectPage - 1 > 0){
                pagination_end.push(currectPage - 1)
            }

            if (currectPage > 0){
                pagination_end.push(currectPage)
            }

            if (currectPage + 1 <= pagination_pages){
                pagination_end.push(currectPage + 1)
            }

            if (currectPage + 2 <= pagination_pages){
                pagination_end.push(currectPage + 2)
            }
        }

    }

    return (
        <>
            <div className='pagination'>
                <PaginationButtonComponent setCurrectPage={setCurrectPage} currectPage={currectPage} id={'left'}/>
                <PaginationButtonComponent has_add={true} has_active={1 === currectPage} setCurrectPage={setCurrectPage}
                                           currectPage={currectPage} pagination_pages={pagination_pages} id={1}/>
                <PaginationButtonComponent has_add={true} currectPage={currectPage} pagination_pages={pagination_pages}
                                           id={'...'}/>
                {pagination_end.map((id, index) => (
                    <PaginationButtonComponent has_active={id === currectPage} setCurrectPage={setCurrectPage} id={id}/>
                ))}
                <PaginationButtonComponent currectPage={currectPage} pagination_pages={pagination_pages} id={'...'}/>
                <PaginationButtonComponent has_add={true} has_active={pagination_pages === currectPage}
                                           setCurrectPage={setCurrectPage} currectPage={currectPage}
                                           pagination_pages={pagination_pages} id={pagination_pages}/>
                <PaginationButtonComponent setCurrectPage={setCurrectPage} currectPage={currectPage}
                                           pagination_pages={pagination_pages} id={'right'}/>
            </div>
            <div className="pagination_info">Показано {((currectPage - 1) * pagination_config.el_per_page) + 1}-{(currectPage) * pagination_config.el_per_page} из {pagination_pages} пользователей</div>
        </>
    )
};

export default PaginationComponent;