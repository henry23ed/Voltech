import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold text-primary mb-3">About Us</h2>
            <p className="lead text-muted">
              At <span className="bank-name">Voltech Bank</span>, we’re redefining modern banking.  
              Our mission is to provide innovative, secure, and accessible financial solutions 
              that empower individuals, families, and businesses to thrive globally.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 shadow about-card">
              <Card.Body>
                <Card.Title className="fw-bold text-primary">
                  Our Mission
                </Card.Title>
                <Card.Text className="text-muted">
                  To deliver trusted, inclusive, and innovative banking services that 
                  inspire growth, empower communities, and promote financial confidence.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow about-card">
              <Card.Body>
                <Card.Title className="fw-bold text-primary">
                  Our Vision
                </Card.Title>
                <Card.Text className="text-muted">
                  To be the most customer-focused and digitally advanced bank in the region, 
                  redefining the way people experience finance.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow about-card">
              <Card.Body>
                <Card.Title className="fw-bold text-primary">
                  Our Values
                </Card.Title>
                <Card.Text className="text-muted">
                  We stand for integrity, innovation, and inclusion — building trust 
                  through transparency and lasting relationships with our customers.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="text-center mt-5">
          <Col>
            <Button variant="primary" size="lg" href="/contact">
              Get in Touch
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
