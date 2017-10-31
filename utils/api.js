import { AsyncStorage } from 'react-native';
import { setupInitialResults, FLASHCARDS_STORAGE_KEY } from './_cards';

// Should return all decks + titles, questions, answers.
export function getDecks () {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(setupInitialResults);
}

// Should return the deck associated with the provided id/title.
export function getDeck (title) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(results => {
      const decks = JSON.parse(results);
      return decks[title];
    });
}

// Should accept a title and create a new deck for it.
export function saveDeckTitle (title) {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
      questions: [],
    }
  }));
}

// Should accept a title and a card (question, answer) and adds it to the list of questions for the deck.
export function addCardToDeck (title, card) {  
  return getDeck(title)
    .then(result => {
      return result;
    })
    .then(deck => {
      const { question, answer } = card;
      const updatedQuestions = deck.questions.concat({
        question,
        answer,
      });

      AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
        [title]: {
          title,
          questions: updatedQuestions
        }
      }));
    })
    .catch(() => {
      console.log('Error adding card.');
    });
}