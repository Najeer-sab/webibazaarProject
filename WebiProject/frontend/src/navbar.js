import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavDropdown from "react-bootstrap/NavDropdown";

 const Navbar2 = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-primary">
      <div className="container ">
        <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link active me-5 " aria-current="page" href="/">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active  me-5" aria-current="page" href="/">
                SHOP
              </a>
            </li>

            <NavDropdown title="BLOG" id="nav-dropdown" className="me-5">
              <NavDropdown.Item eventKey="4.1">Left Sidebar</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Right Sidebar</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">No Sidebar</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="PAGES" id="nav-dropdown" className="me-5">
              <NavDropdown.Item eventKey="4.1">Service</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">FAQ's Page</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Gallery</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Elements</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Pages 404</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">About Us</NavDropdown.Item>
            </NavDropdown>
            <li className="nav-item">
              <a className="nav-link active me-5" aria-current="page" href="/">
                CONTACT US
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active me-5" aria-current="page" href="/">
                FEATURES
              </a>
            </li>
          </ul>
          <ul  className="navbar-nav "  >
           <li>
           <img src="/images/per.jpg" alt="/" style={{ width: "60px" }} className="me-4 rounded "/>SPECIAL OFFERS
           </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default Navbar2


