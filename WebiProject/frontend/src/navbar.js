import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

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
            <NavDropdown.Item eventKey="4.1"><Link to='/services'>Service</Link></NavDropdown.Item>              <NavDropdown.Item eventKey="4.3">Gallery</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Elements</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2"><Link to='/faqs'>FAQ's Page</Link></NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2"><Link to='/errorPage'>Pages 404</Link></NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3"><Link to='/aboutUs'>About Us</Link></NavDropdown.Item>
            </NavDropdown>
            <li className="nav-item">
            <Link to='/contact'>
              <a className="nav-link active me-5 text-white" aria-current="page" href="/">
                CONTACT US
              </a></Link>
            </li>
            <li className="nav-item">
            <Link to='/features'>
              <a className="nav-link active me-5 text-white" aria-current="page" href="/">
                FEATURES
              </a></Link>
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


