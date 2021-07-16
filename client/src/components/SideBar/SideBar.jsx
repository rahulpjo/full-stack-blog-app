import {Link} from "react-router-dom";
import "./SideBar.css";


function SideBar() {
  return (
    <div className="side-bar">
      <Link to="/">
        Home
      </Link>
      <Link to="/new">
        Create
      </Link>
    </div>
  )
}

export default SideBar
