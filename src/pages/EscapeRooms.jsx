import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { db } from "../firebase-config";
import { query, collection, onSnapshot } from "firebase/firestore";
import RoomListElement from "../components/RoomListElement";
import { Link } from "react-router-dom";

export default function EscapeRooms() {
  const [trails, setTrails] = useState([
    { nameOfRoom: "Albebra 6.trinn", id: 1213 },
    { nameOfRoom: "Mongolske byer", id: 111 },
  ]);
  function testingMap(allTheRooms) {
    allTheRooms.map((room, id) => {
      console.log("index", id, "room", room.nameOfRoom);
    });
  }

  // READ ALL TRAILS FROM database
  useEffect(() => {
    const q = query(collection(db, "trails"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let trailsArray = [];
      querySnapshot.forEach((doc) => {
        trailsArray.push({ ...doc.data(), id: doc.id });
      });

      setTrails(trailsArray);
      console.log("resultat av query:", trailsArray);
      console.log("etter satt state:");
    });
    return () => unsubscribe();
  }, []);

  return (
    <Container>
      <Col>
        <Row>
          <div>
            {trails.map((room, index) => {
              return (
                <RoomListElement
                  key={room.id}
                  nameOfRoom={room.nameOfRoom}
                  urlOfRoom={room.id}
                  pic={room.trailPic}
                />
              );
            })}
          </div>
        </Row>
      </Col>
    </Container>
  );
}
