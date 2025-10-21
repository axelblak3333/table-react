import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import './Table.css';
import TableHeaderComponent from "./TableHeader/TableHeader";
import TableRows from "./TableRows/TableRows";

const TableComponent = (table_structure) => {
    const [sort, setSort] = useState('');
    const [sortedData, setSortedData] = useState([]);
    const [hasOpenMenu, sethasOpenMenu] = useState('');

    table_structure = {
        header:[
            {
                name: "ID",
                slug: 'ID',
                addMenu: true
            },
            {
                name: "Роль",
                slug: 'role',
                hasInfo: true
            },
            {
                name: "Имя",
                slug: 'name'
            },
            {
                name: "Логин",
                slug: 'login'
            },
            {
                name: "Должность",
                slug: 'job'
            },
            {
                name: "Контакты",
                slug: 'contact'
            },
            {
                name: "Почта",
                slug: 'email'
            },
            {
                name: "Телефон",
                slug: 'phone'
            },
            {
                name: "Город",
                slug: 'city'
            },
        ],
        rows:[
            {
                'ID': 13619,
                'role': 'Админ',
                'name': 'Александр',
                'login': 'someDesigner',
                'job': 'Дизайнер',
                'contact': '@test',
                'email': 'test@test.ru',
                'phone': '+7 99999999999',
                'city': 'Нижний Новгород'
            },
            {
                'ID': 13,
                'role': 'Админ1',
                'name': 'Александр1',
                'login': 'someDesigner1',
                'job': 'Дизайнер1',
                'contact': '@test1',
                'email': 'test@test.ru1',
                'phone': '+7 999999999991',
                'city': 'Нижний Новгород1'
            }
        ]
    }

    const sortData = (data, sortField, sortDirection) => {
        return [...data].sort((a, b) => {
            const aValue = a[sortField];
            const bValue = b[sortField];

            if (sortField === 'ID') {
                return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
            }

            if (typeof aValue === 'string' && typeof bValue === 'string') {
                return sortDirection === 'asc'
                    ? aValue.localeCompare(bValue)
                    : bValue.localeCompare(aValue);
            }

            return 0;
        });
    };

    useEffect(() => {
        console.log(sort)

        if (!sort) {
            setSortedData(table_structure.rows);
            return;
        }

        const [sortField, sortDirection] = sort.split('_');

        const sortedRows = sortData(table_structure.rows, sortField, sortDirection);
        setSortedData(sortedRows);
    }, [sort]);

    return (
        <div className='table'>
            <TableHeaderComponent sort={sort} setSort={setSort} table_header_str={table_structure.header} />
            <TableRows hasOpenMenu={hasOpenMenu} sethasOpenMenu={sethasOpenMenu} table_header_str={table_structure.header} table_rows_str={sortedData} />
        </div>
    )
};

export default TableComponent;