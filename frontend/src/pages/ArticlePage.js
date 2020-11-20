import React from 'react';
import propTypes from 'prop-types';
import data from '../data';
import NotFound from '../components/NotFound';
import Header from '../components/Header';
import DisplayLayout from '../components/DisplayLayout';
import Paragraph from '../components/Paragraph';
import Comment from '../components/comment';

const ArticlePage = ({match}) =>{
    const title = match.params.title;
    const articleToDisplay = data.find(article=>article.title===title);
    if(!articleToDisplay)
        return <NotFound/>;
    return(
        <>
        <Header header={title} imageCaption={articleToDisplay.imgCaption} 
            imageUrl={articleToDisplay.imgUrl} />
        <DisplayLayout content={
            articleToDisplay.paragraphs.map((paragraph,key)=>{
                return (
                    <Paragraph key={key} text={paragraph.text}
                        imgUrl={paragraph.imgUrl} imgCaption={paragraph.imgCaption} 
                        links={paragraph.links}/>
                );
            })
        }/>
        <Comment comments={articleToDisplay.comments}/>
        </>
    );

};

ArticlePage.propTypes = {
    match: propTypes.object.isRequired
};

export default ArticlePage;