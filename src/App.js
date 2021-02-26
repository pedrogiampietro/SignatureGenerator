import React from 'react';

import logo from './assets/img/logo-simbolo.svg';
import Footer from './components/Footer';
import Header from './components/Header';
import Signature from './components/Signature';

function App() {
  return (
    <div>
      <Header logo={logo} />

      <Signature />

      <Footer year="2021" text="L8 Group" />
    </div>
  );
}

export default App;
