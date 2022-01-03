import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElements = props.postData.map(
        post => <Post message={post.message} likesCount={post.likeCount}/>

    );

    return (
            <div className={s.post__container}>
                MY posts
                <div className={s.post__creation}>
                    <div className={s.post__creation__text}>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className={s.post__creation__button}>
                        <button>Add posts</button>
                    </div>
                </div>
                {postElements}
            </div>
       
    );
}

export default MyPosts;