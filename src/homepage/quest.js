import { useNavigate } from "react-router-dom";
export default function Quest({
  strQuestion = "AAA",
  strDescription = "dddd",
  arrTags = ["a", "b", "c"],
  intVotes = 10,
  intView = 11,
  id = ""
}) {
  const navigate = useNavigate();
  console.log(strDescription);
  return (
    <>
      {strQuestion !== "" ? (
        <div className="d-flex flrex-row row-gap-3">
          <div
            className="d-flex flex-column mr-3 "
            style={{ border: "1px solid red" }}
          >
            <div>
              vote: {intVotes}
              <hr />
              <button>upvote</button>
              <button>downnvote</button>
            </div>
            <hr />
            <div>view: {intView}</div>
          </div>
          <div
            className="d-flex flex-column ml-3 "
            style={{ border: "1px solid blue" }}
          >
            <h3 onClick={() => navigate(`/viewQuestion/${id}`)}>
              {strQuestion}{" "}
            </h3>
            <p>{strDescription} </p>

            {arrTags.map((tag, i) => {
              return (
                <span
                  style={{ width: "3vw" }}
                  key={`key_${i}`}
                  className="badge badge-secondary bg-dark text-light"
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
}

/**
 * 
 *  <>
     
  </>
 */
