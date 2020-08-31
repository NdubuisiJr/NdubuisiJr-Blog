import React from 'react';
import propTypes from 'prop-types';
import '../css/main.css';

const ArticleCard = ({title, displayText, imgUrl})=>(
    <div className="col-10 mx-auto col-lg-6 img-section my-3">
        <div className="card">
            <img className="card-img-top" src={imgUrl} alt="Card image" style={{width:'100%'}}/>
            <div className="card-body">
                <div className="">
                    <div className="d-flex justify-content-center my-4">
                        <h3>{title}</h3>
                        <p>{displayText}</p>
                    </div>
                    <div className="check d-flex justify-content-around my-4">
                        <button type="button">Reservation</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

ArticleCard.propTypes = {
    title: propTypes.string.isRequired,
    displayText: propTypes.string.isRequired,
    imgUrl: propTypes.string.isRequired
};

export default ArticleCard;