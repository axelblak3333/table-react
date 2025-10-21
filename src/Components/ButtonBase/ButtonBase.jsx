import React from 'react';
import PropTypes from 'prop-types';

import './ButtonBase.css';

const ButtonBaseComponent = ({text, icon={}}) => {
    return (
        <div className='button_base'>
            <img src={icon}/>
            {text}
        </div>
    )
};

ButtonBaseComponent.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.object
};

export default ButtonBaseComponent;