import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartWidget from "../CartWidget";
import "./styles.css";

const NavBar = () => {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand href="#">
              <img
                className="logoAsgard"
                src="https://res.cloudinary.com/dyksknsxc/image/upload/v1670194947/logo-asgard_pc4cka.png"
                alt="Logo Asgard"
              />
            </Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img
                    className="logoAsgard"
                    src="https://res.cloudinary.com/dyksknsxc/image/upload/v1670194947/logo-asgard_pc4cka.png"
                    alt="Logo Asgard"
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Inicio</Nav.Link>
                  <Nav.Link href="#action2">Tienda</Nav.Link>
                  <Nav.Link href="#action3">Nosotros</Nav.Link>
                  <Nav.Link href="#action4">Login</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div>
              <CartWidget />
            </div>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavBar;
