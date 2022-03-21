let store = {
  _state: {

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
  },
  getState() {
    return this._state;
  },
  _callSubscriber(){
    console.log('state is changed');
  },
  addPost(){
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText, 
      likeCount: 0
    };

    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText){
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer){
    this._callSubscriber = observer;
  }
}

export default store;
window.store = store;
 