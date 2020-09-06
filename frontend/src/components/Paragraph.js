import React from 'react';
import propTypes from 'prop-types';

const Paragraph = ({text, imgUrl,imgCaption})=>(
    <>
        <label>{text.replace('is',<a href='#'>is</a>)}</label>
        <img src={imgUrl}/>
        <label>{imgCaption}</label>
    </>
);

Paragraph.propTypes ={
    text: propTypes.string,
    imgUrl: propTypes.string,
    imgCaption: propTypes.string,
    links: propTypes.array
};

export default Paragraph;