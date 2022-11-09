import React from "react";
import { Container, Row, Col, Input, Button, Form } from "react-bootstrap";
export default function LagRom() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="nameOfRoom">
                <Form.Label>Hva skal rommet hete?</Form.Label>
                <Form.Control type="text" placeholder="Rommets navn" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col>
            <div>
              <h1>Hey</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
