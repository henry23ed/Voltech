import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    const symbols = ["₦", "$", "€", "£", "¥"];
    const container = document.querySelector(".currency-rain");

    const createCurrency = () => {
      const span = document.createElement("span");
      span.classList.add("currency-symbol");
      span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      span.style.left = Math.random() * 100 + "vw";
      span.style.animationDuration = Math.random() * 2 + 3 + "s"; // 3–5 seconds
      container.appendChild(span);

      setTimeout(() => span.remove(), 5000); // Remove after animation
    };

    const interval = setInterval(createCurrency, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section d-flex align-items-center text-center text-md-start position-relative">
      {/* Animated currency background */}
      <div className="currency-rain"></div>

      {/* Overlay for readability */}
      <div className="overlay"></div>

      {/* Main content */}
      <Container className="position-relative text-white" style={{ zIndex: 2 }}>
        <Row className="align-items-center justify-content-center">
          <Col md={8} lg={6}>
            <h1 className="display-4 fw-bold mb-3">
              Banking Made Simple, Secure & Smart
            </h1>
            <p className="lead mb-4">
              Experience next-generation banking with real-time transactions, 
              global access, and complete financial control at your fingertips.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">
              <Button variant="primary" size="lg" href="/about">
                Learn More
              </Button>
              <Button variant="outline-light" size="lg" href="/contact">
                Open an Account
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
