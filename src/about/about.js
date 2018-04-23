import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

class AboutScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'About',
  })

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>I'm About Page</Text>
      </View>
      )
  }
}

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2c3e50',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})
