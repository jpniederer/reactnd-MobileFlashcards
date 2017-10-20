import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { TabNavigator, StackNavigator } from 'react-navigation';
import DeckList from './components/DeckList';
import Header from './components/Header';
import { Constants } from 'expo';
import { red } from './utils/colors';
import { setLocalNotification } from './utils/notificationSetup';

function FlashStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} { ...props} />
    </View>
  )
}

const MainNavigator = StackNavigator({
  Home: {
    screen: DeckList,
  },
})

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  // store={createStore(reducer)}
  render() {
    return (
      <Provider>
        <View style={styles.container}>
          <FlashStatusBar backgroundColor={red} barStyle='light-content' />
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
