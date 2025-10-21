import React from 'react';
import PropTypes from 'prop-types';

import './ButtonSquare.css';

const ButtonSquareComponent = ({icon}) => {
    return (
        <div className='button_square'>
            <img src={icon}/>
        </div>
    )
};

ButtonSquareComponent.propTypes = {
    icon: PropTypes.object
};

export default ButtonSquareComponent;