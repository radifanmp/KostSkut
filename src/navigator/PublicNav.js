import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Icon from "react-native-vector-icons/MaterialCommunityIcons";


import HomeScreen from '../screens/Homex/HomeRender'
import ProfilScreen from '../screens/Profil/Profil'

const PublicNav = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home-outline" color={tintColor} size={25} />
        )
      }
    },
    Profile: {
      screen: ProfilScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="account-circle-outline" color={tintColor} size={25} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor:  "#e67e22",
      inactiveTintColor: "grey"
    }
  }
);
export default createAppContainer(PublicNav)
