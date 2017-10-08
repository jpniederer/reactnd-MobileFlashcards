import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { TabNavigator, StackNavigator } from 'react-navigation';
import DeckList from './components/DeckList';
import Header from './components/Header';

const MainNavigator = StackNavigator({
  Home: {
    screen: DeckList,
  },
})

export default class App extends React.Component {
  componentDidMount() {

  }

  // store={createStore(reducer)}
  render() {
    return (
      <Provider>
        <View style={styles.container}>
          <Header>
            MobileFlashcards
          </Header>
          <Text>This is MobileFlashcards</Text>
          <MainNavigator />
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
