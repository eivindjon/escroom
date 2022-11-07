import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import {db} from "../firebase-config";
import { query, collection, onSnapshot } from "firebase/firestore";
import Room from "../components/Room"

export default function EscapeRooms() {
  const [trails, setTrails] = useState([{nameOfRoom: "Albebra 6.trinn", id: 1213}, {nameOfRoom: "Mongolske byer", id: 111}]);
  function testingMap(allTheRooms) {
    allTheRooms.map((room, id) => {
      console.log("index", id, "room", room.nameOfRoom)
    })
  }
  console.log("Før setting state:")
  testingMap(trails)


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
      console.log("etter satt state:")
      testingMap(trails)
    })
    return () => unsubscribe()
  },[])

  
  

  return (
    <Container>
      <Col>
        <Row>
          <div>
            {
            trails.map((room, index) => {
              return <Room key={room.id} nameOfRoom={room.nameOfRoom}/>})
            }
          </div>
          
        </Row>
      </Col>
    </Container>
  );
}
