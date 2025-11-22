import React from "react";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import "./Learnmore.css";

const Learnmore = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <section className="learnmore-section py-5">
      {/* Hero Section */}
      <div className="learnmore-hero text-white py-5 text-center">
        <Container>
          <h1 className="display-3 fw-bold mb-3">Welcome to Voltech Bank</h1>
          <p className="lead">
            Revolutionizing Banking Through Technology and Innovation
          </p>
        </Container>
      </div>

      {/* About Voltech Bank */}
      <Container className="py-5">
        <Row className="mb-5 align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="fw-bold text-primary mb-4">Who We Are</h2>
            <p className="text-muted fs-5 mb-3">
              <strong>Voltech Bank</strong> is a cutting-edge financial institution designed 
              for the digital age. We combine traditional banking security with modern technology 
              to deliver seamless, accessible, and innovative financial solutions.
            </p>
            <p className="text-muted fs-5 mb-3">
              Founded on principles of innovation, security, and customer-centricity, 
              we're committed to democratizing access to world-class banking services 
              for individuals, families, and businesses across the globe.
            </p>
            <p className="text-muted fs-5">
              Whether you're managing personal finances, growing your business, or investing 
              for the future, Voltech Bank is your trusted partner every step of the way.
            </p>
          </Col>
          <Col lg={6}>
            <div className="feature-highlight bg-light p-5 rounded">
              <h3 className="text-primary fw-bold mb-4">Our Promise</h3>
              <p className="text-muted mb-3">
                🔒 <strong>Security First:</strong> Enterprise-grade encryption and fraud protection
              </p>
              <p className="text-muted mb-3">
                ⚡ <strong>Lightning Fast:</strong> Real-time transactions and instant settlements
              </p>
              <p className="text-muted mb-3">
                🌍 <strong>Global Reach:</strong> Access your accounts from anywhere, anytime
              </p>
              <p className="text-muted">
                💰 <strong>Cost Effective:</strong> Transparent pricing with no hidden fees
              </p>
            </div>
          </Col>
        </Row>

        {/* Core Values */}
        <Row className="mb-5">
          <Col className="text-center mb-5">
            <h2 className="fw-bold text-primary">Our Core Values</h2>
            <p className="lead text-muted">The principles that guide everything we do</p>
          </Col>
        </Row>

        <Row className="g-4 mb-5">
          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm border-0 value-card text-center">
              <Card.Body className="p-4">
                <div className="icon-circle mb-3">💡</div>
                <Card.Title className="fw-bold text-primary mb-3">Innovation</Card.Title>
                <Card.Text className="text-muted">
                  We constantly push boundaries and embrace new technologies to improve banking.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm border-0 value-card text-center">
              <Card.Body className="p-4">
                <div className="icon-circle mb-3">🔐</div>
                <Card.Title className="fw-bold text-primary mb-3">Security</Card.Title>
                <Card.Text className="text-muted">
                  Your financial data is protected with military-grade encryption and compliance.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm border-0 value-card text-center">
              <Card.Body className="p-4">
                <div className="icon-circle mb-3">🤝</div>
                <Card.Title className="fw-bold text-primary mb-3">Trust</Card.Title>
                <Card.Text className="text-muted">
                  Transparency and integrity are at the heart of all our customer relationships.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={3}>
            <Card className="h-100 shadow-sm border-0 value-card text-center">
              <Card.Body className="p-4">
                <div className="icon-circle mb-3">🌟</div>
                <Card.Title className="fw-bold text-primary mb-3">Excellence</Card.Title>
                <Card.Text className="text-muted">
                  We strive for the highest standards in everything we deliver to you.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Key Features */}
        <Row className="mb-5">
          <Col className="text-center mb-5">
            <h2 className="fw-bold text-primary">Why Choose Voltech Bank?</h2>
            <p className="lead text-muted">Industry-leading features and benefits</p>
          </Col>
        </Row>

        <Row className="g-4 mb-5">
          <Col lg={6}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body className="p-4">
                <h4 className="fw-bold text-primary mb-3">🚀 Cutting-Edge Technology</h4>
                <p className="text-muted mb-3">
                  Built on the latest fintech infrastructure with AI-powered insights and 
                  personalized recommendations to help you make smarter financial decisions.
                </p>
                <ul className="list-unstyled">
                  <li className="text-muted mb-2">✓ Mobile-first banking platform</li>
                  <li className="text-muted mb-2">✓ AI-powered financial insights</li>
                  <li className="text-muted mb-2">✓ Instant notifications and alerts</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body className="p-4">
                <h4 className="fw-bold text-primary mb-3">🌐 Global Accessibility</h4>
                <p className="text-muted mb-3">
                  Send and receive money globally with competitive rates, access international 
                  markets, and manage multi-currency accounts seamlessly.
                </p>
                <ul className="list-unstyled">
                  <li className="text-muted mb-2">✓ Multi-currency support</li>
                  <li className="text-muted mb-2">✓ International transfers</li>
                  <li className="text-muted mb-2">✓ 24/7 global customer support</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body className="p-4">
                <h4 className="fw-bold text-primary mb-3">💼 Business Solutions</h4>
                <p className="text-muted mb-3">
                  Empower your business with corporate accounts, payment processing, 
                  payroll solutions, and advanced cash management tools.
                </p>
                <ul className="list-unstyled">
                  <li className="text-muted mb-2">✓ Business savings accounts</li>
                  <li className="text-muted mb-2">✓ Invoice management</li>
                  <li className="text-muted mb-2">✓ Automated payroll services</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body className="p-4">
                <h4 className="fw-bold text-primary mb-3">📊 Financial Planning</h4>
                <p className="text-muted mb-3">
                  Achieve your financial goals with savings accounts, investment options, 
                  and personalized wealth management advisory services.
                </p>
                <ul className="list-unstyled">
                  <li className="text-muted mb-2">✓ High-yield savings accounts</li>
                  <li className="text-muted mb-2">✓ Investment portfolio tools</li>
                  <li className="text-muted mb-2">✓ Retirement planning assistance</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Our Journey */}
        <Row className="mb-5 p-4 bg-light rounded">
          <Col>
            <h2 className="fw-bold text-primary mb-4 text-center">Our Journey</h2>
            <p className="text-muted fs-5 mb-3">
              Voltech Bank was founded with a simple yet powerful vision: to make world-class 
              banking accessible to everyone. Starting as a fintech innovator, we've grown into 
              a trusted financial institution serving millions of customers across multiple continents.
            </p>
            <p className="text-muted fs-5 mb-3">
              Our team combines decades of banking expertise with modern tech talent to create 
              solutions that are not just powerful, but delightfully easy to use. Every feature 
              we build, every service we offer is designed with you in mind.
            </p>
            <p className="text-muted fs-5">
              Today, we're proud to have processed billions in transactions, maintained a 99.99% 
              uptime record, and earned the trust of our diverse customer base. But we're just 
              getting started on our mission to revolutionize global banking.
            </p>
          </Col>
        </Row>

        {/* Call to Action */}
        <Row className="text-center py-5">
          <Col>
            <h2 className="fw-bold text-primary mb-4">Ready to Join Voltech Bank?</h2>
            <p className="lead text-muted mb-4">
              Experience the future of banking today. Open your account in minutes.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Button variant="primary" size="lg" href="/contact">
                Open Account Now
              </Button>
              <Button variant="outline-primary" size="lg" onClick={scrollToTop}>
                Learn More About Us
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Learnmore;
