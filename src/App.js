import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css'
import {Login, Sidebar, Restaurant, Menubar, Order, Category} from './components'

function App() {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Router>
    <Menubar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className="d-flex">
        <Sidebar collapsed={collapsed} />
        <div className="resturant">
          <Switch>
            <Route exact path="/restaurant">
              <Restaurant />
            </Route>
            <Route exact path="/">
              <Order />
            </Route>
            <Route exact path="/categories">
              <Category />
            </Route>
          </Switch>
        </div>
      </div>
      </Router>
  );
}

export default App;
