import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Home from './Common/Home';
import Main from './Common/Main';
import Landing from './Component/Landing';
import { Provider } from "react-redux";
import store from './store';
import Detailed from './Common/DetailedPop';
import searching from './Component/searching';


class App extends Component {
  render() {
    return (
      <Router baseName={"/"}>
      <Home>
      <Provider store={store}>
        <Route exact path={"/"} component={Main} />
        <Route exact path={"/notes"} component={Landing} />
        <Route exact path={"/detailed_page/:id"} component={Detailed} />
        <Route exact path={"/searching.."} component={searching} />
      </Provider>
      </Home>
      </Router>  
    );
  }
}

export default App;

