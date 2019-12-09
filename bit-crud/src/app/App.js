import React from 'react';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginPage from '../page/LoginPage'


function App() {
  return (
    <>
      <Header />

      <LoginPage />

      <Footer />
    </>
  );
}

export default App;
