import React from 'react';
import propTypes from 'prop-types';

const ArticlePage = ({match}) =>{
    const title = match.params.title;
    return(  
        <div>
            This will show each article {title}
        </div>
    );

};

ArticlePage.propTypes = {
    match: propTypes.object.isRequired
};

export default ArticlePage;