import '../css/Profile.css';

const Profile = () => {
    return (
        <div className="content">
            <div>
                <img src="https://img1.badfon.ru/original/1024x768/9/ee/leyk-luiz-kanada-les-nebo.jpg"></img>
            </div>
            <div>
                AVA
            </div>
            <div>
                MY posts
                <div>
                    New post
                </div>
                <div className = "posts">
                    <div className = "item">post 1</div>
                    <div className = "item">post 2</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;