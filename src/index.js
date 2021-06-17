import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './context';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import Logout from './pages/auth/Logout';
import Courses from './pages/Courses';
import SingleCourse from './pages/SingleCourse';
import About from './pages/About';
import Dashboard from './pages/user/Dashboard';
import EnrolledCourses from './pages/user/EnrolledCourses';
import PrivateRoute from './pages/PrivateRoute';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <AuthProvider>
        <Header />
        <div className="content-wrapper">
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
          <Route path="/logout" >
            <Logout />
          </Route>
          <PrivateRoute path="/dashboard" >
            <Dashboard />
          </PrivateRoute>
          <Route path="/courses" >
            <Courses />
          </Route>
          <Route path="/course/:slug" >
            <SingleCourse />
          </Route>
          <PrivateRoute path="/enrolled-courses" >
            <EnrolledCourses />
          </PrivateRoute>
          <Route path="/about" >
            <About />
          </Route>
        </Switch>
        </div>
        <Footer />
      </AuthProvider>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
