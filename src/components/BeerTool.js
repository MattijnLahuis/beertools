import React, { PureComponent } from 'react'
import IngredientCard from './IngredientCard'
import YieldCard from './YieldCard'
import './IngredientCard.sass'

class BeerTool extends PureComponent {
  constructor() {
    super()

    this.state = {
      recipe: {
        yieldInLiters: 25
      }
    }

    this.updateRecipeState = this.updateRecipeState.bind(this)
    this.handleRecipeInput = this.handleRecipeInput.bind(this)
    this.handleLitersInput = this.handleLitersInput.bind(this)
  }

  updateRecipeState(newValues = {}) {
    this.setState({
      recipe: Object.assign(
        {},
        this.state.recipe,
        newValues)
      })
  }

  handleRecipeInput(event) {
    const recipeInput = event.target.value
    const newValues = {}

    const yieldMatch = recipeInput.match(/Yield: ([\s\S]*?)\n/)

    if(yieldMatch) {
      //we expect the string to begin with the value, e.g. 5.75 US gallons
      const yieldValue = yieldMatch[1].split(" ")[0]

      if(!isNaN(yieldValue)) {
        newValues.originalYield = yieldValue
        newValues.originalYieldText = yieldMatch[1]
      }
    }

    const ingredientsMatch = recipeInput.match(/Ingredients:([\s\S]*?)Additional Instructions/)

    if(ingredientsMatch) {
      const ingredients = ingredientsMatch[1]
        //remove preceding and trailing white spaces, new lines, carriage returns
        .replace(/^\s+|\s+$/g, '')
        //remove white spaces before every line of ingredients
        .replace(/\n\s+/g, '\n')

      newValues.ingredients = ingredients
      newValues.textAreaValue = event.target.value
    }
    this.updateRecipeState(newValues)
  }

  handleLitersInput(event) {
    this.updateRecipeState({
      yieldInLiters: event.target.value
    })
  }

  render() {

    const { textAreaValue, ingredients, originalYield, originalYieldText, yieldInLiters } = this.state.recipe

    return (
      <div>
        <textarea
          rows='10'
          cols='50'
          placeholder='Paste recipe here'
          ref='recipeTextArea'
          value={ textAreaValue }
          onChange={this.handleRecipeInput}
        >
        </textarea>

        <div>
          {
            ingredients ? (
              <div className="ingredientCard">
                <IngredientCard ingredients={ ingredients } />
                <div>
                  { originalYield ? (
                    <YieldCard yieldInLiters={yieldInLiters} originalYieldText={originalYieldText} literCallback={this.handleLitersInput} />
                    ) : null
                  }
                </div>
                <IngredientCard ingredients={ingredients} />
              </div>
            ) : null
          }
        </div>
      </div>
    );
  }
}

export default BeerTool;
