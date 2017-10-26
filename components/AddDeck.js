import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import GenericButton from './GenericButton';
import { white } from '../utils/colors';
import { connect } from 'react-redux';

class AddDeck extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add Deck</Text>
        <GenericButton onPress={() => {}}>
          Add Deck
        </GenericButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15
  }
})

export default connect(

)(AddDeck);