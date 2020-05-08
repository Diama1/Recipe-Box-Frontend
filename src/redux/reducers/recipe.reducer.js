import { 
    GET_RECIPE, 
    GET_RECIPE_ERROR, 
    GET_RECIPE_PENDING, 
    ADD_RECIPE_PENDING, 
    ADD_RECIPE, 
    ADD_RECIPE_ERROR, 
    DELETE_RECIPE, 
    DELETE_RECIPE_ERROR} 
from '../actions/types/action.type';

const initialState = {
    list: [],
    error: null,
    loading: false,
    message:''
  };

  export default (state = initialState, { type, payload }) => {
      switch (type) {
          case GET_RECIPE_PENDING:
              return {
                  ...state,
                  ...payload,
                  loading: true
                };
            case GET_RECIPE:
                return {
                    ...state,
                    list: payload,
                    loading: false
                }
            case GET_RECIPE_ERROR:
                return {
                    ...state,
                    error: payload
                }
            case ADD_RECIPE_PENDING:
                return {
                    ...state,
                    ...payload,
                    loading: true
                };
            case ADD_RECIPE:
                return {
                    ...state,
                    ...payload,
                    list: [...state.list, payload],
                    loading: false
                }
            case ADD_RECIPE_ERROR:
                return {
                    ...state,
                    error: payload
                }
            case DELETE_RECIPE:
                return {
                    ...state,
                    message: payload.message,
                    list: state.list.filter(recipe => recipe.id !== payload.id),
                };
            case DELETE_RECIPE_ERROR:
                return {
                    ...state,
                    error: payload,
                };
                
        default:
            return state;
      }
  }
