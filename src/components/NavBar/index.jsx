import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import "./styles.css";

const NavBar = () => {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand}>
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Link to="/">
              <Navbar.Brand>
                <img
                  className="logoAsgard"
                  src="https://res.cloudinary.com/dyksknsxc/image/upload/v1670194947/logo-asgard_pc4cka.png"
                  alt="Logo Asgard"
                />
              </Navbar.Brand>
            </Link>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
              <Link to="/">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img
                    className="logoAsgard"
                    src="https://res.cloudinary.com/dyksknsxc/image/upload/v1670194947/logo-asgard_pc4cka.png"
                    alt="Logo Asgard"
                  />
                </Offcanvas.Title>
                </Link>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/">Inicio</Link>
                  <Link to="category/sobre cuadro">Sobre Cuadro</Link>
                  <Link to="category/bajo asiento">Bajo Asiento</Link>
                  <Link to="category/frame bag">Frame Bag</Link>
                  <Link to="category/manubrio">Manubrio</Link>
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
