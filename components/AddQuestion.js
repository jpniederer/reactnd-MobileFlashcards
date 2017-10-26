import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import GenericButton from './GenericButton';
import { connect } from 'react-redux';

class AddQuestion extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params;

    return {
      title
    }
  }

  render() {
    return (
      <View style={styles.deck}>
        <Text>Add Question</Text>
        <GenericButton onPress={() => {}}>
          Add Deck
        </GenericButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deck: {
    flexDirection: 'row',
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
)(AddQuestion);