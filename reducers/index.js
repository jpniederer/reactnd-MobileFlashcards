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
      const card = action.payload;
      return {
        ...state,
        [card.title]: {
          title: card.title,
          questions: card.questions
        }
      };
    case actions.GET_DECK:
      return action.decks;
    case actions.GET_DECKS:
      return action.decks;
    default:
      return state;
  }
}

export default decks;