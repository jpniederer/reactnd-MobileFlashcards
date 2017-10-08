import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Deck ({ deck }) {
  return (
    <View style={styles.deck}>
      <Text>Deck</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  deck: {
    flexDirection: 'row',
    marginTop: 12
  }
})