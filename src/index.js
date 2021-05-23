import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Courses from './pages/Courses';
import SingleCourse from './pages/SingleCourse';
import About from './pages/About';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Header />
      <Switch>
        <Route exact path="/" >
          <App />
        </Route>
        <Route path="/signup" >
          <Signup />
        </Route>
        <Route path="/login" >
          <Login />
        </Route>
        <Route path="/courses" >
          <Courses />
        </Route>
        <Route path="/course/:courseId" >
          <SingleCourse />
        </Route>
        <Route path="/about" >
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
