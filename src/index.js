import React from "react";
import ReactDOM from "react-dom";
import ActivitiesList from "./ActivitiesList";

class App extends React.Component {
  render() {
    return <ActivitiesList />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
