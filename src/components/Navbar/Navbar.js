import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">REFLEX</div>
      <div className="items">
        <div id="home" className="navbar_items">
          <Link to={"/"}>Home</Link>
        </div>
        <div id="catalog" className="navbar_items">
          <Link to={`${undefined}/catalog`}>Catalog</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
