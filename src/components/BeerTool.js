import React, { PureComponent } from 'react';
import IngredientCard from './IngredientCard'
import './IngredientCard.sass'

class BeerTool extends PureComponent {
  constructor() {
    super()

    this.state = {
      recipe: {
        textAreaValue: ''
      }
    }
  }

  handleRecipeInput(event) {
    const recipeInput = event.target.value

    const result = recipeInput.match(/Ingredients:([\s\S]*?)Additional Instructions/)

    if(result) {
      const ingredients = result[1].replace(/^\s+|\s+$/g, '').replace(/\n\s+/g, '\n')

      console.log(ingredients)

      this.setState({
        recipe: Object.assign(
          {},
          this.state.recipe,
          {
            ingredients: ingredients,
            textAreaValue: event.target.value
          })
      })
    }
  }

  render() {

    return (
      <div>
        <textarea
          rows='10'
          cols='50'
          placeholder='Paste recipe here'
          ref='recipeTextArea'
          value={this.state.recipe.textAreaValue}
          onChange={this.handleRecipeInput.bind(this)}
        >
        </textarea>

        <div>
          {
            this.state.recipe.ingredients ? (
              <div className="ingredientCard">
                <IngredientCard ingredients={this.state.recipe.ingredients} />
                <div>
                  <input type="text" />
                </div>
                <IngredientCard ingredients={this.state.recipe.ingredients} />
              </div>
            ) : null
          }
        </div>
      </div>
    );
  }
}

export default BeerTool;
