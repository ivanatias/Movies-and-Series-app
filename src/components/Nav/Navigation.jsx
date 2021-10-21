import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navigation.css";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const showMenu = () => setMenuOpen(!menuOpen);
  const closeMobileMenu = () => setMenuOpen(false);
  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth);
    closeMobileMenu();
  };

  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/" onClick={closeMobileMenu}>
          <h2 className="text-danger" style={{ cursor: "pointer" }}>
            IFLIX
          </h2>
        </Link>
        <div className="d-flex justify-content-end align-items-center">
          {menuOpen ? (
            <FaTimes className="menu-btn" onClick={showMenu} />
          ) : (
            <FaBars className="menu-btn" onClick={showMenu} />
          )}
          {menuOpen || screenWidth >= 992 ? (
            <Nav className="nav-menu">
              <Link to="/" className="nav nav-link" onClick={closeMobileMenu}>
                Trendings
              </Link>
              <Link
                to="/movies"
                className="nav nav-link"
                onClick={closeMobileMenu}
              >
                Movies
              </Link>
              <Link
                to="/tvseries"
                className="nav nav-link"
                onClick={closeMobileMenu}
              >
                TV Series
              </Link>
            </Nav>
          ) : null}
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
