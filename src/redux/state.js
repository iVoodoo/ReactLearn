let rerenderEntrieTree = () => {
  console.log('state is changed');
}


  let state = {

    dialogPage :{
        dialogData: [
            {id: 1, name: "user 1"}, 
            {id: 2, name: "user 2"},
            {id: 3, name: "user 3"},
            {id: 4, name: "user 4"},
            {id: 5, name: "user 5"}
          ],
          
        messageData: [
            {id: 1, message: "Hi"}, 
            {id: 2, message: "wassup maaan"}
          ]
    },
    
    profilePage: {
        postData: [
            {id: 1, message: "Hey, how are u?", likeCount: 12}, 
            {id: 2, message: "It's my first post", likeCount: 10}
     ],
        newPostText:"abobUS"
    }
  };

  window.state = state;

  export const addPost = () => {
    let newPost = {
      id: 5,
      message: state.profilePage.newPostText, 
      likeCount: 0
    };

    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntrieTree(state);
  }

  export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntrieTree(state);
  }

  export const subscribe = (observer) => {
    rerenderEntrieTree = observer;
  }


  export default state;