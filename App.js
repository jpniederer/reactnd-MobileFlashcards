import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { TabNavigator, StackNavigator } from 'react-navigation';
import DeckSummary from './components/DeckSummary';

export default class App extends React.Component {
  componentDidMount() {

  }

  // store={createStore(reducer)}
  render() {
    return (
      <Provider>
        <View style={styles.container}>
          <Text>This is MobileFlashcards</Text>
          <DeckSummary />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
