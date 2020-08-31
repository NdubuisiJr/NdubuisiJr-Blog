import React from 'react';
import propTypes from 'prop-types';
import data from '../data';
import NotFound from '../components/NotFound';
import Header from '../components/Header';

const ArticlePage = ({match}) =>{
    const title = match.params.title;
    const articleToDisplay = data.find(article=>article.title===title);
    if(!articleToDisplay)
        return <NotFound/>;
    return(
        <>
        <Header header={title} imageUrl={articleToDisplay.imgUrl} />
        <div className='container'>
            <div className='row my-5'></div>
        </div>
        </>
    );

};

ArticlePage.propTypes = {
    match: propTypes.object.isRequired
};

export default ArticlePage;