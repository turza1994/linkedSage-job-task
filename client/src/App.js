import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <Main />
          </div>
          <div className="col-sm-3">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
