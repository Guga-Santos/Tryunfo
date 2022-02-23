import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form className="forms">
        <label className="labels" htmlFor="name">
          Digite o nome da carta:
          <input
            type="text"
            data-testid="name-input"
            className="text"
            name="name"
          />
        </label>

        <label className="labels" htmlFor="description">
          Descreva a carta:
          <textarea
            data-testid="description-input"
            className="textarea"
            name="description"
          />
        </label>

        <label className="labels" htmlFor="attr-1">
          Attr1:
          <input
            type="number"
            data-testid="attr1-input"
            className="attr-1"
            name="attr-1"
          />
        </label>

        <label className="labels" htmlFor="attr-2">
          Attr2:
          <input
            type="number"
            data-testid="attr2-input"
            className="attr-2"
            name="attr-2"
          />
        </label>

        <label className="labels" htmlFor="attr-3">
          Attr2:
          <input
            type="number"
            data-testid="attr3-input"
            className="attr-3"
            name="attr-3"
          />
        </label>

        <label className="labels" htmlFor="image">
          URL da imagem:
          <input
            type="text"
            data-testid="image-input"
            className="image"
            name="image"
          />
        </label>

        <label className="labels" htmlFor="select">
          Raridade da carta:
          <select
            data-testid="rare-input"
            className="select"
            name="select"
            value=""
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label className="labels" htmlFor="checkbox">
          Super Trunfo?
          <input
            type="checkbox"
            data-testid="trunfo-input"
            name="checkbox"
          />
        </label>
        <button
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>

      </form>
    );
  }
}

export default Form;
