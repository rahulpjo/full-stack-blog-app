import { Link } from "react-router-dom";
import "./Header.css";
import bitterBlogger from "../../images/bitter-blogger.png";

const Header = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <div className="nav-content-container">
          <img className="nav-image" src={bitterBlogger} alt="a sour lemon" />
          <div className="nav-text-container">
            <p className="nav-title">Bitter Blogger</p>
            <p className="nav-motto">
              When life gives you lemons, but you hate lemonade.
            </p>
          </div>
        </div>
      </Link>
    </nav>
  );
};

export default Header;

/*  <div className="nav-link-container">
<Link to="/">Home</Link>
<Link to="/posts">Posts</Link>
<Link to="/new">Create</Link>
</div> */
