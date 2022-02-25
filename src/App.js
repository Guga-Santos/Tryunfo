import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.handleButtonDisable = this.handleButtonDisable.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.handleDeleteBtn = this.handleDeleteBtn.bind(this);

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
      filterName: '',
    };
  }

  handleButtonDisable() {
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

  handleDeleteBtn(e) {
    const namedCard = e.target.name;

    this.setState((before) => ({
      cards: before.cards.filter((obj) => obj.cardName !== namedCard),
      hasTrunfo: before.cards.some((ele) => ele.hasTrunfo === true),
    }), () => this.setState((prev) => ({
      hasTrunfo: prev.cards.some((ele) => ele.hasTrunfo === true),
    })));
  }

  onSaveButtonClick(e) {
    e.preventDefault();

    this.setState((before) => ({
      cards: [...before.cards, before],
      hasTrunfo: before.cards.some((obj) => obj.hasTrunfo),
    }), () => {
      this.setState((prev) => ({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        hasTrunfo: (prev.cards.some((obj) => obj.cardTrunfo)),
        cardTrunfo: false,
        isSaveButtonDisabled: true,
      }));
    });
  }

  onInputChange({ target }) {
    const { name, value, type, checked } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    },
    () => this.handleButtonDisable(),
    () => this.handleDeleteBtn());
  }

  render() {
    const thisProps = this.state;

    return (
      <div className="container-general">
        <h1>Tryunfo</h1>
        <div className="container">
          <Form
            { ...thisProps }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card { ...thisProps } />
        </div>
        <div className="filtersContainer">
          <label className="labels" htmlFor="filterName">
            Filtre seu deck pelo nome:
            <input
              id="filterName"
              name="filterName"
              type="text"
              className="filter-name"
              value={ this.filterName }
              data-testid="name-filter"
              onChange={ this.onInputChange }
            />
          </label>
        </div>
        <div className="cardDeck">
          {thisProps.cards
            .filter((card) => card.cardName.includes(thisProps.filterName))
            .map((obj) => (
              <div className="card-" key={ Math.random() }>
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
                <button
                  name={ obj.cardName }
                  key={ Math.random() }
                  type="button"
                  className="eraser"
                  data-testid="delete-button"
                  onClick={ this.handleDeleteBtn }
                >
                  Excluir
                </button>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default App;
