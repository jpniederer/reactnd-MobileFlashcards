import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function NewDeck () {
  return (
    <View style={styles.deck}>
      <Text>New Deck</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  deck: {
    flexDirection: 'row',
    marginTop: 12
  }
})