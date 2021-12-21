import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    return(
        <div className={s.dialog}>
            <NavLink to={"/dialogs/"+props.id} className={s.dialog__person}>{props.name}</NavLink> 
        </div>
    );
}
const Message = (props) => {
    return(
        <div className={s.message}>{props.message}</div>
    );
}


const Dialogs = (props) => {

    let dialogData = [
        {id: 1, name: "user 1"}, 
        {id: 2, name: "user 2"},
        {id: 3, name: "user 3"},
        {id: 4, name: "user 4"},
        {id: 5, name: "user 5"}
    ];

    let messageData = [
        {id: 1, message: "Hi"}, 
        {id: 2, message: "wassup maaan"}
    ];

    let dialogElements = dialogData.map(
        dialog => <DialogItem name={dialog.name} id={dialog.id} />
    )
    
    let messageElements = messageData.map(
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