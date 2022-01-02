import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    // let dialogData = [
    //     {id: 1, name: "user 1"}, 
    //     {id: 2, name: "user 2"},
    //     {id: 3, name: "user 3"},
    //     {id: 4, name: "user 4"},
    //     {id: 5, name: "user 5"}
    // ];

    let messageData = [
        {id: 1, message: "Hi"}, 
        {id: 2, message: "wassup maaan"}
    ];
    console.log(props.dialogData);
    let dialogElements = props.dialogData.map(
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