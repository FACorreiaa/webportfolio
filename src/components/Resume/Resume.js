import React from "react";
import { Container, Image } from "react-bootstrap";
import "../../styles/styles.css";

import resume from "../../assets/images/resume.png";
function Resume() {
  return (
    <Container
      fluid
      className="Container-styles"
      style={{ textAlign: "center" }}
    >
      <Image src={resume} alt="resume" />
    </Container>
  );
}

export default Resume;
