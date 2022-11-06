import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import {db} from "../firebase-config";
import { query, collection, onSnapshot } from "firebase/firestore";
import Room from "../components/Room"

export default function EscapeRooms() {
  const [trails, setTrails] = useState(["Albebra 6.trinn", "Mongolske byer"]);



  // READ ALL TRAILS FROM database
  useEffect(() => {
    const q = query(collection(db, "trails"))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let trailsArray = [];
      querySnapshot.forEach((doc) => {
        trailsArray.push({...doc.data(), id: doc.id})
      });
      setTrails(trailsArray)
      console.log("resultat av query:", trailsArray)
      
    })
    return () => unsubscribe()
  },[])

  function testingMap(allTheRooms) {
    allTheRooms.map((room, index) => {
      console.log("index", index, "room", room.nameOfRoom)
    })
  }
  

  return (
    <Container>
      <Col>
        <Row>
          <Room number={"1"} nameOfRoom="SÅNN VIRKER DET" />
          {
          trails.map((room, index) => {
            <Room key={index} nameOfRoom={room.nameOfRoom}/>
          })
          }
        </Row>
      </Col>
    </Container>
  );
}
