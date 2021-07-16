import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import SideBar from "../SideBar/SideBar";
import "./Layout.css";

const Layout = (props) => {
  return (
    <div className="layout-container">
      <Header />
      <div className="layout-children">
        <SideBar />
        <div className="content">{props.children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
