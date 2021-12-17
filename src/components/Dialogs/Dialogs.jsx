import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs__wrapper}>
            <div className={s.dialogs__item}>
                <div className={s.dialog}>
                    User 1
                </div>
                <div className={s.dialog}>
                    User 2
                </div>
                <div className={s.dialog}>
                    User 3
                </div>
            </div>
            <div className={s.messages__item}>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    How are u?    
                </div>
            </div>
        </div>
    );
}

export default Dialogs;