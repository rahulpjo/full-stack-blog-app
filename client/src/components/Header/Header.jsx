import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <p className="nav-title">Sour Blogger</p>
      </Link>
      <div className="nav-link-container">
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/new">Create</Link>
      </div>
    </nav>
  );
};

export default Header;
