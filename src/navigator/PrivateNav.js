import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Home from '../screens/Homex/HomeRender'
import detailProfil from '../screens/Profil/detailProfil'
import Wishlist from '../screens/Wishlist/wish'
import Chat from '../screens/Wishlist/wish'


const PrivateNav = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home-outline" color={tintColor} size={25} />
        )
      }
    },
    Wishlist: {
      screen: Wishlist,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="heart-outline" color={tintColor} size={25} />
        ),
        title: "Wishlist"
      }
    },
    // Chat: {
    //   screen: Chat,
    //   navigationOptions: {
    //     tabBarIcon: ({ tintColor }) => (
    //       <Icon name="message-outline" color={tintColor} size={25} />
    //     )
    //   }
    // },
    Profile: {
      screen: detailProfil,
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
export default createAppContainer(PrivateNav)
