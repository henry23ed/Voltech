import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navbar.css";

function AppNavbar() {
  const [navBackground, setNavBackground] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar text color based on scroll position
      if (window.scrollY > window.innerHeight * 0.8) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }

      // ✅ Close the mobile navbar when scrolling
      if (expanded) {
        setExpanded(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [expanded]); // include 'expanded' so it updates when toggled

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className={`custom-navbar py-3 ${
        navBackground ? "navbar-white" : "navbar-transparent"
      }`}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          className={`fw-bold fs-4 ${
            navBackground ? "text-dark" : "text-light"
          }`}
        >
          Voltech
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-0 no-outline"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link
              href="#about"
              className={`px-3 ${navBackground ? "text-dark" : "text-light"}`}
              onClick={() => setExpanded(false)}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={`px-3 ${navBackground ? "text-dark" : "text-light"}`}
              onClick={() => setExpanded(false)}
            >
              Contact Us
            </Nav.Link>
            <Nav.Link
              href="#services"
              className={`px-3 ${navBackground ? "text-dark" : "text-light"}`}
              onClick={() => setExpanded(false)}
            >
              Services
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
