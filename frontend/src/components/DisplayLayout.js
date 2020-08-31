import React from 'react';
import propTypes from 'prop-types';

const DisplayLayout = ({content})=>(
    <div className='container'>
        <div className='row my-5'>
            {content}
        </div>
    </div>
);

DisplayLayout.propTypes ={
    content: propTypes.object.isRequired
};

export default DisplayLayout;