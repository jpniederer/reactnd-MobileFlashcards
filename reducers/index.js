import * as actions from '../actions';

function decks (state = {}, action) {
  switch (action.type) {
    case actions.ADD_DECK:
      return {
        ...state,
      };
    case actions.ADD_QUESTION_TO_DECK:
      return {

      };
    case actions.GET_DECK:
      return {

      };
    case actions.GET_DECKS:
      return {

      };
    default:
      return state;
  }
}

export default decks;