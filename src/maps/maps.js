import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import {
  Container,
  Content,
  Header,
  Title,
  Text,
  Button,
  Right,
  Left,
  Body,
  Icon
} from "native-base";

import MapView, { Marker, ProviderPropType } from 'react-native-maps';
import PriceMarker from './price-marker';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

function log(eventName, e) {
  console.log(eventName, e.nativeEvent);
}

class MapsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      a: {
        latitude: LATITUDE + SPACE,
        longitude: LONGITUDE + SPACE,
      },
      b: {
        latitude: LATITUDE - SPACE,
        longitude: LONGITUDE - SPACE,
      },
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header >
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="md-arrow-back" /> 
            </Button>
          </Left>
          <Body style={{flex: 3}}>
            <Title style={styles.header_title}>Products</Title>
          </Body>
          <Right />
          <Button transparent onPress={() => this.props.navigation.navigate("EventAdd")}>
              <Icon name="md-more"/>
            </Button>
        </Header>
        <View style={styles.container}>
          <MapView
            provider={this.props.provider}
            style={styles.map}
            initialRegion={{
              latitude: LATITUDE,
              longitude: LONGITUDE,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
          >
            <Marker
              coordinate={this.state.a}
              onSelect={(e) => log('onSelect', e)}
              onDrag={(e) => log('onDrag', e)}
              onDragStart={(e) => log('onDragStart', e)}
              onDragEnd={(e) => log('onDragEnd', e)}
              onPress={(e) => log('onPress', e)}
              draggable
            >
            <PriceMarker amount={99} />
            </Marker>
            <Marker
              coordinate={this.state.b}
              onSelect={(e) => log('onSelect', e)}
              onDrag={(e) => log('onDrag', e)}
              onDragStart={(e) => log('onDragStart', e)}
              onDragEnd={(e) => log('onDragEnd', e)}
              onPress={(e) => log('onPress', e)}
              draggable
            />
          </MapView>
        </View>
      </Container>
    );
  }
}

MapsScreen.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapsScreen;