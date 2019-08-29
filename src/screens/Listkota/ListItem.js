import React, { Component } from "react";
import { View, Text, StyleSheet , TouchableOpacity} from "react-native";
import { Card, Button, itle } from "react-native-paper";
import { IconButton, Appbar, } from 'react-native-paper';

class ListItem extends Component {

  cekNominal = nominal => {
    const reverse = nominal
      .toString()
      .split("")
      .reverse()
      .join("");
    const ribuan = reverse.match(/\d{1,3}/g);
    const hasil = ribuan
      .join(".")
      .split("")
      .reverse()
      .join("");
    return hasil;
  };

  render() {
    return (
      // onPress={() =>this.props.navigation.navigate('KostDetail',{item : this.props.dataItem})}>
          <TouchableOpacity>
              
            <Card style={styles.container} onPress={this.props.paramNavigate}>
        
          <Card.Cover style={styles.image}
            source={(this.props.dataItem.photo != null) ? {uri:`http://${this.props.dataItem.photo}`} : require('../../assets/default.jpeg')} />
          <View flexDirection={'row'}>
            <IconButton
                  marginLeft={10}
                  icon="favorite-border"
                  color={'#e67e22'}
                  size={20}
                  onPress={() => console.log('Pressed')}/>
            <IconButton
                  icon="share"
                  color={'#e67e22'}
                  size={20}
                  onPress={() => console.log('Pressed')}/>
          </View>
        <Card.Content>
          <View style={styles.descriptionContainer}>
            <Text style={styles.jenis}>{this.props.dataItem.type}</Text>
            <Text style={styles.separated}>•</Text>
            <Text style={styles.kondisi}>{this.props.dataItem.room}</Text>
            <Text style={styles.separated}>•</Text>
            <Text style={styles.alamat}>{this.props.dataItem.city}</Text>
          </View>
          <View>
            <Text style={styles.harga}>
              Rp {this.cekNominal(this.props.dataItem.price)} / Bulan
            </Text>
          </View>
          <View style={styles.namaContainer}>
            <Text style={styles.namaTempat}>{this.props.dataItem.house_name}</Text>
          </View>

          {/* <View>
             <Text style={styles.booking}></Text>
          </View> */}
          <View>
            <Button style={styles.buttonx} mode="contained">
                  <Text style={{color: 'white',fontWeight:'bold'}}>Bisa Booking</Text>
                  {/* {this.props.item.status} */}
            </Button>
          </View>
          
        </Card.Content>
      </Card>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container:
  {
    paddingTop: 20,
    paddingBottom: 0,
    marginBottom: 0
  },
  image: {
    resizeMode: "cover",
    marginHorizontal: 17,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5
  },
  booking: {
    color: "black",
    fontWeight: 'bold'
  },
  descriptionContainer: {
    paddingTop:1,
    flexDirection: "row"
  },
  bookingContainer: {
    marginTop: 2,
    padding: 5,
    backgroundColor: "#e67e22",
    width: 120,
    borderRadius: 15
  },
  jenis: {
    color: "black",
    fontWeight: "200",
    fontSize: 14
  },
  buttonx: {
    borderRadius: 30,
    width: 130,
    marginBottom: 1,
    marginRight: 230,
    backgroundColor: '#e67e22',
  },
  kondisi: {
    color: "black",
    fontWeight: "200",
    fontSize: 14
  },
  alamat: {
    color: "black",
    fontWeight: "bold",
    marginLeft: 5,
    fontSize: 14,
    top: 2
  },
  harga: {
    fontSize: 18,
    color: "black",
    fontWeight: "700"
  },
  namaContainer: {
    paddingVertical: 5
  },
  namaTempat: {
    color: "black",
    fontSize: 18,
    fontWeight: "400"
  },
  separated: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 20,
    color: "black",
    fontWeight: "700"
  },
});
export default ListItem;