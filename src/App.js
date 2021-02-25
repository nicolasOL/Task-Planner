import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./Login";
import Principal from "./Principal";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
/*
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from "./TodoList";
import TodoApp from "./components/TodoApp"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Login} from './components/Login';
import moment from "moment";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
*/

const LoginView = () => <Login />;

const PrincipalView = () => <Principal />;

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul></ul>

          <hr />

          <Route exact path="/" component={LoginView} />
          <Route path="/inicio" component={PrincipalView} />
        </div>
      </Router>
    </div>
  );
}

export default App;
