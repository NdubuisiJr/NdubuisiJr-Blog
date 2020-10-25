import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

const ArticleCard = ({title, displayText, imgUrl})=>(
    <>
        <img src={imgUrl} alt="Card image" style={{width:'100%'}}/>
        <div>
            <h3>{title}</h3>
            <p>{displayText}</p>
        </div>
        <div>
            <Link type="button" to={`/articles/${title}`}>Read more...</Link>
        </div>
    </>
);

ArticleCard.propTypes = {
    title: propTypes.string.isRequired,
    displayText: propTypes.string.isRequired,
    imgUrl: propTypes.string.isRequired
};

export default ArticleCard;