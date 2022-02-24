import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.isSavedButtonDisabled = this.isSavedButtonDisabled.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };
  }

  onInputChange({ target }) {
    const { name, value, type, checked } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    }, () => this.isSavedButtonDisabled());
  }

  onSaveButtonClick(e) {
    e.preventDefault();

    this.setState((before) => ({
      cards: [...before.cards, before],
      hasTrunfo: before.cards.some((obj) => obj.cardTrunfo),
    }), () => {
      this.setState((prev) => ({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        hasTrunfo: prev.cards.some((obj) => obj.cardTrunfo),
        isSaveButtonDisabled: true,
      }));
    });
  }

  isSavedButtonDisabled() {
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
        <div className="container">
          <Form
            { ...thisProps }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card { ...thisProps } />
        </div>
        {thisProps.cards.map((obj) => (
          <Card
            key={ obj.cardName }
            cardName={ obj.cardName }
            cardDescription={ obj.cardDescription }
            cardAttr1={ obj.cardAttr1 }
            cardAttr2={ obj.cardAttr2 }
            cardAttr3={ obj.cardAttr3 }
            cardImage={ obj.cardImage }
            cardRare={ obj.cardRare }
            cardTrunfo={ obj.cardTrunfo }
          />
        ))}
      </div>
    );
  }
}

export default App;
