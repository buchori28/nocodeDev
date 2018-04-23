import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'


const items = [
  { name: 'I'},
  { name: 'AM'},
  { name: 'FRIENDS'},
  { name: 'SCREEN'},
]

class FriendsScreen extends Component {

  static navigationOptions = {
    title: 'Friends'
  }

  renderItem = (item, i) => {
    return (
      <TouchableOpacity
        key={i}
        style={styles.item}
        onPress={() => this.props.navigation.navigate('Chat', { title: item.name })}
      >
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>)
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>I'm a StackNavigator!</Text>
        {items.map(this.renderItem)}
      </View>
      )
  }
}

export default FriendsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2980b9',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
  },
  itemText: {
    color: 'white',
    fontSize: 20,
  }
})
