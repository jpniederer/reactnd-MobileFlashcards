import React, { Component } from 'react';
import { View, StyleSheet, Text, Keyboard, KeyboardAvoidingView } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { connect } from 'react-redux';

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
    isCardValid: false
  }

  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params;

    return {
      title
    }
  }

  onQuestionChange(question) {
    const isQuestionEmpty = !question;
    const isAnswerNotValid = !this.state.answer;

    this.setState({
      question,
      isCardValid: !isAnswerNotValid && !isQuestionEmpty
    })
  }

  onAnswerChange(answer) {
    const isAnswerEmpty = !answer;
    const isQuestionNotValid = !this.state.question;

    this.setState({
      answer,
      isCardValid: !isQuestionNotValid && !isAnswerEmpty
    })
  }

  addCard() {
    const { navigation } = this.props;
    Keyboard.dismiss();

    navigation.goBack();
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.deck}>
        <FormLabel>Question for the Flashcard</FormLabel>
        <FormInput
          onChangeText={this.onQuestionChange.bind(this)}
          placeholder='Enter the Question Here'
          value={this.state.question}
        />
        <FormLabel>Answer to the Question</FormLabel>
        <FormInput
          onChangeText={this.onAnswerChange.bind(this)}
          placeholder='Enter the Answer Here'
          value={this.state.answer}
        />
        <Button
          title='Add Card'
          disabled={!this.state.isCardValid}
          onPress={this.addCard.bind(this)}
        />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 12
  }
})

function mapStateToProps(state, { navigation }) {
  const { title } = navigation.state.params;

  return {
    title,
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
)(AddCard);