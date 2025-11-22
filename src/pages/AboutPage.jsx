import React from "react";
import AppNavbar from "../Navbar";
import About from "../About";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <AppNavbar />
      <div style={{ paddingTop: "80px" }}>
        <About />
        <section className="py-5 bg-light text-center">
          <Container>
            <Row>
              <Col>
                <h2 className="fw-bold text-primary mb-4">Want to Learn More?</h2>
                <p className="lead text-muted mb-4">
                  Explore our comprehensive guide to understand what makes Voltech Bank unique.
                </p>
                <Button as={Link} to="/learnmore" variant="primary" size="lg">
                  Explore Features
                </Button>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
