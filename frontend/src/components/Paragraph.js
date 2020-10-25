import React from 'react';
import propTypes from 'prop-types';
import reactStringReplace from 'react-string-replace';

const Paragraph = ({text, imgUrl,imgCaption,links})=>{
    let replaced=text;   
    for (let index = 0; index < links.length; index++) {
        const link = links[index];
        replaced = reactStringReplace(replaced,link.text,(match,number)=>(
            <a href={link.link} key={match+number}>{match}</a>
        ));
    }
    return(
    <>
        <div>{replaced} </div>
        <img src={imgUrl}/>
        <label>{imgCaption}</label>
    </>
    );
};


Paragraph.propTypes ={
    text: propTypes.string,
    imgUrl: propTypes.string,
    imgCaption: propTypes.string,
    links: propTypes.array
};

export default Paragraph;