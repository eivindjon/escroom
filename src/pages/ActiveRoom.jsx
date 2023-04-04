import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";

export default function ActiveRoom() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const params = useParams();
  const roomId = params.id;

  useEffect(() => {
    const fetchQuestions = async () => {
      const questionDoc = await getDoc(doc(collection(db, "trails"), roomId));
      if (questionDoc.exists()) {
        const data = questionDoc.data();
        const questions = Object.keys(data)
          .filter((key) => key.startsWith("q"))
          .map((key) => ({
            question: data[key],
            answer: data[key.replace("q", "s")],
          }));
        setQuestions(questions);
        setCurrentQuestion(questions[0].question);
      } else {
        console.log("Question not found");
      }
    };

    fetchQuestions();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer === questions[currentIndex].answer) {
      setCurrentIndex(currentIndex + 1);
      setAnswer("");
      if (currentIndex + 1 < questions.length) {
        setCurrentQuestion(questions[currentIndex + 1].question);
      } else {
        setCurrentQuestion("You have completed the room!");
      }
    }
  };

  return (
    <div>
      <h2>Question:</h2>
      <p>{currentQuestion}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Answer:
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
