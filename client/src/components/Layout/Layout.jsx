import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import "./Layout.css"

const Layout = (props) => {
  return (
    <div className="layout-container">
      <Header />
      <div className="layout-children">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
