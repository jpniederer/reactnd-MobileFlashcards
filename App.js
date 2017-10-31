import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import FlashStatusBar from './components/FlashStatusBar';
import { black } from './utils/colors';
import { setLocalNotification } from './utils/notificationSetup';
import { MainNavigator } from './utils/navigation';
import reduxThunk from 'redux-thunk';

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    const store = createStore(
      reducer,
      {},
      applyMiddleware(reduxThunk)
    );

    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <FlashStatusBar backgroundColor={black} barStyle='light-content' />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});