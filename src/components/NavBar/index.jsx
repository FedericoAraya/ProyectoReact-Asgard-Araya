import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import OffCanvasCart from "../../containers/OffCanvasCart";


import "./styles.css";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const cerrar = () => setShowNav(false);
  const abrir = () => setShowNav(true);

  return (
    <>       
          <Navbar key={"md"} expand={"md"}>
          <Container fluid>
            <Navbar.Toggle onClick={abrir} aria-controls={`offcanvasNavbar-expand-md`} />
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
            show={showNav} onHide={cerrar}
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
              <Link to="/">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
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
                  <Link onClick={cerrar} to="/">Inicio</Link>
                  <Link onClick={cerrar} to="category/sobre cuadro">Sobre Cuadro</Link>
                  <Link onClick={cerrar} to="category/bajo asiento">Bajo Asiento</Link>
                  <Link onClick={cerrar} to="category/frame bag">Frame Bag</Link>
                  <Link onClick={cerrar} to="category/manubrio">Manubrio</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>            
              <OffCanvasCart />
          </Container>
        </Navbar>
     
    </>
  );
};

export default NavBar;
