import {
  getDeck,
  getDecks,
  addDeck,
  addCardToDeck
} from '../utils/api';

export const ADD_DECK = 'ADD_DECK';
export const GET_DECKS = 'GET_DECKS';
export const GET_DECK = 'GET_DECK';
export const ADD_QUESTION_TO_DECK = 'ADD_QUESTION_TO_DECK';
export const RECEIVE_DECKS = 'RECEIVE_DECKS';

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addNewDeck (title) {
  return {
    type: ADD_DECK,
    payload: addDeck(title)
  }
}

export function getAllDecks () {
  console.log(getDecks());
  return {
    type: GET_DECKS,
    payload: getDecks()
  }
}

export function getDeckByTitle (title) {
  return {
    type: GET_DECK,
    payload: getDeck(title)
  }
}

export function addQuestionToDeck (deck, question) {
  return {
    type: ADD_QUESTION_TO_DECK,
    payload: addCardToDeck(deck, question)
  }
}