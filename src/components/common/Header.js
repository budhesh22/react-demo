import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light p-3">
      <div className="container-fluid">
        {/* <Link to="/home" className="nav-link">
          Navbar
        </Link> */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/demo/home" className="nav-link text-light">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/demo/about" className="nav-link text-light">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/demo/contact" className="nav-link text-light">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
