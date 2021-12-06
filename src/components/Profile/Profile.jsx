import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://img1.badfon.ru/original/1024x768/9/ee/leyk-luiz-kanada-les-nebo.jpg"></img>
            </div>
            <div>
                AVA
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;