import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import axios from "axios";
function App() {
  const [state, setState] = useState();

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/home">
          <Users />
        </Route>
        <Route path="/home/:id">
          <UserDetails />
        </Route>
        <Route path="/about">about page</Route>
        <Route path="/contact">contact page</Route>
      </Switch>
    </div>
  );
}

export default App;
