import React from "react";
import { Container, Row, Col, Input, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { UserAuth } from "../context/AuthContext";
import TagInput from "../components/TagInput";

export default function LagRom() {
  const user = UserAuth();
  const userID = user?.user?.uid;
  console.log(userID);
  const [qAmount, setQAmount] = useState(0);
  //store values of input-fields and apply as needed..
  const [allInputValues, setAllInputValues] = useState([]);
  const [tags, setTags] = useState([]);
  const [nameOfRoom, setNameOfRoom] = useState("");

  // Add a new document with a generated id.
  const trailsCollectionRef = collection(db, "trails");

  async function addTrail() {
    let data = getAllQuestionsAndSolutions();
    const newDocAdded = await addDoc(trailsCollectionRef, data);
    console.log(newDocAdded);
  }

  // const dummyDoc = {
  //   createdBy: user.user.uid,
  //   nameOfRoom: nameOfRoom,
  //   trailPic: "shiiiiet",
  // };

  function updateAndSet() {
    const allInputs = document.getElementsByTagName("input");
    console.log("allInputs over here:", allInputs);
    let testInput = [];
    if (allInputs.length > 5) {
      for (let i = 4; i < allInputs.length; i += 2) {
        let qNs = [];
        if (i + 1 !== allInputs.length) {
          qNs = [allInputs[i].value, allInputs[i + 1].value];
        } else {
          qNs = [allInputs[i].value, "siste stopp"];
        }
        testInput.push(qNs);
      }
    }
    console.log("testInput looks like:", testInput);
    setAllInputValues(testInput);
    setQAmount(qAmount + 1);
  }

  function getAllQuestionsAndSolutions() {
    const questionfields = document.getElementsByClassName("q");
    const solutions = document.getElementsByClassName("s");

    let dbdoc = {
      nameOfRoom: nameOfRoom,
      tags: tags,
    };

    for (let i = 0; i < questionfields.length; i++) {
      let qKey = "q" + String(i + 1);
      let qVal = questionfields[i].value;
      let sKey = "s" + String(i + 1);
      let sVal = solutions[i].value;
      dbdoc[qKey] = qVal;
      dbdoc[sKey] = sVal;
    }
    console.log(dbdoc);

    return dbdoc; // Get everything lined up for writing to db.
  }
  function Question({ number, value = "" }) {
    console.log("Creating new question", number);
    console.log("Values was", value);
    return (
      <div>
        <Form.Group>
          <Form.Label>Spørsmål nr {" " + number}</Form.Label>
          <Form.Control
            type="text"
            placeholder="Spørsmål.."
            className="q"
            defaultValue={value[0]}
          />
          {/* <Form.Label>Løsning</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="Løsning"
            className="s"
            defaultValue={value[1]}
          />
        </Form.Group>
      </div>
    );
  }

  function handleChange(e) {
    setNameOfRoom(e.target.value);
  }
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="nameOfRoom">
                <Form.Label>Hva skal rommet hete?</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Rommets navn"
                  onChange={handleChange}
                />
                <TagInput onTagsChange={setTags} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="question">
                <Form.Label>Spørsmål nr{1}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Spørsmål.."
                  className="q"
                />
                <Form.Control type="text" placeholder="Løsning" className="s" />
              </Form.Group>
              {[...Array(qAmount)].map((_, i) => (
                <Question key={i} number={i + 2} value={allInputValues[i]} />
              ))}
              <Button onClick={() => updateAndSet()}>Legg til spørsmål</Button>
              <Button onClick={() => setQAmount(qAmount - 1)}>
                Fjern spørsmål
              </Button>

              <Button
                onClick={addTrail}
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
