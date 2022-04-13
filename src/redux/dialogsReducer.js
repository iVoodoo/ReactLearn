const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    // debugger;
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messageData.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) => ({
      type: UPDATE_NEW_MESSAGE_BODY, body:body})

export default dialogsReducer;