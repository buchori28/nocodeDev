import React, { Component } from "react";
import {Container, Content, Header, Title, Text, Button, Right, Left, Body, TabHeading, Card, CardItem, Item, Footer, FooterTab } from "native-base";
import {StyleSheet, View, Image, TouchableOpacity, TouchableWithoutFeedback, FlatList, Alert } from 'react-native';
import { Icon } from 'react-native-elements';

import GridView from 'react-native-super-grid';
import Swiper from 'react-native-swiper';

import styles from './styles';

const slide1 = require("../../assets/images/coffee2.png");
const slide2 = require("../../assets/images/coffee3.png");
const slide3 = require("../../assets/images/coffee4.png");

class HomeScreen extends Component {

 
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
      { id: '1', name: 'Github', color: '#1abc9c', image: require("../../assets/images/motocycle.png"), screen: 'Github' }, 
      { id: '2', name: 'JavaScript', color: '#1abc9c', image: require("../../assets/images/car.png"), screen: 'JavaScript' }, 
      { id: '3', name: 'HTML', color: '#2ecc71', image: require("../../assets/images/big.png"), screen: 'HTML' },
      { id: '4', name: 'Angular', color: '#3498db', image: require("../../assets/images/industrial.png"), screen: 'Angular' }, 
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
              dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
              activeDot={<View style={{backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
              paginationStyle={{
                bottom: 10,
              }} 
              loop 
              autoplay
              autoplayTimeout={4}>
                {/*
                <View>
                  {
                  this.renderBanner()
                  }
                </View>
                */}
                <TouchableWithoutFeedback onPress={() => navigate('BannerDetail', {image: slide1, name: 'Promo Merah'})}>
                <View>
                  <Image source={slide1} />
                </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigate('BannerDetail', {image: slide2, name: 'Promo Biru'})}>
                <View>
                  <Image source={slide2}/>
                </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigate('BannerDetail', {image: slide2, name: 'Promo Biru'})}>
                <View>
                  <Image source={slide3}/>
                </View>
                </TouchableWithoutFeedback>

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