// import React from 'react';
// import { View, StatusBar } from 'react-native';
// import {createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation';
// import Icon from 'react-native-vector-icons/FontAwesome';


// // import Homenavigasi from './navigator/Homenavigasi';
// // import Profilnavigasi from './navigator/Profilnavigasi'
// // import Wishlistnavigasi from './navigator/Wishlistnavigasi'
// // import { Header } from 'react-native-elements';

// //  import Publicnavigator from './navigator/Publicnavigator'
// //  import Privatenavigator from './navigator/Privatenavigator'



// // export default createAppContainer(createSwitchNavigator(
// //   {
// //     Privatenavigator : Privatenavigator,
// //     Publicnavigator: Publicnavigator
// //   },
// // ))

// // const guesNavigator = createStackNavigator({

// // })


// //Screen Public
// import HomePublic from './src/screens/Public/HomeRender'
// import ProfilPublic from './src/screens/Public/Profil'

// //Screen private
// import HomePrivate from './src/screens/Private/HomeRender'
// import ProfilPrivate from './src/screens/Private/Profil'
// import WishlistPrivate from './src/screens/Private/wish'

// //Screen 
// import List from './src/screens/Listkota/List'
// import Form from './src/screens/Homex/Iklan/Form'
// // import ListItem from '../screens/Listkota/ListItem'
// import LihatDaftar from '../screens/Listkota/LihatDaftar'
// import Homedetail from './src/screens/Homex/Detailkosan/HomeKostdetail'

// //Screen Auth
// import Login from './src/screens/Profil/Login'
// import Register from './src/screens/Profil/Daftar'



// //Private Navigasi
// const PrivateNavBottom = createBottomTabNavigator({
//     Home : {
//         screen: HomePrivate,
//         navigationOptions: {
//             tabBarLabel: 'Home',
//             tabBarIcon: ({ tintColor }) => (
//                 <Icon name="home" color={tintColor} size={25} />
//             )
//         }
//     },

//     Wishlist: {
//         screen: WishlistPrivate,
//         navigationOptions: {
//             tabBarLabel: 'Wishlist',
//             tabBarIcon: ({ tintColor }) => (
//                 <Icon name="heart" color={tintColor} size={25} />
//             )
//         }
//     },

//     Profil: {
//         screen: ProfilPrivate,
//         navigationOptions: {
//             tabBarLabel: 'Profil',
//             tabBarIcon: ({ tintColor }) => (
//                 <Icon name="user-circle-o" color={tintColor} size={25} />
//             )
//         }
//     },
// })



// //Public Nav
// const PublicNavBottom = createBottomTabNavigator({
//     Home: {
//         screen: HomePublic,
//         navigationOptions: {
//             tabBarLabel: 'Home',
//             tabBarIcon: ({ tintColor }) => (
//                 <Icon name="home" color={tintColor} size={25} />
//             )
//         }
//     },

//     Profil: {
//         screen: ProfilPublic,
//         navigationOptions: {
//             tabBarLabel: 'Profil',
//             tabBarIcon: ({ tintColor }) => (
//                 <Icon name="user-circle-o" color={tintColor} size={25} />
//             )
//         }
//     },
// })


// const PublicNav = createStackNavigator(
//     {
//         Main: {
//             screen: PublicNavBottom,
//         },
//         Login: {
//             screen: Login,
//         },
//         Register: {
//             screen: Register,
//         },
//         List: {
//             screen: List,
//         },
//         // ListItem: {
//         //     screen: ListItem,
//         // },
//         LihatDaftar: {
//             screen: LihatDaftar,
//         },
//         Homedetail: {
//             screen: Homedetail,
//         }

//     }
// );


// const PrivateNav = createStackNavigator(
//     {
//         Main: {
//             screen: PrivateNavBottom,
//         },
//         Login: {
//             screen: Login,
//         },
//         Register: {
//             screen: Register,
//         },
//         List: {
//             screen: List,
//         },
//         // ListItem: {
//         //     screen: ListItem,
//         // },
//         LihatDaftar: {
//             screen: LihatDaftar,
//         },
//         Homedetail: {
//             screen: Homedetail,
//         },
//         Form: {
//             screen: Form,
//         },
//     }  
// )


// const mainNav = createSwitchNavigator({
//     //Navigasi Public
//     Public: {
//         screen: PublicNav
//     },

//     //Navigasi Private
//     Private: {
//         screen: PrivateNav
//     }
// })

// export default createAppContainer(mainNav)

// // const tabNavigator = createBottomTabNavigator({
// //   // navigasi home
// //   Home: {
// //     screen: Homenavigasi,
// //     navigationOptions:  {
// //       tabBarIcon: ({
// //         tintColor
// //       }) => ( <Icon name = "home"
// //               color = {tintColor}
// //               size = {25} /> )
// //     }
// //   },

// //   // navigasi wishislist
// //     Wishlist: {
// //       screen: Wishlistnavigasi,
// //       navigationOptions:  {
// //         tabBarIcon: ({
// //           tintColor
// //         }) => ( <Icon name = "heart"
// //                 color = {tintColor}
// //                 size = {25} /> )
// //       }
// //     },

// //   // navigasi Profil
// //   Profil: {
// //     screen: Profilnavigasi,
// //     navigationOptions:  {
// //       tabBarIcon: ({
// //         tintColor
// //       }) => ( <Icon name = "user-circle-o"
// //               color = {tintColor}
// //               size = {25} /> )
// //     }
// //   },
// //  }, 

// // {

// //  initialRouteName : "Home",
// //  defaultNavigationOptions: {
// //    headerStyle: {
// //      backgroundColor : '#2980b9'
// //    },
// //    headerTintColor: '#FFF'
// //  },
// //  tabBarOptions: {
// //    activeTintColor: '#e67e22',
// //    inactiveTintColor: 'grey'
// //  }
// // });

// // // const mainNavigator = createSwitchNavigator({})

// // //  Guest:{
// // // //   screen:
// // // // }
  

// // //  });

// // export default createAppContainer(tabNavigator);

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import PrivateNav from './src/navigator/PrivateNav';
import PrivateStack from './src/navigator/PrivateStack';
import PublicNav from './src/navigator/PublicNav';
import PublicStack from './src/navigator/PublicStack';
import RouteSwitch from './src/navigator/RouteSwitch'


const TabNavigator = createSwitchNavigator(
  {
    PublicStack: PublicStack,
    PrivateStack: PrivateStack,
    RouteSwitch: RouteSwitch
  },
  {headerMode:'none',
  initialRouteName: 'RouteSwitch'}
);
export default createAppContainer(TabNavigator)
