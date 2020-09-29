import React from "react";
import { Card, Row, Container, Col } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import "../../styles/styles.css";
import testing from "../../assets/images/food.jpg";
const data = require("../../assets/db.json");

function Partialcard() {
  return (
    <Container fuild>
      <Row
        style={{
          justifyContent: "center",
        }}
      >
        {data.slice(0, 3).map((d) => (
          <Col key={d.id}>
            <Card border="light" className="Partial-Card-styles" key={d.id}>
              <Card.Img variant="top" src={testing} />
              <div>
                {d.hash.map((h) => (
                  <Badge className="Badge">{h}</Badge>
                ))}
              </div>

              <Card.Body>
                <Card.Title>{d.title}</Card.Title>
                <Card.Text>{d.title}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Partialcard;
