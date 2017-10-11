export const ADD_DECK = 'ADD_DECK';
export const GET_DECKS = 'GET_DECKS';
export const GET_DECK = 'GET_DECK';
export const ADD_QUESTION_TO_DECK = 'ADD_QUESTION_TO_DECK';

export function addDeck (title) {
  return {
    type: ADD_DECK,
    title,
  }
}

export function getDecks () {
  return {
    type: GET_DECKS
  }
}

export function getDeck (title) {
  return {
    type: GET_DECK,
    title,
  }
}

export function addQuestionToDeck (deck, question) {
  return {
    type: ADD_QUESTION_TO_DECK,
    deck,
    question,
  }
}