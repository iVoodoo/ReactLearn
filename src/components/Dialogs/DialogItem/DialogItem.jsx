import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
    return(
        <div className={s.dialog}>
            <NavLink to={"/dialogs/"+props.id} className={s.dialog__person}>{props.name}</NavLink> 
        </div>
    );
}

export default DialogItem;