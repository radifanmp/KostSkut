import * as React from 'react';
import { View, StyleSheet, ScrollView, TextInput, Image } from 'react-native';
import { Text, Button, Checkbox } from 'react-native-paper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { CheckBox } from 'react-native-elements'

class IklanForm extends React.Component {

    constructor() {
        super();
        this.state = {
            checked: "false"
        };
    }

    render() {
        const { checked } = this.state;
        const isEnable = checked == !false;
        return (

            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 5
                }}>
                <TextInput placeholder="Luas Kost" placeholderTextColor="black"
                    style={styles.input} />
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 5
                }}>
                    <Checkbox
                        color="#e67e22"
                        status={checked ? "checked" : "unchecked"}
                        onPress={() => {
                            this.setState({ checked: !checked });
                        }}
                    />
                    <Icon style={styles.icon} name="seat-individual-suite" size={28} />
                    <Text style={styles.fasilitasText}>Kasur</Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 5
                }}>
                    <Checkbox
                        color="#e67e22"
                        title="Kamar"
                        status={checked ? "checked" : "unchecked"}
                        onPress={() => {
                            this.setState({ checked: !checked });
                        }} />
                    <Icon style={styles.icon} name="shower" size={28} />
                    <Text style={styles.fasilitasText}>Kamar Mandi</Text>
                    <CheckBox
                        label='Label'
                        checked={true}
                        onChange={(checked) => console.log('I am checked', checked)}
                    />
                </View>
            </View>

        )

    }

}

const styles = StyleSheet.create({

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
        backgroundColor: '#95a5a6',
        opacity: 0.3,
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
    fasilitasText: {
        textAlign: "center",
        color: "#2c3e50"
    },
    icon: {
        textAlign: "center",
        color: "#e67e22"
    },
})

export default IklanForm