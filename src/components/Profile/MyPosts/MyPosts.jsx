import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
            <div>
                MY posts
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button>Add posts</button>
                </div>
                <Post message = 'Hey, how are u?' likeCounts='10'/>
                <Post message = "It's my first post"likeCounts='20'/>
            </div>
       
    );
}

export default MyPosts;