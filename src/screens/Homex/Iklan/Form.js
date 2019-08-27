import * as React from 'react';
import { View, StyleSheet, ScrollView, TextInput, Image } from 'react-native'
import { Text, Button, Checkbox } from 'react-native-paper'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button'
import IonIcon from 'react-native-vector-icons/Ionicons'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { CheckBox } from 'react-native-elements'

import Searchinput from '../../../component/Searchinput'

import Mapiklan from '../../../component/ComponentForm/Mapiklan'
import { Container, Content, } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Dropdown } from 'react-native-material-dropdown'
import Map from '../../../component/ComponentForm/Mapiklan'
import Facilities from '../../../component/ComponentForm/Facilities'



class IklanForm extends React.Component {

    handleGoBack = () => {
        this.props.navigation.navigate("Home");
    };

    render() {

        const autoFocus = this.props.navigation.getParam("autoFocus", false);

        var jenis_kost = [
            { label: 'Campur', value: 0 },
            { label: 'Pria', value: 1 },
            { label: 'Putri', value: 2 },
        ];
        var kategori_kost = [
            { label: 'Hotel', value: 0 },
            { label: 'Apartemen', value: 1 },
            { label: 'Losmen', value: 2 },
        ];

        return (

            <Container>
                <Content>
                    <Searchinput
                        handleGoBack={this.handleGoBack}
                        icon="ios-arrow-round-back"
                        size={35}
                        style={styles.Searchbar}
                    />

                    <View>

                        <View>

                            <Dropdown
                                label='Jenis Kost'
                                data={jenis_kost}
                            />

                            <TextInput placeholder="Nama Kost" placeholderTextColor="black"
                                style={styles.input} />

                            <TextInput placeholder="Alamat Kost" placeholderTextColor="black"
                                style={styles.input} />

                            <Dropdown
                                label='Kategori Kost'
                                data={kategori_kost}
                            />
                            <Text>Fasilitas Kost :</Text>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginBottom: 5
                                }}>
                           
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginBottom: 5
                                }}>
                                </View>

                                <Facilities/>
                            </View>

                            <Text>Search alamat/area kost anda di Peta, kemudian pindahkan pin di Peta ke lokasi tepat kost anda</Text>

                            <View>
                                <Button style={styles.Searchbar} icon="search" mode="contained" onPress={() => console.log('Pressed')}> Search </Button>
                            </View>

                            <View style={{ width: null, height: 200, marginBottom: 35, marginTop: 10 }}>
                                <Map marginLeft={100} />
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'space-between' }}>
                                <TextInput placeholder="Latitude" placeholderTextColor="black"
                                    style={styles.latlong} />

                                <TextInput placeholder="Longitude" placeholderTextColor="black"
                                    style={styles.latlong} />
                            </View>

                            <TextInput placeholder="Pengelola Kost" placeholderTextColor="black"
                                style={styles.input} />

                            <TextInput placeholder="No.Hp Pengelola Kost" placeholderTextColor="black"
                                style={styles.input} />

                            <TextInput placeholder="Harga Bulanan" placeholderTextColor="black"
                                style={styles.input} />

                            <Button style={styles.button} mode="contained" marginBottom={10} onPress={() => console.log('Pressed')}>
                                <Text style={styles.title2}>Upload Foto</Text>
                            </Button>

                            <Button style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>
                                <Text style={styles.title2}>Pasang Iklan</Text>
                            </Button>
                        </View>

                    </View>

                </Content>
            </Container>

        )

    }

}

const styles = StyleSheet.create({

    input: {
        height: 40,
        backgroundColor: '#95a5a6',
        opacity: 0.3,
        marginTop: 10,
        marginBottom: 10,
        color: '#000',
        borderRadius: 20,
        textAlign: 'left',
        marginRight: 20,
        marginLeft: 20
    },

    button: {
        borderRadius: 20,
        backgroundColor: '#e67e22',
        marginRight: 20,
        marginLeft: 20,
        alignItems: 'center'
    },
    Searchbar: {
        borderRadius: 20,
        width: null,
        height: 40,
        marginTop: 10,
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 10,
        backgroundColor: '#FFFF',
        opacity: 0.5
    },
    title2: {
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 30,
        marginEnd: 10,
        marginVertical: 10
    },
    radio: {
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 10,
        paddingRight: 10,
    },

    Searchbar: {
        borderRadius: 20,
        width: null,
        height: 40,
        marginTop: 10,
        backgroundColor: '#95a5a6',
        opacity: 0.3,
        marginRight: 30,
        marginLeft: 30
    },
    Aheader: {
        backgroundColor: '#e67e22',
        fontWeight: 'bold',
        marginHorizontal: 130
    },
    latlong: {
        height: 40,
        backgroundColor: '#95a5a6',
        opacity: 0.3,
        marginBottom: 5,
        color: '#FFFFFF',
        borderRadius: 20,
        textAlign: 'center',
        width: 150,
        marginRight: 30,
        marginLeft: 30

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
        color: "#e67e22",
        marginRight: 20
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
})

export default IklanForm