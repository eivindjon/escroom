import React from "react";
import { useParams } from "react-router-dom";

export default function ActiveRoom() {
  const params = useParams();
  console.log(params.id);

  return <div>ActiveRoomw : {params.id}</div>;
}
