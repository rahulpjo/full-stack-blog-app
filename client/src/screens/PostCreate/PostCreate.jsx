import { useState } from "react";
import "./PostCreate.css";
import Layout from "../../components/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createPost } from "../../services/posts";

const PostCreate = (props) => {
  const [post, setPost] = useState({
    title: "",
    imageURL: "",
    content: "",
    author: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createPost(post);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/posts`} />;
  }

  return (
    <Layout>
      <div className="new-container">
      <div className="intro">Be bitter.<br></br> 
      Blog(Squeeze). <br></br>
      Be better.<br></br></div>
      <form className="create-form" onSubmit={handleSubmit} autoComplete="off">
        <input
          className="input-title"
          placeholder="Title"
          value={post.title}
          name="title"
          required
          autoFocus
          onChange={handleChange}
        />
      <div className="input-container">
        <input
          className="input-image-link"
          placeholder="Image Link"
          value={post.imageURL}
          name="imageURL"
          required
          autoFocus
          onChange={handleChange}
        />
        <textarea
          className="textarea-content"
          rows={20}
          placeholder="Blog"
          value={post.content}
          name="content"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-name"
          placeholder="Name"
          value={post.author}
          name="author"
          required
          autoFocus
          onChange={handleChange}
        />
      </div>  
        <button type="submit" className="submit-blog-button">
        ​Squeeze!🍋​💦​💦​
        </button>
      </form>
    </div>
    </Layout>
  );
};

export default PostCreate;
