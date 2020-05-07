import React, { Component, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllRecipes } from '../redux/actions/recipe.action';

export class Recipes extends Component {
    state = {
        currentRecipeIng: [],
        currentRecipeName: '',
        loading: false
      }

    componentWillMount() {
        this.props.getAllRecipes();
      }

    componentWillReceiveProps({ recipeReducer }) {
        if (recipeReducer.list.length !== 0 ) {
            this.setState({ currentRecipeIng: recipeReducer.list[0].ingredient, currentRecipeName: recipeReducer.list[0].name})

        }

        console.log(recipeReducer)
    }
   
    render() {
        const { recipeReducer } = this.props;
        return (
            <div className="container ">
                <div className="page-header">
                    <h1> Recipe Box </h1>
                </div>
                <div className="col-md-12">
                    { 
                    recipeReducer.list.map( recipe => (
                        <li key={recipe.id} onClick={() => this.setState({
                            currentRecipeIng: recipeReducer.list.filter( item => item.name===recipe.name )[0].ingredient,
                            currentRecipeName: recipe.name
                        })
                        }>
                            {recipe.name}</li>
                    ))}
                    
                </div>
                <div className="col-sm-12">
                    <header>
                    <span>{this.state.currentRecipeName}</span>  <i className="fas fa-trash-alt"></i> <i className="fas fa-edit"></i>
                    </header>

                    <div className="col-lg-12 body">
                        <h5>Ingredients</h5>
                        <ul>
                            {
                                this.state.currentRecipeIng && this.state.currentRecipeIng.map( ingredient => (
                                <li key= {ingredient}>{ingredient}</li>
                                ))
                            }
                            
                        </ul>
                        <ol>
                            <li>
                                In a medium saucepan, melt the butter over moderately low heat. 
                                Add the garlic and cook for 30 seconds. Stir in the cream, salt, pepper, and artichoke hearts. 
                                Cook until just heated through, about 3 minutes.
                            </li>
                            <li>
                            In a large pot of boiling, salted water, cook the fusilli until just done, about 13 minutes. 
                            Drain the pasta and toss with the cream sauce, Parmesan, and chives.
                            </li>
                            
                        </ol>

                    </div>
                    <footer>
                        <i className="far fa-plus-square"></i>
                    </footer>

                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ recipeReducer }) => ({
    recipeReducer,
  });
export default connect(
    mapStateToProps,
    { getAllRecipes },
  )(Recipes)

