import React from "react";
import AppNavbar from "../Navbar";
import Learnmore from "../Learnmore";

const LearnmorePage = () => {
  return (
    <>
      <AppNavbar />
      <div style={{ paddingTop: "80px" }}>
        <Learnmore />
      </div>
    </>
  );
};

export default LearnmorePage;
