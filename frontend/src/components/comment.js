import React, {useState} from 'react';
import propTypes from 'prop-types';
import '../css/comment.css';

const Comment = ({comments})=>{
    const [commentValue, setCommentValue]=useState('');
    const [nameValue, setNameValue]=useState('');

    const commentChanged = (e) => {
        setCommentValue(e.target.value);
    };
    const nameChanged = (e) => {
        setNameValue(e.target.value);
    };
    const commentClicked = ()=>{
        //save comment
        comments.push({
            name:nameValue,
            comment:commentValue
        });
    };

    const currentComments = comments!=undefined? comments.map(comment=>{
        return (
            <div key={comment.comment}>
                <div>{comment.name}</div>
                <div>{comment.comment}</div>
            </div>
        );
    }):<div></div>;
    return (
        <>
        <h3>Comments</h3>
        <div>
            <input placeholder='name' value={nameValue} onChange={nameChanged}/>
            <textarea placeholder='comment' value={commentValue} onChange={commentChanged}/>
            <button onClick={commentClicked}>comment</button>
        </div>
        {currentComments}
        </>
        
    );
};

Comment.propTypes = {
    comments:propTypes.array
};

export default Comment;