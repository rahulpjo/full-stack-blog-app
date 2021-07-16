import { useEffect, useState } from "react";
import Post from "../../components/Post/Post.jsx";
import { getPosts } from "../../services/posts.js";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let results = await getPosts();
      setPosts(results);
    };
    fetchData();
  }, []);

  return (
      <div className="posts">
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
  );
};

export default PostList;
