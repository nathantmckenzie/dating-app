import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import SignUpForm from "./pages/SignUpForm";
import Home from "./pages/Home";
import PersonalityQuiz from "./pages/PersonalityQuiz";
import PhotoUpload from "./pages/PhotoUpload";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Home} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/personalityquiz" component={PersonalityQuiz} />
          <Route path="/photoupload" component={PhotoUpload} />
        </div>
      </Router>
    );
  }
}

export default App;
