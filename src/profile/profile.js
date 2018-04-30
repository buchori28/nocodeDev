
import React, { Component } from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from 'react-native';
import { BG_MUSIC } from '../url/img_path';

const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(
        // iOS has negative initial scroll value because content inset...
        Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
      ),
      refreshing: false,
    };
  }

  _renderScrollViewContent() {
    const data = Array.from({ length: 30 });
    return (
      
    <View>
        <Text style={styles.about_layout_p} note>Tentang</Text>
        <Text numberOfLines={1} style={{color: '#eb2024', fontSize: 20, paddingBottom: 25,}}>Lorem Ipsum Inc</Text>
        <Text style={styles.about_layout_p} numberOfLines={50} note>
            Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. </Text>
            <Text style={styles.about_layout_p} numberOfLines={50} note>
            Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. </Text>
            <Text style={styles.about_layout_p} numberOfLines={50} note>
            Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. </Text>
            <Text style={styles.about_layout_p} numberOfLines={50} note>
            Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. </Text>
            <Text style={styles.about_layout_p} numberOfLines={50} note>
            Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. </Text>
            <Text style={styles.about_layout_p} numberOfLines={50} note>
            Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. </Text>
            <Text style={styles.about_layout_p} numberOfLines={50} note>
            Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. Lorem ipsum dolor sir amet. </Text>
          
    </View>
    );
  }

  render() {
    // Because of content inset the scroll value will be negative on iOS so bring
    // it back to 0.
    const scrollY = Animated.add(
      this.state.scrollY,
      Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
    );
    const headerTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    });

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });

    const titleScale = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.8],
      extrapolate: 'clamp',
    });
    const titleTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, -8],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.fill}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="rgba(0, 0, 0, 0.251)"
        />
        <Animated.ScrollView
          style={styles.fill}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true },
          )}
          contentInset={{
            top: HEADER_MAX_HEIGHT,
          }}
          contentOffset={{
            y: -HEADER_MAX_HEIGHT,
          }}
        >
          {this._renderScrollViewContent()}
        </Animated.ScrollView>
        <Animated.View
          pointerEvents="none"
          style={[
            styles.header,
            { transform: [{ translateY: headerTranslate }] },
          ]}
        >
          <Animated.Image
            style={[
              styles.backgroundImage,
              {
                opacity: imageOpacity,
                transform: [{ translateY: imageTranslate }],
              },
            ]}
            source={BG_MUSIC}
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.bar,
            {
              transform: [
                { scale: titleScale },
                { translateY: titleTranslate },
              ],
            },
          ]}
        >
          <Text style={styles.title}>Title</Text>
        </Animated.View>
      </View>
    );
  }
}


export default ProfileScreen;

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: Platform.OS === 'ios' ? '#F8F8F8' : '#3F51B5',
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  bar: {
    backgroundColor: 'transparent',
    marginTop: Platform.OS === 'ios' ? 28 : 38,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: Platform.OS === 'ios' ? '#000' : '#FFF',
    fontSize: 18,
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});