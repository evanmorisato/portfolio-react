import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Title from "./title";
import ContactMeIcon from "./icons-contact-me";

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <Container id="about-me" fluid>
        <Title title={"About Me"} />
        <Row>
          <Col lg={1}></Col>
          <Col md={12} lg={3}>
            <Image
              src={
                process.env.PUBLIC_URL + "/images/head.png"}
              rounded
              fluid
            />
          </Col>

          <Col md={12} lg={6} className="mt-3" style={{ color: "#747373", fontSize: "22px" }}>
            {
              "Full Stack Develope​r leveraging a ​background in data intake and pursuing a degree in Software Engineering from the University of Texas at Dallas. Recently earned a certificate in Full Stack Web Development from the University of Texas at Austin. Known for attention to detail and excelling while working in high pressure environments. ​An excellent interpersonal communicator and collaborator who works well on team-based projects as well as independently. Recognized for proven complex problem solving abilities to contribute effectively as a part of a fast-paced, quality-driven team."}
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Container>
    );
  }
}

export default AboutMe;

