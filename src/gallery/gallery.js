import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scrollview';
export const SCREEN_HEIGHT = Dimensions.get('window').height;

const image = require("../../assets/images/coffee1.png");

class GalleryScreen extends Component {
  constructor() {
    super();

    this.state = {
      index: 0
    };
  }


  profileView() {
    return (
      <ParallaxScrollView
        windowHeight={SCREEN_HEIGHT * 0.4}
        backgroundSource={image}
        navBarTitle='Gallery'
        userName='Muchamad Buchori'
        userTitle='Mobile Apps Developer'
        userImage='https://buchori.000webhostapp.com/images/buchori.png'
        leftIcon={{name: 'md-arrow-back', color: '#FFF', size: 30, type: 'ionicon'}}
        leftIconOnPress={() => this.props.navigation.goBack()}
        rightIcon={{name: 'md-more', color: '#FFF', size: 30, type: 'ionicon'}}
        rightIconOnPress={() => this.setState({index: (this.state.index + 1 ) % 3})}
      />
    );
  }

  render() {
    const { index } = this.state;

    switch(index) {
      case 0:
      return this.profileView();
    }
  }
}

export default GalleryScreen;

const styles = StyleSheet.create ({
  headerTextView: {
    backgroundColor: 'transparent',
  },
  headerTextViewTitle: {
    fontSize: 25,
    color: 'white',
    fontWeight: '300',
    paddingBottom: 10,
    textAlign: 'center'
  },
  headerTextViewSubtitle: {
    fontSize: 15,
    color: 'white',
    fontWeight: '300'
  },
});
