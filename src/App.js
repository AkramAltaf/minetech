import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import SigninForm from "./components/SigninForm";
import SignupForm from "./components/SignupForm";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SigninForm} />
        <Route exact path="/signup" component={SignupForm} />
      </Switch>
    </Router>
  );
}

export default App;
