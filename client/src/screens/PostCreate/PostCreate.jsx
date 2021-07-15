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
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-title"
          placeholder="Title"
          value={post.title}
          name="title"
          required
          autoFocus
          onChange={handleChange}
        />
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
          name="name"
          required
          autoFocus
          onChange={handleChange}
        />
        <button type="submit" className="submit-blog-button">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default PostCreate;
