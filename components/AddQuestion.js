import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function AddQuestion ({ deck }) {
  return (
    <View style={styles.deck}>
      <Text>Add Question</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  deck: {
    flexDirection: 'row',
    marginTop: 12
  }
})