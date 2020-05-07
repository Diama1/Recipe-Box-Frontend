import { GET_RECIPE, GET_RECIPE_ERROR, GET_RECIPE_PENDING} from '../actions/types/action.type';

const initialState = {
    list: [],
    error: null,
    loading: false,
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
                
        default:
            return state;
      }
  }
