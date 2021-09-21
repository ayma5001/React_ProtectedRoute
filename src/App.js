import "./App.css";
import { useState } from "react";
import Profile from "./Profile";
import ProtectedRoute from "./ProtectedRoute";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <Route path="/" exact>
        <button
          onClick={() => {
            setIsAuth(true);
          }}
        >
          signin
        </button>
        <button
          onClick={() => {
            setIsAuth(false);
          }}
        >
          signout
        </button>
        <Link to="/profile"> Profile </Link>
      </Route>
      <ProtectedRoute path="/profile" component={Profile} isAuth={isAuth} />
    </Router>
  );
}

export default App;
