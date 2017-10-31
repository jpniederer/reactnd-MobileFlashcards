import * as actions from '../actions';

function decks(state = {}, action) {
  switch (action.type) {
    case actions.RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case actions.ADD_DECK:
      const { title } = action;
      return {
        ...state,
        [title]: {
          title,
          questions: []
        }
      };
    case actions.ADD_QUESTION_TO_DECK:
      console.log(action);
      const newState = {...state};
      newState[action.title].questions.push(action.card);
      return newState;
    case actions.GET_DECK:
      return action.decks;
    case actions.GET_DECKS:
      return action.decks;
    default:
      return state;
  }
}

export default decks;