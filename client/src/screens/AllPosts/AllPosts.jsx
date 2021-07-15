import { useEffect, useState } from "react";
import Post from "../../components/Post/Post.jsx";
import { getPosts } from "../../services/posts.js";
import "./AllPosts.css";
const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let results = await getPosts();
      setPosts(results);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      <div className="posts">
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
