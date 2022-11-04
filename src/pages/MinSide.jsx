import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GoogleButton } from "react-google-button";
import "../App.css";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const MinSide = () => {
  const { user } = UserAuth();

  return (
    <Container>
      <Row>
        <Col xs={6}>
          {user?.displayName ? (
            <h2>Hei {user.displayName}</h2>
          ) : (
            <h2>Hei Ikke logga inn dude</h2>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MinSide;
