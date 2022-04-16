import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {
    // debugger
    return <StoreContext.Consumer> 
        { (store) => {
            let state = store.getState().dialogsReducer;

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())

            }

            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body))
            }

            return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                dialogsPage={state} />
                    }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;