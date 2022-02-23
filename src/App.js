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
      isSaveButtonDisabled: true,
    };
  }

  onInputChange({ target }) {
    const { name, value, type, checked } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    }, () => this.isSaveButtonDisabled());
  }

  isSaveButtonDisabled() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const max = 90;
    const min = 0;
    const maxSum = 210;
    const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

    let valid = false;

    if (sum > maxSum) valid = true;
    if (Number(cardAttr1) > max || Number(cardAttr1) < min) valid = true;
    if (Number(cardAttr2) > max || Number(cardAttr2) < min) valid = true;
    if (Number(cardAttr3) > max || Number(cardAttr3) < min) valid = true;
    if (!cardName || !cardDescription || !cardImage || !cardRare) valid = true;

    this.setState({
      isSaveButtonDisabled: valid,
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
