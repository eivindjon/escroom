import React from "react";
import { Container, Row, Col, Input, Button, Form } from "react-bootstrap";
import {useState, useEffect} from "react";

export default function LagRom() {
  const [qAmount, setQAmount] = useState([""])

  // useEffect(() => {
  //   console.log("State changed. Questions->", questions)
  // }, [questions]);

  function getQuestions() {
    const questionfields = document.getElementsByClassName("questionInput")
    console.log(questionfields)
    // Get everything lined up for writing to db.
    
  };
  function Question() {
    return(
      <div>
        <Form.Group>
          <Form.Label>
            Spørsmålstekst
          </Form.Label>
          <Form.Control type="text" placeholder="Spørsmål.." />
        </Form.Group>
      </div>
    )
  }

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
              <Form.Group>
                
              </Form.Group>
              <Button onClick={}>
              

              <Button onClick={() => getQuestions()} variant="primary" type="submit">
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
