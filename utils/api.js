import { AsyncStorage } from 'react-native';
import { setupInitialResults, FLASHCARDS_STORAGE_KEY } from './_cards';

// Should return all decks + titles, questions, answers.
export function getDecks () {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(setupInitialResults);
}

// Should return the deck associated with the provided id.
export function getDeck ({ id }) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(results => {
      const decks = JSON.parse(results);
      return decks[id];
    });
}

// Should accept a title and create a new deck for it.
export function saveDeckTitle ({ title }) {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
      questions: [],
    }
  }));
}

// Should accept a title and a card (question, answer) and adds it to the list of questions for the deck.
export function addCardToDeck ({ title, card }) {
  let decks = getDecks();
  const { question, answer } = card;
  const updatedQuestions = decks[title].concat({
    question,
    answer,
  });

  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
      updatedQuestions
    }
  }));
}