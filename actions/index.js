import {
  getDeck,
  getDecks,
  saveDeckTitle,
  addCardToDeck
} from '../utils/api';

export const ADD_DECK = 'ADD_DECK';
export const GET_DECKS = 'GET_DECKS';
export const GET_DECK = 'GET_DECK';
export const ADD_QUESTION_TO_DECK = 'ADD_QUESTION_TO_DECK';
export const RECEIVE_DECKS = 'RECEIVE_DECKS';

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export const addNewDeck = (title) => dispatch => (
  saveDeckTitle(title)
    .then(() => dispatch({
      type: ADD_DECK,
      title
    }))
);

export function getAllDecks() {
  return {
    type: GET_DECKS,
    payload: getDecks()
  }
}

export function getDeckByTitle(title) {
  return {
    type: GET_DECK,
    payload: getDeck(title)
  }
}

export const addQuestionToDeck = (title, card) => {
  return (dispatch) => {
    addCardToDeck(title, card)
      .then(() => {
        dispatch({
          type: ADD_QUESTION_TO_DECK,
          title,
          card
        })
      })
  }
}