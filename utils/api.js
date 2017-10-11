import { AsyncStorage } from 'react-native';
import { setupInitialResults } from './_cards';
const FLASHCARDS_STORAGE_KEY = 'jpinederer:flashcards';

// Should return all decks + titles, questions, answers.
export function getDecks () {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(setupInitialResults);
}

// Should return the deck associated with the provided id.
export function getDeck ({ id }) {
  return AsyncStorage.getItem(id);
}

// Should accept a title and create a new deck for it.
export function saveDeckTitle ({ title }) {
  return AsyncStorage.mergeItem(title, JSON.stringify({
    [title]: null
  }));
}

// Should accept a title and a card (question, answer) and adds it to the list of questions for the deck.
export function addCardToDeck ({ title, card }) {
  return AsyncStorage.mergeItem(title, JSON.stringify({
    [title]: card
  }))
}