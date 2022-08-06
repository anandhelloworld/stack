import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewQuestionDetails = (props) => {
  const { id: docId } = useParams();
  const url = `https://62c5beaca361f725128d5b27.mockapi.io/question/${docId}`;
  const [questionDetails, setQuestionDetails] = useState({});
  const [answer, setAnswer] = useState("");
  const fetchQuestionDetails = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setQuestionDetails(data);
        console.log(data);
      });
  };
  useEffect(() => {
    if (docId) {
      fetchQuestionDetails();
    }
  }, []);

  const SubmitAnswer = () => {
    if (answer) {
      fetch(url, { method: "PUT", body: JSON.stringify({ answer: answer }) })
        .then(() => {
          console.log("Success");
          setAnswer("");
          alert("Your answer is submitted.");
          fetchQuestionDetails();
        })
        .catch((err) => {
          console.error("Error in inset Data");
        });
    }
  };

  return (
    <>
      {questionDetails ? (
        <div className="container">
          <div className="row pt-3 d-flex">
            <div className="col-8">
              <h1>{questionDetails.titile}</h1>
            </div>
            <div className="col-4">
              <button className="btn btn-primary">Ask Question</button>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="col-2">View: {questionDetails.view}</div>
            <div className="col-10">
              <h4>{questionDetails.desc}</h4>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-2">Vote : {questionDetails.vote}</div>

            <div className="col-10">
              <h6>Answers:</h6>
              <span>{questionDetails.answer}</span>
            </div>
          </div>
          <div className="container">
            <h6>Your Answer</h6>
            <div className="form-floating pt-2 mb-4">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: "100px" }}
                value={answer}
                onChange={({ target }) => setAnswer(target.value)}
              ></textarea>
              <label htmlFor="floatingTextarea2">Answer</label>
            </div>
            <button className="btn btn-primary" onClick={SubmitAnswer}>
              Submit Answer
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ViewQuestionDetails;
