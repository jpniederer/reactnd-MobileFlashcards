import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function GenericButton ({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.reset, style]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    margin: 20,
  }
})