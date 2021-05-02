import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShipmetDetails from "./components/crud/ShipmetDetails";
import { GlobalProvider } from "./context/GlobalState";
import {Home} from './components/Home';
import {EditShipment} from './components/crud/EditShipment'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
    <GlobalProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shipmentdetails" component={ShipmetDetails} />
          <Route path="/edit/:Id" component={EditShipment} />
        </Switch>
    </Router>
  </GlobalProvider>
    </div>
  );
}

export default App;
