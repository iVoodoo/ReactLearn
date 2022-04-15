import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElements = props.posts.map(
        post => <Post message={post.message} likesCount={post.likeCount}/>
    );    

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    
    let onPostChange = () => {
        let text = newPostElement.current.value; 
        props.updateNewPostText(text);
    }

    return (
            <div className={s.post__container}>
                MY posts
                <div className={s.post__creation}>
                    <div className={s.post__creation__text}>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                    </div>
                    <div className={s.post__creation__button}>
                        <button onClick={onAddPost}>Add posts</button>
                    </div>
                </div>
                {postElements}
            </div>
       
    );
}

export default MyPosts;