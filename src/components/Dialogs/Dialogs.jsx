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
    return (
        <div className={s.dialogs__wrapper}>
            <div className={s.dialogs__item}>
                <DialogItem name="user 1" id="1"/>
                <DialogItem name="user 2" id="2"/>
                <DialogItem name="user 3" id="3"/>
                <DialogItem name="user 4" id="4"/>
                <DialogItem name="user 5" id="5"/>
            </div>
            <div className={s.messages__item}>
                <Message message="hi"/>
                <Message message="wassup maaan"/>
            </div>
        </div>
    );
}

export default Dialogs;