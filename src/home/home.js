import React, { Component } from "react";
import {Container, Content, Header, Title, Text, Button, Right, Left, Body, TabHeading, Card, CardItem, Item, Footer, FooterTab } from "native-base";
import {StyleSheet, View, Image, TouchableOpacity, TouchableWithoutFeedback, FlatList, Alert } from 'react-native';
import { Icon } from 'react-native-elements';

import GridView from 'react-native-super-grid';
import Swiper from 'react-native-swiper';

import styles from './styles';
import { SERVER_KEY, CLIENT_KEY, URL_T_BANNER } from "../url/url";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state =
    { 
      dataBanner: [],
    }
  }


  componentDidMount() {
    this.getBanner();
  }


  //Function to get all banner from API
  getBanner = () => {
    var sendData = {
      server_key : SERVER_KEY,
      client_key : CLIENT_KEY,
    };
    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
    fetch(URL_T_BANNER, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(sendData)
    }).then(res => res.json()).then(res => {
      resBanner= res['data'];
      this.setState({
        dataBanner: [...this.state.dataBanner, ...res.data],
        error: res.error || null,
      });
    })
    .catch(error => { 
      //console.warn("error:"+error);
    });
  };


  //Function to render data of banner from json into component
  renderBanner = () => {
    // Navigator
    const { navigate } = this.props.navigation;
    return this.state.dataBanner.map((item) => {
      return (        
        <TouchableWithoutFeedback onPress={() => navigate('BannerDetail', {id: item.banner_id, name : item.title})} key={item.banner_id} >
          <View>
            <Image style={styles.banner} source={{ uri: item.image }} />
          </View>
        </TouchableWithoutFeedback>
      )
    });
  };
 
  render() {
    const { navigate } = this.props.navigation;
    const items = [
      { name: 'Chat', color: '#2A84B2', icon:'ios-chatboxes', screen: 'Chat' }, 
      { name: 'Friends', color: '#FF6F7C', icon:'ios-person', screen: 'Friends' }, 
      { name: 'Gallery', color: '#55C6FF', icon:'ios-images', screen: 'Gallery' },
      { name: 'News', color: '#FFE16C', icon:'ios-paper', screen: 'News' }, 
      { name: 'Events', color: '#FF8E32', icon:'ios-bookmarks', screen: 'Events' }, 
      { name: 'Maps', color: '#4DB235', icon:'ios-map', screen: 'Maps' }, 
    ];

    const itemshm = [
      { id: '1', name: 'Temp One', image: require("../../assets/temp/temp1.png"), screen: 'Featured' }, 
      { id: '2', name: 'Temp Two', image: require("../../assets/temp/temp2.png"), screen: 'Featured' }, 
      { id: '3', name: 'Temp Three', image: require("../../assets/temp/temp3.png"), screen: 'Featured' },
      { id: '4', name: 'Temp Four', image: require("../../assets/temp/temp4.png"), screen: 'Featured' }, 
      { id: '2', name: 'Temp Five', image: require("../../assets/temp/temp5.png"), screen: 'Featured' }, 
      { id: '3', name: 'Temp Six', image: require("../../assets/temp/temp6.png"), screen: 'Featured' },
      { id: '4', name: 'Temp Seven', image: require("../../assets/temp/temp7.png"), screen: 'Featured' }, 
      ];

    return (
    <Container style={styles.container}>
      <Header>
        <Body style={{flex: 3}}>
            <Title style={{ alignSelf: "center" }}>
            <Text style={styles.title}>
              NOCODE DEV
            </Text>
            </Title>
          </Body>
        </Header>
        <Content>     
          <View>
            <Swiper height={160}
              style={{backgroundColor : "#FFF"}}
              dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
              activeDot={<View style={{backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
              paginationStyle={{
                bottom: 10,
              }} 
              loop 
              autoplay>
              {this.renderBanner()}
          </Swiper>
        </View>
          <GridView
              itemDimension={105}
              items={items}
              style={styles.gridView}
              renderItem={gridItem => (
                <TouchableOpacity style={styles.itemContainer}
                  onPress={() => navigate(gridItem.screen, {name : gridItem.name})} >
                  <Icon reverse type='ionicon' style={styles.itemIcon} color={gridItem.color} name={gridItem.icon} />
                  <Text style={styles.itemName}>{gridItem.name}</Text>
                </TouchableOpacity>
              )}
          />
          <Content>
            <Text style={{alignSelf: 'center', fontSize: 18}}>Featured</Text>
          </Content>
          
          <FlatList
            horizontal
            data={itemshm}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item: itemshm }) => {
              return (              
              <Card>
                <TouchableOpacity style={styles.itemContainerhm}
                  onPress={() => navigate(itemshm.screen, '${itemshm.name}')} >  
                  <Image style={styles.itemImagehm} source={itemshm.image} />
                  <Text style={styles.itemNamehm}>{itemshm.name}</Text>
                </TouchableOpacity>
              </Card>
              );
            }}
            keyExtractor={itemshm => itemshm.id}
          />
        
        </Content>  
      </Container>
    );
  }
}

export default HomeScreen;