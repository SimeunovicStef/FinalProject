import React from 'react';
import Header from '../components/header/Header'
import Main from '../components/main/Main'
import Footer from '../components/footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from '../page/RegisterForm';
import LoginForm from '../page/LoginForm';
import { Link, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Header />

      <RegisterForm />

      <Footer />
    </>
  );
}

export default App;
