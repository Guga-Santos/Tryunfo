import React from 'react';
import Form from './components/Form';
// import './App.css';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Card />
        <Form />
      </div>
    );
  }
}

export default App;
