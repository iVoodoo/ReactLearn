import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://img2.freepng.ru/20180316/uvw/kisspng-boy-smiley-clip-art-cartoon-boy-face-5aabeaa67ea020.0576950815212161665187.jpg" alt="" srcset="" />
            post 1
            <div>
                <span>Like</span>
                <span>Dislike</span>
            </div>
        </div>
    );
}

export default Post;