import React from 'react';
import { createStackNavigator} from "react-navigation";

import Home from '../screens/Homex/HomeRender'
import Form from '../screens/Homex/Iklan/Form'
import List from '../screens/Listkota/List'
import Kota from '../screens/Homex/Iklan/Kota'
import KostDetail from '../screens/Homex/Detailkosan/HomeKostdetail'
import Kalender from '../screens/Homex/BookingDetail/BookingCalender'
import Booking from '../screens/Homex/BookingDetail/Booking'
import ListBooking from '../screens/Homex/BookingDetail/listBooking'

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    Form : {
      screen: Form,
      navigationOptions: {
        header: null
      }
    },
    List: {
      screen: List,
      navigationOptions: {
        header: null
      }
    },
    Kota: {
      screen: Kota,
      navigationOptions: {
        header: null
      }
    },
    KostDetail: {
      screen: KostDetail,
      navigationOptions: {
        header: null
      }
    },
    Booking:{
      screen: Booking,
      navigationOptions:{
        header: null
      }
    },
    Kalender:{
      screen: Kalender,
      navigationOptions:{
        header: null
      }
    },
    ListBooking:{
      screen: ListBooking,
      navigationOptions:{
        header: null
      }
    },
  //   Iklan: {
  //     screen: Iklan
  //   },
  //   BookingList: {
  //     screen: BookingList
  //   }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0
      },
      headerTintColor: "#2980b9"
    }
  }
);

HomeNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

export default HomeNavigator;