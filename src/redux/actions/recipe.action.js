import axios from 'axios';
import { GET_RECIPE, GET_RECIPE_ERROR, GET_RECIPE_PENDING, ADD_RECIPE_PENDING, ADD_RECIPE, ADD_RECIPE_ERROR, DELETE_RECIPE, DELETE_RECIPE_ERROR } from './types/action.type';
import { BASE_URL, BACKEND_URL } from '../../utils/constant';

export const getRecipePending = () => ({
    type: GET_RECIPE_PENDING,
    payload: true,
});
export const addRecipePending = () => ({
    type: ADD_RECIPE_PENDING,
    payload: true,
});

export const getAllRecipes = () => async (dispatch) => {
    dispatch(getRecipePending());
    try {
        const res = await axios.get(`${BACKEND_URL}/api/recipes`);
        dispatch({
            type: GET_RECIPE,
            payload: res.data.recipes
        })
        
    
    } catch(error) {
        dispatch({
            type: GET_RECIPE_ERROR,
            payload: error.response
        })
        console.log("ERROOR:", error);
    }
}

export const addRecipes = (name, ingredient, direction) => async (dispatch) => {
    dispatch(addRecipePending());
    const recipeData = {
        name,
        ingredient: ingredient.split("-"),
        direction: direction.split("-")
    }
    try {
        console.log(11111);
        const res = await axios.post(`${BACKEND_URL}/api/recipes`, recipeData);
        console.log(2222222);
        dispatch({
            type: ADD_RECIPE,
            payload: res
        })
        console.log(res);
        
    
    } catch(error) {
        dispatch({
            type: ADD_RECIPE_ERROR,
            payload: error.response
        })
        console.log("ERROR:", error);
    }
}

export const deleteRecipe = id => async (dispatch) => {
    try {
      const { data } = await axios.delete(`${BACKEND_URL}/api/recipes/${id}`, {
      });
      dispatch({
        type: DELETE_RECIPE,
        payload: { message: data.message, id },
      });
    } catch (error) {
      dispatch({
        type: DELETE_RECIPE_ERROR,
        payload: error.response,
      });
    }
  };

