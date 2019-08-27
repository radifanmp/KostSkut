import React, { Component } from 'react';
import { createStackNavigator, NavigationEvents, createAppContainer } from "react-navigation";

import Profil from '../screens/Profil/Profil'
import Daftar from '../screens/Profil/Daftar'
import Login from '../screens/Profil/Login'
import detailProfil from '../screens/Profil/detailProfil'
import Home from '../screens/Homex/HomeRender'


const ProfilNav = createStackNavigator(
    {
        Profil: {
            screen: Profil,
            navigationOptions: {
                header: null
            }
        },
        Login: {
            screen: Login,
            navigationOptions: {
                header: null
            }
        },
        Daftar: {
            screen: Daftar,
            navigationOptions: {
                header: null
            }
        },
        detailProfil: {
            screen: detailProfil,
            navigationOptions: {
                header: null
            }
        },
        Home: {
            screen: Home,
            navigationOptions: {
              header: null
            }
          },
    });

const ProfilContainer = createAppContainer(ProfilNav)


class Navigasi extends Component {
    render() {
        return (
            <ProfilContainer />
        )
    }
}

ProfilContainer.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible
    };
};

export default Navigasi;

