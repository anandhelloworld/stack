import QuestionData from "../AllQuestion/QuestionData";

export default function Users() {
  return (
    <div
      className="container d-flex flex-column"
      style={{ border: "1px solid green" }}
    >
      <div>
        <p>
          name:<span> Anand</span>
        </p>

        <p>
          email: :<span> Anand</span>
        </p>
      </div>
      <div>
        <button>Ask question </button>
      </div>
      <div>
        <QuestionData />
      </div>
    </div>
  );
}
