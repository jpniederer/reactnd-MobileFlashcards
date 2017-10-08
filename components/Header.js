import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { red } from '../utils/colors';

export default function Header ({children}) {
  return (
    <View style={styles.container}>
      <Text style='fontSize=20'>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    elevation: 2,
    position: 'relative'
  }
})