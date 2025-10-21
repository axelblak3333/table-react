import React from 'react';
import PropTypes from 'prop-types';

import './Footer.css';
import FooterLinkComponent from "./FooterLink/FooterLink";

const FooterComponent = () => {
    var footer_links = [
        {
            title: 'Информация',
            link: '/'
        },
        {
            title: 'Пользователи',
            link: '/'
        },
        {
            title: 'Реклама',
            link: '/'
        },
        {
            title: 'Условия',
            link: '/'
        },
        {
            title: 'Поддержка',
            link: '/'
        },
        {
            title: 'Клиенты',
            link: '/'
        },
        {
            title: 'Настройки Куки',
            link: '/'
        },
        {
            title: 'Главная',
            link: '/'
        },
    ]

    return (
        <div className='footer'>
            {footer_links.map((link, index) => (
                <FooterLinkComponent link={link.link} title={link.title} />
            ))}
        </div>
    )
};

export default FooterComponent;