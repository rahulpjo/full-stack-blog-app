import "./Post.css";

const Post = (props) => {
  const { title, imageURL, content, author } = props.post;
  return (
    <article className="post">
      <h2>{title}</h2>
      <h5>{author}</h5>
      <img src={imageURL} alt={title} />
      <p>{content}</p>
    </article>
  );
};

export default Post;
