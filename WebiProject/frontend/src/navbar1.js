import React from 'react'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdTabletMac } from "react-icons/md";
import { IoDesktopSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
// import Shopeur from './shopeur';

const Navbar1 = () => {
  return (
    <>
      {/* <Shopeur /> */}
    <div className='container-fluid  'style={{backgroundColor:'  rgb(189, 189, 186)'}}>
    <Navbar collapseOnSelect expand="lg" className="">

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
           <Image src="/images/electronic/webi-logo.png"  className='me-5'/>
            <Nav.Link href="#pricing">Shopeur Electronics WooCommerce Theme</Nav.Link>
          
          </Nav>
          <Nav expand="lg">
          <Nav.Link href="#deets"><IoDesktopSharp className='fs-4'/> Desktop</Nav.Link>
          <Nav.Link href="#deets"><MdTabletMac className='fs-4'/> Tab</Nav.Link>
            <Nav.Link href="#deets"><MdOutlinePhoneIphone className='fs-4'/> Mobile</Nav.Link>
            <Button variant=" " className='bg-info'>Buy Now</Button>
          </Nav>
        </Navbar.Collapse>
    
    </Navbar>
    </div>
    <div className='container-fluid  ' style={{backgroundColor:'  rgba(189, 189, 186,0.2)'}}>
    <Navbar collapseOnSelect expand="lg" className="">

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#pricing">Extra 30% Off On Selected Itmes</Nav.Link>
            <Nav.Link href="#pricing"><IoMdMail className="me-2 fs-4"/>company@example.com</Nav.Link>
          
          </Nav>
          <Nav expand="lg" className='me-5'>
          <Nav.Link href="#deets">
Wishlist
</Nav.Link>
<div className='vr'>

</div>

<NavDropdown title="USD" id="nav-dropdown" className="me-5">
              <NavDropdown.Item >GBS</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    
    </Navbar>
    </div>
    </>
  );
}



export default Navbar1