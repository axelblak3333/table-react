import React from 'react';
import PropTypes from 'prop-types';

import './Title.css';

const TitleComponent = ({title}) => {
    return (
        <h1 className='title'>
            {title}
        </h1>
    )
};

TitleComponent.propTypes = {
    title: PropTypes.string
};

export default TitleComponent;