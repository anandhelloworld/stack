import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Users = lazy(() => import("../users/Users"));
const Questions = lazy(() => import("../AllQuestion/QuestionData"));
const ViewQuestionDetails = lazy(() =>
  import("../QuestionDetails/ViewQuestionDetails")
);
const AllQuestions = lazy(() => import("../homepage/Questions"));
const page_routing = [
  { url: "/", component_name: Users },
  { url: "/users/", component_name: Users },
  { url: "/questions/", component_name: AllQuestions },
  { url: "/viewQuestion/:id", component_name: ViewQuestionDetails }
];
class DynamicPage extends Component {
  render() {
    return (
      <div id="dynamic_page" className="container-fluid h-100">
        <Routes>
          {page_routing.map((objRoute, i) => (
            <Route
              exact
              path={objRoute.url}
              key={i}
              element={<objRoute.component_name />}
            />
          ))}
        </Routes>
      </div>
    );
  }
}
export default DynamicPage;
