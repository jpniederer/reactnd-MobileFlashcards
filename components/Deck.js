import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import GenericButton from './GenericButton';
import { connect } from 'react-redux';
import { green, red, white } from '../utils/colors';
import { getDeck } from '../utils/api';

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params;

    return {
      title
    }
  }

  render() {
    const { title } = this.props;
    const { questions } = this.props.decks[title];
    const { navigation } = this.props;

    return (
      <View style={styles.deck}>
        <Text>{title}</Text>
        <Text>{questions.length}</Text>
        <GenericButton onPress={() => navigation.navigate(
          'AddCard',
          { title: 'Add a card to ' + title, deckTitle: title }
        )}>
          Add a Card
        </GenericButton>
        <GenericButton onPress={() => navigation.navigate(
          'Quiz',
          { title: 'Quiz on ' + title, deckTitle: title }
        )}>
          Start Quiz
        </GenericButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    backgroundColor: white,
    padding: 12
  }
})

function mapStateToProps(state, { navigation }) {
  const { title } = navigation.state.params;
  console.log(state);

  return {
    title,
    decks: state,
    deck: state[title],
  }
}

function mapDispatchToProps(dispatch, { navigation }) {
  const { title } = navigation.state.params;

  return {
    goBack: () => navigation.goBack(),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deck);