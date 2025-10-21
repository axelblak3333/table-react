import React from 'react';
import PropTypes from 'prop-types';

import './Breadcrumbs.css';

const BreadcrumbsComponent = ({paths}) => {
    return (
        <div className='breadcrumbs'>
            {paths.map((path, index) => (
                <>
                    {index > 0 ? <div key={index} className='breadcrumbs_del'>/</div> : ''}
                    <div key={index} className='breadcrumbs_path'>
                        {path}
                    </div>
                </>
            ))}
        </div>
    )
};

BreadcrumbsComponent.propTypes = {
    paths: PropTypes.array
};

export default BreadcrumbsComponent;