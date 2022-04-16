// import dialogsReducer from "./dialogsReducer";
// import profileReducer from "./profileReducer";

// let store = {
//   _state: {

//     dialogPage :{
//         dialogData: [
//             {id: 1, name: "user 1"}, 
//             {id: 2, name: "user 2"},
//             {id: 3, name: "user 3"},
//             {id: 4, name: "user 4"},
//             {id: 5, name: "user 5"}
//         ],
          
//         messageData: [
//             {id: 1, message: "Hi"}, 
//             {id: 2, message: "wassup maaan"}
//         ],
        
//         newMessageBody: ""
//     },
    
//     profilePage: {
//         postData: [
//             {id: 1, message: "Hey, how are u?", likeCount: 12}, 
//             {id: 2, message: "It's my first post", likeCount: 10}
//      ],
//         newPostText:"abobUS"
//     }
//   },
//   getState() {
//     return this._state;
//   },
//   _callSubscriber(){
//     console.log('state is changed');
//   },
//   subscribe(observer){
//     this._callSubscriber = observer;
//   },
//   dispatch(action){ // {type: 'ADD-POST'}
//     // debugger;

//     this._state.profilePage = profileReducer(this._state.profilePage, action)
//     this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
    
//     this._callSubscriber(this._state);
//   }
// }
      
// export default store;
// window.store = store;
 