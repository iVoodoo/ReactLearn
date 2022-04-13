import { NavLink } from 'react-router-dom';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    // debugger
    let state = props.store.getState().dialogsReducer;

    let dialogElements = state.dialogData.map(
        dialog => <DialogItem name={dialog.name} id={dialog.id} />
    )
    
    let messageElements = state.messageData.map(
        message => <Message message={message.message}/>
    )

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())

    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs__wrapper}>
            <div className={s.dialogs__item}>
               {dialogElements}
            </div>
            <div className={s.messages__item}>
                <div className="">{messageElements}</div>
                <div className={s.messageSendingBlock}>
                    <div className="">
                        <textarea className={s.messageBody} value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea>
                    </div>
                    <div className="">
                        <button className={s.messageSendBtn} onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;