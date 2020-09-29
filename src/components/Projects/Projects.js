import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Cardlist from "./Cardlist";

import { AiOutlineArrowRight } from "react-icons/ai";
import { IconContext } from "react-icons";
import "../../styles/styles.css";

export class Projects extends Component {
  render() {
    const data = require("../../assets/db.json");
    return (
      <Container
        fluid
        className="Container-styles"
        styles={{ marginBottom: "2em" }}
      >
        <div>
          <div className="Topic-title">
            <IconContext.Provider value={{ size: "1.75rem" }}>
              <AiOutlineArrowRight />
            </IconContext.Provider>
            <h3>my_projects()</h3>
          </div>
          <p style={{ margin: "2em" }} className="Link-title">
            Things that i have made
          </p>
          <Cardlist />
        </div>
      </Container>
    );
  }
}

export default Projects;
