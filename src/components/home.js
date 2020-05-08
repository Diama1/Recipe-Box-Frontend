import React, { Component, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllRecipes, addRecipes, deleteRecipe } from '../redux/actions/recipe.action';


export class Recipes extends Component {
    state = {
        currentRecipeIng: [],
        currentRecipeName: '',
        currentRecipeDirection: [],
        currentRecipeId: null,
        loading: false,
        name: '',
        ingredient: '',
        direction: '',
        showModal: false
        
      }

    componentWillMount() {
        this.props.getAllRecipes();
      }

    componentWillReceiveProps({ recipeReducer }) {
        if (recipeReducer.list.length !== 0 ) {
            this.setState({ 
                currentRecipeId: recipeReducer.list[0].id, 
                currentRecipeIng: recipeReducer.list[0].ingredient, 
                currentRecipeName: recipeReducer.list[0].name, 
                currentRecipeDirection: recipeReducer.list[0].direction})

        }
    }

    handleOnChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

      handleSubmit = (e) => {
        e.preventDefault();
        const { name, ingredient, direction } = this.state;
        this.props.addRecipes(name, ingredient, direction);
      };
   
    render() {
        const { recipeReducer, deleteRecipe } = this.props;
        const { name, ingredient, direction } = this.state;
        return (
            <div className="container ">
                <div className="page-header">
                    <h1> Recipe Box </h1>
                </div>
                <div className="col-md-12">
                    { 
                    recipeReducer.list.map( recipe => (
                        <li key={recipe.id} onClick={() => this.setState({
                            currentRecipeId: recipe.id,
                            currentRecipeIng: recipeReducer.list.filter( item => item.name===recipe.name )[0].ingredient,
                            currentRecipeName: recipe.name,
                            currentRecipeDirection: recipeReducer.list.filter( item => item.name === recipe.name)[0].direction
                        })
                        }>
                            {recipe.name}</li>
                    ))}
                    
                </div>
                <div className="col-sm-12">
                    <header>
                    <span>{this.state.currentRecipeName} </span>  <i className="fas fa-trash-alt" onClick={e => deleteRecipe(this.state.currentRecipeId)}></i> <i className="fas fa-edit"></i>
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
                        <h5>Direction</h5>
                        <ol>
                        {
                                this.state.currentRecipeDirection && this.state.currentRecipeDirection.map( ingredient => (
                                <li key= {ingredient}>{ingredient}</li>
                                ))
                            }
                        </ol>                            
                    </div>
                    <footer>
                        <i className="far fa-plus-square" data-toggle="modal" data-target="#addRecipe"></i>
                        <div className="modal fade" role="dialog" id="addRecipe">
                            <div className="modal-dialog"> 
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h3 className="modal-title">Add New Recipe</h3>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>

                                    <div className="modal-body">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                                <input
                                                    type="text" 
                                                    name="name" 
                                                    className="form-control" 
                                                    placeholder="Recipe Name"
                                                    onChange={this.handleOnChange}
                                                    required />
                                            </div>
                                            <div className="form-group">
                                                <textarea
                                                    name="ingredient" 
                                                    className="form-control" 
                                                    placeholder="Add ingredients separate them with -"
                                                    onChange={this.handleOnChange}
                                                    required > 
                                                    </ textarea>
                                                <textarea 
                                                    name="direction" 
                                                    className="form-control mt-3" 
                                                    placeholder="Add direction separate them with - "
                                                    onChange={this.handleOnChange}
                                                    required>
                                                </textarea> 
                                            </div>
                                            <div className="modal-footer">
                                        <button type="submit" className="btn btn-success">Add</button>
                                    </div>
                                        </form>
                                         
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
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
    { getAllRecipes, addRecipes, deleteRecipe },
  )(Recipes)

