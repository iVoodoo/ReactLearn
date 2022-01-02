import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    console.log(props.link);
    return (
        <div>
            <ProfileInfo link={props.link}/>
            <MyPosts />
        </div>
    );
}

export default Profile;