import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import LottieView from 'lottie-react-native';

class AboutScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'About',
  })

  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    this.animation.play(1, 60);
  }

  render () {
    return (
      <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        source={require('../../assets/animation/checked.json')}
      />
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
