import React from "react";
import { Container, Row, Col, Input, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function LagRom() {
  const [qAmount, setQAmount] = useState(0);
  //store values of input-fields and apply as needed..
  const [allInputValues, setAllInputValues] = useState([]);



  // useEffect(() => {
    
  //   console.log("Sensed state chenge", testInput)
  // }, [qAmount]);

  function updateAndSet() {
    const allInputs = document.getElementsByTagName("input");
    console.log("allInputs over here:", allInputs)
    let testInput = []
    if (allInputs.length > 10) {
      for (let i = 6; i < allInputs.length; i+= 2) {
        let qNs = []
        if (i+1 !== allInputs.length) {
          qNs = [allInputs[i].value, allInputs[i+1].value]
        } else {
          qNs = [allInputs[i].value, "siste stopp"]
        }
        testInput.push(qNs)
    }
    }
    console.log("testInput looks like:", testInput)
    setAllInputValues(testInput)
    setQAmount(qAmount + 1)
  }

  function getQuestions() {
    const questionfields = document.getElementsByClassName("q");
    const solutions = document.getElementsByClassName("s");

    let dbdoc = {

    }

    for (let i = 2; i < questionfields.length; i++) {
      let qKey = "q"+ String(i);
      let qVal = questionfields[i].value;
      let sKey = "s" + String(i);
      let sVal = solutions[i].value
      dbdoc[qKey] = qVal
      dbdoc[sKey] = sVal 

      
      
    }
    console.log(dbdoc);
    // Get everything lined up for writing to db.
  }
  function Question({number, value}) {
    console.log("Creating new question", number);
    console.log("Values was", value);
    return (
      <div>
        <Form.Group>
          <Form.Label>Spørsmål nr  {" "+ number}</Form.Label>
          <Form.Control type="text" placeholder="Spørsmål.." className="q" defaultValue={value[0]} />
          {/* <Form.Label>Løsning</Form.Label> */}
          <Form.Control type="text" placeholder="Løsning" className="s" defaultValue={value[1]}/>
        </Form.Group>
      </div>
    );
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
                <Form.Label>Tags</Form.Label>
                <Form.Control type="text" placeholder="Tags" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="q0">
                <Form.Label>Spørsmål nr{1}</Form.Label>
                <Form.Control type="text" placeholder="Spørsmål.." className="q"/>
                <Form.Control type="text" placeholder="Løsning" className="s"/>
              </Form.Group>
              {[...Array(qAmount)].map((_, i) => (
                <Question key={i} number={i+2} value={allInputValues[i]} />
              ))}
              <Button onClick={() => updateAndSet()}>
                Legg til spørsmål
              </Button>

              <Button
                onClick={() => getQuestions()}
                variant="primary"
                // type="submit"
              >
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
