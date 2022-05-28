import React, { Component } from 'react';

class PopUp extends Component {
  constructor() {
    super();
    this.state = {
      triggerVal: true,
    };
    this.handleCloseBtn = this.handleCloseBtn.bind(this);
  }

  handleCloseBtn() {
    this.setState( (before) => ({
      triggerVal: !(before.triggerVal),
    }));
  }

  render() {
    const { triggerVal } = this.state
    return triggerVal ? (
    <div className="PopUp-body">
        <div className="PopUp-Container">
          <button
            type="button"
            className="closeBtn"
            onClick={ this.handleCloseBtn }
          >
            Fechar
          </button>
        </div>
        </div>
     ) : ''

  }
}

export default PopUp;
