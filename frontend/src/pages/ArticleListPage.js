import React from 'react';
import Header from '../components/Header';
import data from '../data';
import ArticleCard from '../components/ArticleCard';
import pix2 from '../images/pix2.png';
import DisplayLayout from '../components/DisplayLayout';
import '../css/articleList.css';

const ArticleListPage = ()=>{
    // GetData

    return(
    <>
        <Header header='Articles' imageUrl={pix2}/>
        <DisplayLayout content={data.map(article => {
            return (
                <ArticleCard key={article.title} imgUrl={article.imgUrl}
                    title={article.title} displayText={`${article.paragraphs[0].text.substring(0,125)}...`}/>
            );
        })}
        />
    </>
    );
};

export default ArticleListPage;