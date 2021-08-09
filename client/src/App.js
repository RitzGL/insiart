import "./App.css";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
function App() {
  return (
    <Router>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/signup">
        <SignupPage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
    </Router>
  );
}

export default App;
