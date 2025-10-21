import React, {useState, useEffect, useRef} from 'react';
import "./Main.css";
import BreadcrumbsComponent from "../../Components/Breadcrumbs/Breadcrumbs";
import TitleComponent from "../../Components/Title/Title";
import HeaderFiltersComponent from "../../Components/HeaderFilters/HeaderFilters";
import TableComponent from "../../Components/Table/Table";
import Pagination from "../../Components/Pagination/Pagination";
import FooterComponent from "../../Components/Footer/Footer";

const MainPage = () => {
    return (
        <div className="main_page">
            <BreadcrumbsComponent paths={['Данные', 'Пользователи']} />
            <TitleComponent title="Пользователи" />
            <HeaderFiltersComponent />
            <TableComponent />
            <Pagination />
            <FooterComponent />
            <div className="main_page_test">@test</div>
        </div>
    );
};

export default MainPage;