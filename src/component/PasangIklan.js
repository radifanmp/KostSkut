import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, StatusBar} from "react-native";
import { Content, Icon, Body, Right, View, Badge } from 'native-base';
import { SearchBar } from 'react-native-elements';
import { Text, Appbar,Button  } from 'react-native-paper';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class pasangiklan extends Component {
    render() {
     
      return (

                <Button
                        onPress={this.props.pasang} 
                        style={styles.button} mode="contained" >
                        <Text style={{color: 'white', fontWeight:'bold'}}> Pasang Iklan </Text> 
                </Button>
      )
    }
}

const styles = StyleSheet.create({
    container: {
    padding: 15,
    },
    
    slide: {
        borderRadius: 20
    },
    
    Aheader: {
    backgroundColor: '#16a085',
    fontWeight: 'bold',
    },
    
    title : {
    alignItems: 'center',
    },
    
    tag : {
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 'bold',
    paddingVertical: 10,
    color: '#16a085'
    },
    tagx: {
      marginTop: 20,
      fontSize: 15,
      marginLeft: 15,
  
      fontWeight: 'bold',
      color: '#16a085'
    },
    
    Searchbar: {
    borderRadius: 20,
    width: null,
    marginLeft: 10,
    marginRight:10,
    height: 40,
    marginTop: 5,
    backgroundColor: '#95a5a6',
    opacity: 0.3,
    },
    
    line: {
      backgroundColor: 'silver',
      height: 10,
      padding: 0,
      marginTop: 20
    },
    
    button: {
      borderRadius: 50,
      width: null,
      marginTop: 10,
      backgroundColor: '#e67e22',
      marginHorizontal: 20,
      },
    buttonx: {
        borderRadius: 20,
        width: 130,
        marginTop: 10,
        marginBottom:5,
        marginRight:200,
        marginLeft: 10,
        backgroundColor: '#e67e22',
        },
    });