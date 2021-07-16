import { Link } from "react-router-dom";
import "./Post.css";

const Post = (props) => {
  const { _id, title, imageURL, content, author } = props.post;
  return (
    <Link className="post" to={`/posts/${_id}`}>
      <article>
        <section className="post-text">
          <h2>{title}</h2>
          <h5>{author}</h5>
          <p>{content}</p>
        </section>
        <section className="post-image">
          <img src={imageURL} alt={title} />
        </section>
      </article>
    </Link>
  );
};

export default Post;
