import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import DeckSummary from './DeckSummary';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';
import { getAllDecks, receiveDecks } from '../actions';
import { getDecks } from '../utils/api';
import _ from 'lodash';

class DeckList extends Component {
  state = {
    isReady: false,
  }

  componentDidMount() {
    const { dispatch } = this.props;

    getDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
      .then(() => this.setState(() => ({ isReady: true })));

    //console.log(this.props.decks);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home'
    }
  }
  // Will Map over the decks and create a List of DeckSummary components.
  render() {
    const { decks, navigation } = this.props;
    const { isReady } = this.state;
    console.log(this.props);

    if (!isReady) {
      return <AppLoading />
    }

    return (
      // Need to build a list of the DeckSummary components.

      <View style={styles.deck}>
        <FlatList
          style=''
          data={this.props.decks}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => (
            <DeckSummary deck={item} navigation={navigation} />
          )}
        />
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

function mapStateToProps(decks) {
  const n = _.map(decks, (val, title) => {
    return { ...val, title};
  });

  return {
    // decks: Object.keys(decks).reduce((decks, title) => {
    //   return decks.concat(decks[title]);
    // }, [])
    decks: n  
  }
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch);
  return {
    getDecks: () => dispatch(getAllDecks())
  }
}

export default connect(
  mapStateToProps,
  //mapDispatchToProps
)(DeckList);