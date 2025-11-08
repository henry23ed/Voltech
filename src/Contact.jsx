import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xqawzkdb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Get in Touch</h2>
          <p className="text-muted">
            We’re here to assist you. Reach out for inquiries, support, or feedback.
          </p>
        </div>

        <Row className="align-items-center">
          <Col md={6}>
            <h5 className="fw-semibold mb-3">Contact Information</h5>
            <p><strong>Address:</strong> 123 Finance Avenue, Lagos, Nigeria</p>
            <p><strong>Phone:</strong> +234 801 234 5678</p>
            <p><strong>Email:</strong> support@voltechbank.com</p>
          </Col>

          <Col md={6}>
            {status === "success" && (
              <Alert variant="success" className="mb-4">
                ✅ Message sent successfully! We’ll get back to you soon.
              </Alert>
            )}
            {status === "error" && (
              <Alert variant="danger" className="mb-4">
                ❌ Something went wrong. Please try again later.
              </Alert>
            )}

            <Form className="contact-form p-4 shadow-sm rounded bg-white" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Write your message here"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <div className="text-end">
                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
