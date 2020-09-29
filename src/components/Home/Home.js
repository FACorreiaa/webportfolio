import React from "react";
import { Container } from "react-bootstrap";
import "../../styles/styles.css";
import { AiFillSmile } from "react-icons/ai";
import { AiOutlineArrowRight, AiOutlinePlusCircle } from "react-icons/ai";
import { FaHandPeace } from "react-icons/fa";
import { IconContext } from "react-icons";
import Button from "react-bootstrap/Button";
import Partialcard from "../Projects/Partialcard";

const Home = () => {
  return (
    <>
      <Container
        fluid
        className="Container-styles"
        styles={{ marginBottom: "2em" }}
      >
        <div>
          <h5 style={{ textAlign: "center" }}>
            I'm currently looking for new opportunities
            <IconContext.Provider value={{ color: "yellow" }}>
              <AiFillSmile />
            </IconContext.Provider>
          </h5>
        </div>
        <div>
          <div className="Topic-title">
            <IconContext.Provider value={{ size: "1.75rem" }}>
              <AiOutlineArrowRight />
            </IconContext.Provider>

            <h3>Fernando Correia</h3>
          </div>
          <div className="Story">
            <article>Full stack Developer based in Portugal</article>
            <p>
              React, Angular 2+, Vue, NodeJS, Express, NestJS, MongoDB,
              PostgresSQL, MySQL, Python, C#.
            </p>
          </div>
        </div>
        <div>
          <div className="Topic-title">
            <IconContext.Provider value={{ size: "1.75rem" }}>
              <AiOutlineArrowRight />
            </IconContext.Provider>

            <h3>Resume</h3>
          </div>
          <div className="Story">
            <p>
              <Button
                style={{
                  color: "#FFFFFF",
                  backgroundColor: "rgb(60, 64, 67)",
                }}
                size="lg"
                variant="outline-none"
                href="/resume"
              >
                View Resume
              </Button>
            </p>
          </div>
        </div>
        <div>
          <div className="Topic-title">
            <IconContext.Provider value={{ size: "1.75rem" }}>
              <AiOutlineArrowRight />
            </IconContext.Provider>

            <h3>Intro</h3>
          </div>

          <main className="Story">
            <p>
              Hello! <FaHandPeace /> My name is Fernando Correia and im a full
              stack web developer based in Portugal. I like to build and develop
              cool products with nice interfaces that users like to interact
              with. Im mainly working with Node and ReactJS for the frontend but
              i also enjoy to pick Angular or Vue for the frontend depending on
              the task. Continue reading{" "}
              <a className="Link-title" href="/about">
                about me
              </a>
            </p>
          </main>
        </div>
        <div>
          <div className="Topic-title">
            <IconContext.Provider value={{ size: "1.75rem" }}>
              <AiOutlineArrowRight />
            </IconContext.Provider>

            <h3>Contact</h3>
          </div>
          <div className="Story">
            <strong>Email</strong>
            <p>
              <a className="Link-title" href="fernandocorreia316@gmail.com">
                fernandocorreia316@gmail.com
              </a>
            </p>

            <strong>Twitter</strong>
            <p>
              <a
                className="Link-title"
                href="https://twitter.com/FACorreiaa"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://twitter.com/FACorreiaa
              </a>
            </p>

            <strong>Github</strong>
            <p>
              <a
                className="Link-title"
                href="https://github.com/FACorreiaa"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/FACorreiaa
              </a>
            </p>

            <strong>Linkedin</strong>
            <p>
              <a
                className="Link-title"
                href="https://www.linkedin.com/in/fernando-correia-ab018079/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/fernando-correia-ab018079/
              </a>
            </p>
          </div>
        </div>
        <div>
          <div className="Topic-title">
            <IconContext.Provider value={{ size: "1.75rem" }}>
              <AiOutlineArrowRight />
            </IconContext.Provider>

            <h3>Projects</h3>
          </div>
          <div>
            <Container fluid styles={{ marginBottom: "2em" }}>
              <Partialcard />
            </Container>
          </div>
          <div style={{ textAlign: "center" }}>
            <Button className="Button" variant="primary" size="sm">
              Show more
              <a href="/projects">
                {" "}
                <AiOutlinePlusCircle />
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
