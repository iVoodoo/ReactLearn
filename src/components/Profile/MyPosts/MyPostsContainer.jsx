import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import store from '../../../redux/reduxeStore';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action)
                }

                return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                    posts={state.profileReducer.postData}
                    newPostText={state.profileReducer.newPostText} />
                    }
            }
        </StoreContext.Consumer>
    )

}

export default MyPostsContainer;