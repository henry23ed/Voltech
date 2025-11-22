import React from "react";
import AppNavbar from "../Navbar";
import Services from "../Services";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  return (
    <>
      <AppNavbar />
      <div style={{ paddingTop: "80px" }}>
        <Services />
        <section className="py-5 bg-light text-center">
          <Container>
            <Row>
              <Col>
                <h2 className="fw-bold text-primary mb-4">Ready to Get Started?</h2>
                <p className="lead text-muted mb-4">
                  Choose the service that best fits your needs and open your account today.
                </p>
                <Button as={Link} to="/contact" variant="primary" size="lg">
                  Contact Us
                </Button>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
