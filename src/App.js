import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: false,
    };
  }

  onInputChange({ target }) {
    const { name, value, type, checked } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  }

  render() {
    const thisProps = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        {/* <Form />
        <Card /> */}
        <div className="container">
          <Form { ...thisProps } onInputChange={ this.onInputChange } />
          <Card { ...thisProps } />
        </div>
      </div>
    );
  }
}

export default App;
