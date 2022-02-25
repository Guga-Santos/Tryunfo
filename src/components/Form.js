import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="forms">
        <h2>Crie uma nova carta!</h2>
        <label className="labels" htmlFor="name">
          Digite o nome da carta:
          <input
            type="text"
            id="name"
            data-testid="name-input"
            className="text"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label className="labels" htmlFor="description">
          Descreva a carta:
          <textarea
            data-testid="description-input"
            className="textarea"
            id="description"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label className="labels" htmlFor="attr-1">
          Attr1:
          <input
            type="number"
            data-testid="attr1-input"
            className="attr-1"
            id="attr-1"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label className="labels" htmlFor="attr-2">
          Attr2:
          <input
            type="number"
            data-testid="attr2-input"
            className="attr-2"
            id="attr-2"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label className="labels" htmlFor="attr-3">
          Attr2:
          <input
            type="number"
            data-testid="attr3-input"
            className="attr-3"
            id="attr-3"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label className="labels" htmlFor="image">
          URL da imagem:
          <input
            type="text"
            data-testid="image-input"
            className="image"
            id="image"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label className="labels" htmlFor="select">
          Raridade da carta:
          <select
            data-testid="rare-input"
            className="select"
            id="select"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        {hasTrunfo ? (
          <p>Você já tem um Super Trunfo em seu baralho</p>
        ) : (
          <label className="labels" htmlFor="checkbox">
            Super Trunfo?
            <input
              type="checkbox"
              data-testid="trunfo-input"
              name="cardTrunfo"
              id="checkbox"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
        )}
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
