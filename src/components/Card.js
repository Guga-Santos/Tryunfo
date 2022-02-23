import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
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
    } = this.props;

    return (
      <div className="cardbox">
        <h2 data-testid="name-card">
          {' '}
          { cardName }
        </h2>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <p data-testid="description-card">
          {' '}
          { cardDescription }
        </p>
        <p>
          Atributo 1:
          {' '}
          <span data-testid="attr1-card">{ cardAttr1 }</span>
        </p>
        <p>
          Atributo 2:
          {' '}
          <span data-testid="attr2-card">{ cardAttr2 }</span>
        </p>
        <p>
          Atributo 3:
          {' '}
          <span data-testid="attr3-card">{ cardAttr3 }</span>
        </p>
        <p data-testid="rare-card">
          {' '}
          { cardRare }
          {' '}
        </p>
        { cardTrunfo ? (
          <p data-testid="trunfo-card">
            Super Trunfo
          </p>
        ) : ''}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;
