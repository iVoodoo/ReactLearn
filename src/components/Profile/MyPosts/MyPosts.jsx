import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElements = props.postData.map(
        post => <Post message={post.message} likesCount={post.likeCount}/>
    );

    let newPostElement = React.createRef();

    let addPost = () => {
        debugger;
        let text = newPostElement.current.value; 
        props.addPost(text);
    }

    return (
            <div className={s.post__container}>
                MY posts
                <div className={s.post__creation}>
                    <div className={s.post__creation__text}>
                        <textarea ref={newPostElement} cols="30" rows="10"></textarea>
                    </div>
                    <div className={s.post__creation__button}>
                        <button onClick={addPost}>Add posts</button>
                    </div>
                </div>
                {postElements}
            </div>
       
    );
}

export default MyPosts;