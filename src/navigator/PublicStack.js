import React from 'react';
import { createStackNavigator, createAppContainer} from "react-navigation";

import Home from '../screens/Homex/HomeRender'
import Form from '../screens/Homex/Iklan/Form'
import List from '../screens/Listkota/List'
import Kota from '../screens/Homex/Iklan/Kota'
import KostDetail from '../screens/Homex/Detailkosan/HomeKostdetail'
import Kalender from '../screens/Homex/BookingDetail/BookingCalender'
import Booking from '../screens/Homex/BookingDetail/Booking'
import ListBooking from '../screens/Homex/BookingDetail/listBooking'

//Navigasi
import PublicNav from '../navigator/PublicNav'
import Profil from '../screens/Profil/Profil'
import Register from '../screens/Profil/Daftar'
import Login from '../screens/Profil/Login'



const PublicStack = createStackNavigator(
  { 
    PublicNav:PublicNav,
    Profil:Profil,
    Register:Register,
    Login:Login,
    
    //Navigasi Public Home
    Home: {
      screen: Home,
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
  },
    {
        initialRouteName: "PublicNav",
        headerMode: 'null'
    }
    );

export default PublicStack;