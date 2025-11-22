import React from "react";
import AppNavbar from "../Navbar";
import Contact from "../Contact";

const ContactPage = () => {
  return (
    <>
      <AppNavbar />
      <div style={{ paddingTop: "80px" }}>
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
