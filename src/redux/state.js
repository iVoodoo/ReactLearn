const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

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
        ],
        
        newMessageBody: ""
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
  subscribe(observer){
    this._callSubscriber = observer;
  },
  dispatch(action){ // {type: 'ADD-POST'}
    // debugger;
    if(action.type === ADD_POST){
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText, 
        likeCount: 0
      };
      
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state); 
    }
    else if (action.type === UPDATE_NEW_POST_TEXT){
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
    else if (action.type === UPDATE_NEW_MESSAGE_BODY){
      this._state.dialogPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    }
    else if (action.type === SEND_MESSAGE){
      let body = this._state.dialogPage.newMessageBody;
      this._state.dialogPage.newMessageBody = '';
      this._state.dialogPage.messageData.push({id: 6, message: body});
      this._callSubscriber(this._state);
    }
  }
}


export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({
      type: UPDATE_NEW_POST_TEXT, newText:text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) => ({
      type: UPDATE_NEW_MESSAGE_BODY, body:body})

      
export default store;
window.store = store;
 