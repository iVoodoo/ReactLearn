import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://img1.badfon.ru/original/1024x768/9/ee/leyk-luiz-kanada-les-nebo.jpg"></img>
            </div>
            <div className={s.profile__description}>
                AVA
            </div>
        </div>
    );
}

export default ProfileInfo;