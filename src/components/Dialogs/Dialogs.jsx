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

    return (
        <div className={s.dialogs__wrapper}>
            <div className={s.dialogs__item}>
                <DialogItem name={dialogData[0].name} id={dialogData[0].id} />
                <DialogItem name={dialogData[1].name} id={dialogData[1].id} />
                <DialogItem name={dialogData[2].name} id={dialogData[2].id} />
                <DialogItem name={dialogData[3].name} id={dialogData[3].id} />
                <DialogItem name={dialogData[4].name} id={dialogData[4].id} />
            </div>
            <div className={s.messages__item}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
            </div>
        </div>
    );
}

export default Dialogs;