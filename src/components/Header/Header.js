import "./styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div id="center">
      <Link className="header-item" to="/">ARTISTS</Link>
      </div>
      <div id="right">
        <Link className="header-item" to="/about">
          ABOUT
        </Link>
      </div>
    </div>
  );
};

export default Header;
