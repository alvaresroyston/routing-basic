import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className="nav-bar">
        <div className="logo">
          <h1>
            <Link style={{ color: "inherit", textDecoration: "none" }} to="/">
              LOGO
            </Link>
          </h1>
        </div>
        <div className="navigation-container">
          <div className="navigations">
            <ul>
              <li>
                <Link
                  style={{ color: "inherit", textDecoration: "none" }}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "inherit", textDecoration: "none" }}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "inherit", textDecoration: "none" }}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
