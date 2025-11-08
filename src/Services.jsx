import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Services.css";

function Services() {
  return (
    <section id="services" className="services-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Services</h2>
          <p className="text-muted">
            At Voltech Bank, we offer innovative and reliable financial solutions tailored to your needs.
          </p>
        </div>

        <Row className="g-4">
          <Col md={4}>
            <Card className="service-card h-100 border-0 shadow-sm">
              <Card.Body>
                <div className="icon mb-3 text-primary fs-1">💳</div>
                <Card.Title>Digital Banking</Card.Title>
                <Card.Text>
                  Experience the freedom of managing your finances anywhere, anytime with our secure online and mobile banking platforms.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="service-card h-100 border-0 shadow-sm">
              <Card.Body>
                <div className="icon mb-3 text-success fs-1">🏦</div>
                <Card.Title>Loans & Credit</Card.Title>
                <Card.Text>
                  From personal to business loans, we provide flexible credit options with competitive interest rates to help you achieve your goals.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="service-card h-100 border-0 shadow-sm">
              <Card.Body>
                <div className="icon mb-3 text-warning fs-1">💰</div>
                <Card.Title>Investment Planning</Card.Title>
                <Card.Text>
                  Grow your wealth with our expert investment advisory and financial planning services designed for long-term success.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;
