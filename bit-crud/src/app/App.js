import React from 'react';
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from '../page/RegisterForm';
import LoginForm from '../page/LoginForm';
import { Link, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Header />


      <Main />
      <RegisterForm />
      <LoginForm />

      <Footer />
    </>
  );
}

export default App;
