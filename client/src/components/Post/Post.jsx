import { Link } from "react-router-dom";
import "./Post.css";

const Post = (props) => {
  const { _id, title, imageURL, content, author } = props.post;
  return (
    <Link to={`/posts/${_id}`}>
      <article className="post">
        <h2>{title}</h2>
        <h5>{author}</h5>
        <img src={imageURL} alt={title} />
        <p>{content}</p>
      </article>
    </Link>
  );
};

export default Post;
