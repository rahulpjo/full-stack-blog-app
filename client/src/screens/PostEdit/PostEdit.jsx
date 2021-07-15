import { useState, useEffect } from "react";
import "./PostEdit.css";
import { Layout } from "../../components";
import { useParams, Redirect } from "react-router";
import { getPost, updatePost } from "../../services/posts";

const PostEdit = (props) => {
  const [post, setPost] = useState({
    title: "",
    imageURL: "",
    content: "",
    author: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
    };
    fetchPost();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await updatePost(id, post);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/posts/${id}`} />;
  }

  return (
    <Layout>
      <div className="post-edit">
        <div className="image-container">
          <img
            className="edit-post-image"
            src={post.imageURL}
            alt={post.title}
          />
          <form onSubmit={handleSubmit}>
            <input
              className="edit-input-image-link"
              placeholder="Image Link"
              value={post.imageURL}
              name="imageURL"
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            className="input-title"
            placeholder="Title"
            value={post.title}
            name="title"
            required
            autoFocus
            onChange={handleChange}
          />
          <textarea
            className="textarea-content"
            rows={20}
            cols={100}
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
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default PostEdit;
