import React, { Component } from 'react'
import PropTypes from 'prop-types'

class YieldCard extends Component {
  render() {

    const { originalYieldText, yieldInLiters, literCallback } = this.props

    return (
      <div>
        <h3>Yield</h3>
        <div>Original yield: { originalYieldText }</div>
        <div>
          Desired yield in not stupid system:
          <input
            type="text"
            ref='yieldInLiters'
            value={yieldInLiters}
            onChange={literCallback}
          />
        </div>
      </div>
    );
  }
}

YieldCard.PropTypes = {
  originalYieldText: PropTypes.string.isRequired,
  yieldInLiters: PropTypes.number.isRequired,
  literCallback: PropTypes.func.isRequired
}

export default YieldCard;
