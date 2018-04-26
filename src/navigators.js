
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';

// Navigators
import { DrawerNavigator, StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from 'react-native-elements';


// TabNavigator screens
import HomeScreen from './home/home';
import ProfileScreen from './profile/profile';
import AboutScreen from './about/about';

// StackNavigator screens
import ChatScreen from './chat/chat';
import FriendsScreen from './friends/friends';
import GalleryScreen from './gallery/gallery';
import MapsScreen from './maps/maps';

// Tabs Navigation
export const TabsNavigation = TabNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  About: { screen: AboutScreen },
},{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName=focused ? 'ios-home' : 'ios-home-outline'
      } else if (routeName === 'Profile') {
        iconName=focused ? 'ios-person' : 'ios-person-outline'
      } else if (routeName === 'About') {
        iconName=focused ? 'ios-school' : 'ios-school-outline'
      }
      return <Icon
        name={iconName}
        type='ionicon'
        color={tintColor}
      />;
    },
  }),
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#8ED0FF' : '#419EDF',
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: true,
  borderTop: 5,
}
)

export const Stack = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  Friends: { screen: FriendsScreen },
  Gallery: { screen: GalleryScreen },
  Maps: { screen: MapsScreen },
  }, {
  initialRouteName: 'Home',
})

export const Drawer = DrawerNavigator({
  Tabs: { screen: TabsNavigation },
  Chat: { screen: ChatScreen },
  Friends: { screen: FriendsScreen },
  Gallery: { screen: GalleryScreen },
  Maps: { screen: MapsScreen },
})
