import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./jumbotron-page.css"
import { motion } from 'framer-motion';

const JumbotronPage = () => {
  return (
    <Container id="top" fluid>
      <Row>
        <div style={{ height: 75 }}></div>
      </Row>
      <Row>
        <Col
          className="text-center"
          style={{
            fontSize: "7rem",
            color: "#ffffff",
            fontFamily: "Alice"
          }}
        >
          {/* Fade in of jumbotron name */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2.5 }} >{"Evan Morisato"}</motion.div>
          <Row>
            <Col className="text-center pb-5 mb-2" style={{
              fontSize: "1.5rem",
              lineHeight: "1rem",
              fontFamily: "Roboto"
            }}> Software Engineer  -  Full Stack
            </Col>
          </Row>
        </Col>

      </Row>
    </Container>
  );
};

export default JumbotronPage;
