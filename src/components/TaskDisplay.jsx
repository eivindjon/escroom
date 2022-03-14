

import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

function TaskDisplay() {
  const defaultQuestions = [{qtext: "Store peter heter hva?", qanswer: "Peter"}, 
                            {qtext: "HVor gakmmell er jeg?",  qanswer: "32"}]
  const [tasks, setTasks] = useState(defaultQuestions);
  const taskCollectionRef = collection(db, "math")
  useEffect(() => {

    const getTasks = async () => {
      const questions = await getDocs(taskCollectionRef)
      console.log("Logging docs: ", questions)
      setTasks(questions.docs.map(doc => ({...doc.data(), id: doc.id})));

    }
    getTasks()
  }, [])
  console.log(tasks);
  
  return (
    <div>
        <h1>Liste med oppgaver:</h1>
        <Container>
        <Table striped bordered hover>
          <tbody>
                {tasks.map((tasks) => {
                  return (
                    <tr key={tasks.qtext}>
                      <td>{tasks.qtext}</td>
                      <td>{tasks.qanswer}</td>
                    </tr>
                  )})}
            </tbody>
        </Table>
        </Container>
    </div>
  )
}

export default TaskDisplay;