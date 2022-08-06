import { useEffect, useState } from "react";
import Quest from "./quest";
export default function Question() {
  const [question, setQuestion] = useState([]);
  const getquestionData = () => {
    fetch("https://62c5beaca361f725128d5b27.mockapi.io/question")
      .then((response) => response.json())
      .then((data) => setQuestion(data));
    console.log(question);
  };
  useEffect(() => {
    getquestionData();
  }, []);

  console.log(question);
  return (
    <div>
      <div>
        <h2>All Question</h2>
        <button> ask question</button>
      </div>
      {question.map((objQus) => {
        console.log("question:", objQus);
        return (
          <div>
            <Quest
              strQuestion={objQus.titile}
              strDescription={objQus.desc}
              intVotes={objQus.vote}
              intView={objQus.view}
              strAnswer={objQus.answer}
              id={objQus.id}
            />
            <hr />
          </div>
        );
      })}
    </div>
  );
}
