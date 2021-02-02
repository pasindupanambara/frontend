
import React, { Component } from 'react';
import GlobalStyle from './globalStyles';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import Footer from './components/Footer/Footer';
import Login from "./components/login.component";
import SignUp from "./components/signup.component";

class App extends Component {
  constructor(props) {
    super (props) ;
    this.this.state = {apiResponse: ""};
  }

  callAPI{
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}))
      .catch(err => err);
  }

  componentDidMount(){
    this.callAPI();
  }


function App() {
  return (<Router>
    <GlobalStyle/>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>ORDER YOUR HEALTH & WELLNESS PRODUCTS TODAY!</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>Home</Link>
              </li>
              <p className="App-intro">{this.state.apiResponse}</p>
            </ul>
          </div>
        </div>
      </nav>
      <Switch><Route exact path='/' exact component={Home} /></Switch>
      
          <Switch>
            
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        
        
     
    <Footer/>
    </div>
    </Router>
  );
}
}

export default App; 