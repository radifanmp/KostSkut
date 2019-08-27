import * as React from 'react';
import { View, StyleSheet, ScrollView, TextInput, Image} from 'react-native';
import { Text,  Button, } from 'react-native-paper';

import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import VarGlobal from '../../enviroment/VarGlobal'
import Profile from './Profil'

class Login extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      textUsername: '',
      textPass: '',
    }
  }
  seleksiLogin = async () => {
    try {
      //Fetch Data USERNAME dan PASSWORD API , LALU PENGECEKAN , JIKA MATCH BERI TOKEN
      let tempUser = {
        username: this.state.textUsername,
        password: this.state.textPass
      }
      await axios.post("http://skut-kost-api.herokuapp.com/api/v1/login",tempUser)
        .then((response) => {
          console.log(response)
          if (typeof response.data.token !== 'undefined') {
            AsyncStorage.setItem('userToken', response.data.token);
            this.props.navigation.navigate('PrivateStack')
          } else {
            alert('Gagal Login')
          }
        })
        .catch((error) => {
          alert(error)
        });
    }
    catch (e) {
      console.log(e)
     }
  }


    render() {
  
        return (
            
            <ScrollView style={{backgroundColor: '#e67e22'}}>

            <View style={styles.container}>

            <View style={styles.logoContainer}><Image style={styles.logo}
            source={require('./icon.png')}/>

                <View style={styles.loginitem}>
                    <Text style={styles.title}>Login</Text>

                    <Text style={{fontSize:15, textAlign: 'center', marginBottom: 20, color: '#FFF'}}>SkutKost Mudah Cepat Dan Tepat dimanapun kostnya carinya pasti di SkuKost</Text>

                    <TextInput placeholder="Username" placeholderTextColor="rgba(255,255,255,0.9)" 
                    style={styles.input} 
                    onChangeText={(textUsername)=> this.setState({textUsername})}/>

                    <TextInput placeholder="Password" placeholderTextColor="rgba(255,255,255,0.9)"
                    secureTextEntry
                    style={styles.input}
                    onChangeText={(textPass)=> this.setState({textPass})} />

                    <Button style={styles.button} mode="contained" 
                              onPress= {this.seleksiLogin}>
                        <Text style={styles.title2}>Login</Text>
                    </Button>

                    </View>
                </View>

            </View>

            </ScrollView>
        )

}

}

const styles = StyleSheet.create({
    container: {
      padding: 15,
      flex: 1,
    },

    logoContainer: {
      alignItems: 'center',
      flexGrow: 1,
    },

    title: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#FFF',
      textAlign: 'center',
      marginBottom: 40,
    },

    input: {
        height: 40,
        backgroundColor: 'rgba(0,0,0,0.4)',
        marginBottom: 15,
        color: '#FFFFFF',
        borderRadius: 20,
        textAlign: 'center',
    },

    logo: {
      justifyContent: 'center',
    },

    button: {
        borderRadius: 20,
        backgroundColor: '#16a085',
    },

    title2: {
      fontWeight: 'bold',
      color: '#FFF',
    }
})

export default Login