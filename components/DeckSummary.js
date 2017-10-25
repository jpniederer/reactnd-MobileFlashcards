import React from 'react';
import { View,
  Platform,
  StyleSheet, 
  Text, 
  TouchableOpacity } from 'react-native';
import { white } from '../utils/colors';

export default function DeckSummary ({ deck, navigation }) {
  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => navigation.navigate(
          'Deck',
          { title: deck.title }
        )}
        >
          <Text>{deck.title}</Text>
          <Text>{deck.questions.length} Cards in Deck</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
  deck: {
    flexDirection: 'row',
    marginTop: 12
  }
})