import "./styles.css";
import Header from "./header";
import Sidebar from "./sidebar";
import DynamicPage from "./routes/router";
import Question from "./homepage/Questions";
// import Provider from "./provider";
import Users from "./users/Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Header />
        </div>

        <div className="container d-flex flex-direction-row">
          <div className="d-flex" style={{ height: "80vh" }}>
            <Sidebar />
          </div>
          <div className="col d-flex" style={{ border: "1px solid red" }}>
            <DynamicPage />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
