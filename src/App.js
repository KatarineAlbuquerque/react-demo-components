import React from 'react';
import Footer from './components/Footer/Footer';

import Header from './components/Header/Header';
import Section from './components/Section/Section';

 const App = (props) => {
  return (
    <div className="App">
      <Header titulo="Meus Componentes" subtitulo="Com Parâmetros" />
      <Section />
      <Footer titulo="Componente Footer" />
    </div>
  );
}

export default App;
