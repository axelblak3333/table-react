import React from 'react';
import PropTypes from 'prop-types';

import './FooterLink.css';

const FooterLinkComponent = ({link, title}) => {
    return (
        <a href={link} className='footer_link'>
            {title}
        </a>
    )
};

FooterLinkComponent.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string
};

export default FooterLinkComponent;