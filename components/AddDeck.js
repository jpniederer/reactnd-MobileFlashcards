import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function AddDeck () {
  return (
    <View style={styles.deck}>
      <Text>Add Deck</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  deck: {
    flexDirection: 'row',
    marginTop: 12
  }
})