import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

class ChatScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Chat',
  })

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>I'm item from where?</Text>
      </View>
      )
  }
}

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c0392b',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})
