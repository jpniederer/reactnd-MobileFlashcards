import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Quiz ({ deck }) {
  return (
    <View style={styles.deck}>
      <Text>Quiz</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  deck: {
    flexDirection: 'row',
    marginTop: 12
  }
})