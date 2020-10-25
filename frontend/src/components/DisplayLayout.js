import React from 'react';
import propTypes from 'prop-types';

const DisplayLayout = ({content})=>(
    <div>{content}</div>
);

DisplayLayout.propTypes = {
    content: propTypes.any.isRequired
};

export default DisplayLayout;