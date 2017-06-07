import React, { Component, PropTypes } from 'react'
import MultiLine from './MultiLine'
import './IngredientCard.sass'

class App extends Component {
  static PropTypes = {
    ingredients: PropTypes.array.isRequired
  }

  render() {

    return (
      <div className='ingredients'>
        <h1>Ingredients:</h1>
        <MultiLine text={this.props.ingredients} />
      </div>
    );
  }
}

export default App;
