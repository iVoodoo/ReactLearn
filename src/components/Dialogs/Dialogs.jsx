import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogElements = props.dialogData.map(
        dialog => <DialogItem name={dialog.name} id={dialog.id} />
    )
    
    let messageElements = props.messageData.map(
        message => <Message message={message.message}/>
    )

    return (
        <div className={s.dialogs__wrapper}>
            <div className={s.dialogs__item}>
               {dialogElements}
            </div>
            <div className={s.messages__item}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;