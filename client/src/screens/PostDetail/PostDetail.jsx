import { useState, useEffect } from "react";
import "./PostDetail.css";
import Layout from "../../components/Layout/Layout";
import { getPost, deletePost } from "../../services/posts";
import { useParams, Link } from "react-router-dom";

const PostDetail = (props) => {
  const [post, setPost] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
      setLoaded(true);
      console.log(post)
    };
    fetchPost();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Layout>
        <div className="post-detail">
          <div className="detail">
            <div className="title">{post.title}</div>
            <img
              className="post-detail-image"
              src={post.imageURL}
              alt={post.title}
            />
            <div className="content">{post.content}</div>
            <div className="author">{post.author}</div>
            <div className="button-container">
              <button className="edit-button">
                <Link className="edit-link" to={`/posts/${post._id}/edit`}>
                  Edit
                </Link>
              </button>
              <button className="delete-button" onClick={() => deletePost(post._id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};

export default PostDetail;
