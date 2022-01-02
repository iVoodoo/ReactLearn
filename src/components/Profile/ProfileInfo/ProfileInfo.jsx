import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    console.log(props.link);
    return (
        <div>
            <div>
                <img src={props.link}></img>
            </div>
            <div className={s.profile__description}>
                AVA
            </div>
        </div>
    );
}

export default ProfileInfo;