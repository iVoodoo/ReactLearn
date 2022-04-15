import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    // debugger
    let state = props.store.getState().dialogsReducer;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())

    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (<Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
        dialogsPage={state}/>);
}

export default DialogsContainer;