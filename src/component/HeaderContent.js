import React, { Component } from 'react';
import {View,StyleSheet, StatusBar} from 'react-native';
import {Header,Left,Text, Icon,Body,Right,  Button, Content, Container} from 'native-base';
import IonIcon from 'react-native-vector-icons/Ionicons';


class HeaderContent extends Component{
    
render(){
    return(
        
        <View>
            <Header style={{backgroundColor:"#e67e22"}}>
          <StatusBar backgroundColor="#f0932b" barStyle="light-content"/>
                <View style={{flex:1,}}>
                <Icon
                    style={styles.pemilikIcon}
                    name="menu"
                    size={40}
                    />
                    <Text style={{flex:1, color:"white", textAlign: 'center', fontWeight: 'bold', alignContent:'space-between', textAlignVertical: 'center'}}>
                       SKUT KOST
                    </Text>
                </View>
            </Header>
         </View>
     );
   }
}

const styles = StyleSheet.create({
    container: {},
    luasTitle: {},
    luasContainer: {
      padding: 20,
      paddingBottom: 0
    },
    luasKamarContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 10
    },
    luasKamar: {
      marginLeft: 10,
      fontSize: 15,
      color: "#2c3e50"
    },
    title: {
      color: "#2c3e50",
      fontSize: 15,
      fontWeight: "500"
    },
  
    fasilitasKos: {
      paddingTop: 20,
      marginLeft: -20,
      justifyContent: "center"
    },
    fasilitasContainer: {
      width: 90,
      justifyContent: "center"
    },
    fasilitasText: {
      textAlign: "center",
      color: "#2c3e50"
    },
    icon: {
      textAlign: "center",
      color: "#e67e22"
    },
    text: {
      color: "#2c3e50",
      marginTop: 10,
      marginBottom: 20
    },
    pemilikContainer: {
      backgroundColor: "#ecf0f1",
      padding: 20
    },
    infoText: {
      color: "#2c3e50",
      fontSize: 15
    },
    pemilikIcon: {
      position: 'absolute', 
      top: 12, 
      bottom: 12, 
      color: 'white'
    },
    pemilik: {
      marginTop: 20,
      flexDirection: "row",
      alignItems: "center"
    },
    pemilikText: {
      color: "#2c3e50",
      fontSize: 16,
      fontWeight: "500"
    },
    pemilikDetail: {
      marginLeft: 20
    },
    pemilikHp: {
      color: "#2c3e50",
      fontSize: 16,
      fontWeight: "400"
    },
    pemilikDetail: {
      flex: 1
    },
    nomorPemilik: {
      alignItems: "flex-end"
    },
    nomorHp: {
      color: "#e67e22"
    }
  });
  
  export default HeaderContent;