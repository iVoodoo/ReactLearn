import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://img2.freepng.ru/20180316/uvw/kisspng-boy-smiley-clip-art-cartoon-boy-face-5aabeaa67ea020.0576950815212161665187.jpg" alt="" srcset="" />
            <div>
                {props.message}
            </div>
            <div>
                {props.likesCount}
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post;