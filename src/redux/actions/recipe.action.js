import axios from 'axios';
import { GET_RECIPE, GET_RECIPE_ERROR, GET_RECIPE_PENDING } from './types/action.type';
import { BASE_URL } from '../../utils/constant';

export const getRecipePending = () => ({
    type: GET_RECIPE_PENDING,
    payload: true,
});
export const getAllRecipes = () => async (dispatch) => {
    dispatch(getRecipePending());
    try {
        const res = await axios.get(`${BASE_URL}/api/recipes`);
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