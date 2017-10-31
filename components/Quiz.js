import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { green, red, white } from '../utils/colors';
import GenericButton from './GenericButton';
import { connect } from 'react-redux';

class Quiz extends Component {
  state = {
    currentIndex: 0,
    correctCount: 0,
    showAnswer: false
  }
  
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params;

    return {
      title
    }
  }

  answerCorrectly() {
    let { currentIndex, correctCount } = this.state;
    currentIndex++;
    correctCount++;

    this.setState({
      currentIndex,
      correctCount,
      showAnswer: false
    });
  }

  answerIncorrectly() {
    let { currentIndex, correctCount } = this.state;
    currentIndex++;

    this.setState({
      currentIndex,
      correctCount,
      showAnswer: false
    });
  }

  flipCard() {
    let { currentIndex, correctCount, showAnswer } = this.state;
    showAnswer = !showAnswer;

    this.setState({
      currentIndex,
      correctCount,
      showAnswer 
    });
  }

  render() {
    const questions = this.props.deck.questions;
    const { currentIndex, correctCount, showAnswer } = this.state;
    const questionsRemaining = questions.length - currentIndex - 1;
    const isDone = questionsRemaining === 0;

    return (
      <View style={styles.container}>
        <Text>{questionsRemaining} questions remaining</Text>
        <Text>
          {
            showAnswer ? 
              questions[currentIndex].answer : 
              questions[currentIndex].question
          }
        </Text>
        <Button 
          title='Flip Card'
          onPress={this.flipCard.bind(this)} 
        />
        <Button 
          title='Correct'
          onPress={this.answerCorrectly.bind(this)} 
        />
        <Button 
          title='Incorrect'
          onPress={this.answerIncorrectly.bind(this)} 
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15,
    alignItems: 'center'
  },
  deck: {
    flexDirection: 'row',
    marginTop: 12
  }
})

function mapStateToProps(state, { navigation }) {
  const { deckTitle } = navigation.state.params;

  return {
    title: deckTitle,
    deck: state[deckTitle],
  }
}

function mapDispatchToProps(dispatch, { navigation }) {
  const { deckTitle } = navigation.state.params;

  return {
    goBack: () => navigation.goBack(),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);