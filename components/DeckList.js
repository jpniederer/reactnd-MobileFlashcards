import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DeckSummary from './DeckSummary';

export default class DeckList extends Component {
  state = { 
    decks: []
  }

  componentWillMount () {
    // Get Decks

    // Update decks in state
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home'
    }
  }
  // Will Map over the decks and create a List of DeckSummary components.
  render() { 
    return (
      <View style={styles.deck}>
        <Text>Deck List</Text>
        <DeckSummary />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deck: {
    flexDirection: 'row',
    marginTop: 12
  }
})