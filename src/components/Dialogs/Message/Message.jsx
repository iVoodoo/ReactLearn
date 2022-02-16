import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const Message = (props) => {

    let msgText = React.createRef();

    return(
        <div className={s.message}>{props.message}
            <textarea className={s.msg__field}></textarea>
            <button>Отправить</button>
        </div>
    );
}

export default Message;