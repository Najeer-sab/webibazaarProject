import React from "react";
import Accordion from "react-bootstrap/Accordion";

// import Image from 'react-bootstrap/Image';
// import Col from 'react-bootstrap/Col';









const Imagesbars = () => {
  return (
    <>
     

      <div className="container w-100 mt-4"> 
        <div className="row ">
          <div className="col-md-3">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accessoris</Accordion.Header>
                <Accordion.Body>Hydraulic</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>Lamp</Accordion.Header>
                <Accordion.Body>Cryotronics</Accordion.Body>
                <Accordion.Body>Induction</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>Avionics</Accordion.Header>
                <Accordion.Body>Circuits</Accordion.Body>
                <Accordion.Body>Electronics</Accordion.Body>
                <Accordion.Body>Handwatch</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-9 ">
            <a href="google.com">
              <img src="/images/photo.png" className="w-100" alt="nhgfghjk" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Imagesbars;
