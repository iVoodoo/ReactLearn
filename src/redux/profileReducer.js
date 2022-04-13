const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    postData: [
        {id: 1, message: "Hey, how are u?", likeCount: 12}, 
        {id: 2, message: "It's my first post", likeCount: 10}
    ],
    newPostText:"abobUS"
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText, 
                likeCount: 0
              };
              
              state.postData.push(newPost);
              state.newPostText = "";
              return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({
      type: UPDATE_NEW_POST_TEXT, newText:text})

export default profileReducer;