import React from "react";
import { Container } from "react-bootstrap";
import "../../styles/styles.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IconContext } from "react-icons";

const About = () => {
  return (
    <>
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

            <h3>my_story()</h3>
          </div>
          <main className="Story">
            <p>
              Since I was a kid I always liked to use computers. I remember that
              my father had the computer at work and I was curious to see what
              it could do. This curiosity about computers led me to follow
              secondary education in Informatics. So, in those 3 years I spent
              at Rocha Peixoto school in Povoa de Varzim, I learned the basics
              of programming with C and Visual Basic.
            </p>
            <p>
              When choosing to go to the university, I decided to change the
              branch and chose a Logistics management area. I studied in Valença
              do Minho at the Higher School of Business Sciences and after the
              course I worked 1 year in a logistics warehouse. The passion for
              computers never ceased to exist and even in a management area, I
              continued to practice programming in the area of Web development.
            </p>
            <p>
              Over time I saw that it was not that area I wanted to follow and I
              decided to go back to studying, so I signed up I was at the
              Instituto Politecnico do Cavado e Ave in the Computer Systems
              Engineering Degree and for 3 years I studied at night while
              working during the day in the Sonae group.
            </p>
            <p>
              My first professional experience was as an Omnis programmer at
              Prozis, on a professional internship, where I made interfaces with
              Omnis Studio and queries to the database with SQL Server.
            </p>
            <p>
              At the end of the degree I started working at GlinttHS, in
              September 2017 where I worked as a Web Developer on 3 different
              projects. During this professional experience I decided to enroll
              in the Master of Informatics Engineering, in 2018, in order to
              deepen more knowledge.
            </p>
            <p>
              In 2019 I started a new professional challenge at the startup
              Cocus Portugal where I worked for a German client.
            </p>
            <p>
              On my free time I like to go to the Gym, do some physical activity
              and at home I like to always be with an active project. In recent
              times I have been working more with NodeJS, ReactJS and MongoDB
              technologies. I also like to host my applications on Github,
              Docker and Netlify
            </p>
          </main>
        </div>
      </Container>
    </>
  );
};

export default About;
