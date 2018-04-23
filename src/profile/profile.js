
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
        <Text numberOfLines={1} style={{color: '#eb2024', fontSize: 20, paddingBottom: 25,}}>PT Yuasa Battery Indonesia</Text>
        <Text style={styles.about_layout_p} numberOfLines={50} note>
            PT. Yuasa Battery Indonesia didirikan di Tangerang pada tanggal 14 Mei 1975. Pada masa awal pendirian, produksinya dimulai dari pembuatan aki mobil dengan target pasar domestik. </Text>
          <Text style={styles.about_layout_p} numberOfLines={50} note>
            Seiring dengan perkembangannya yang pesat dan produknya yang semakin mendapat kepercayaan dari pelanggan. PT. Yuasa Battery Indonesia mulai mengembangkan proses produksinya ke berbagai produk aki mobil dan motor. Saat ini PT. Yuasa Battery Indonesia memproduksi aki untuk kebutuhan pasar domestik, Original Equipment Manufacturer (OEM), Industrial dan pasar luar negeri (ekspor). </Text>
          <Text style={styles.about_layout_p} numberOfLines={50} note>
            Hal ini semakin mengukuhkan citra YUASA sebagai brand aki dengan kualitas tinggi dan dapat diandalkan. Hal ini tentu saja tidak lepas dari kinerja tim manajemen yang profesional dalam menghadapi segala arus perubahan dan tantangan pasar global. PT. Yuasa Battery Indonesia telah memperoleh sertrfikasi ISO 9001:2008  dan  ISO 14001: 2004 yang  menunjukkan  kualitas  dan  konsistensi  tim  manajemen YUASA dalam  melayani pelanggan.</Text>
          <Text style={styles.about_layout_p} numberOfLines={50} note>
            Dalam 40 tahun berdirinya PT. Yuasa Battery Indonesia, saat ini PT. Yuasa Battery Indonesia telah berhasil mengekspansi pasarnya hingga ke luar negeri dan telah menyebar ke 5 benua.</Text>
          <Text style={styles.about_layout_p} numberOfLines={50} note>
            Kualitas produk yang baik, pelayanan yang memuaskan, dan pengiriman yang tepat waktu adalah filosofi kerja yang selalu dipegang teguh oleh seluruh elemen tim PT. Yuasa Battery Indonesia.</Text>
          <Text style={styles.about_layout_p} numberOfLines={50} note>
            PT. Yuasa Battery Indonesia akan terus meningkatkan kualitas produk dan pelayanan untuk memastikan kepuasan pelanggan terpenuhi.</Text>
    
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
            source={require('../../assets/images/coffee1.png')}
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