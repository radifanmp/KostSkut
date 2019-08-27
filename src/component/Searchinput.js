import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { withNavigation } from "react-navigation";

// create a component
class Search extends Component {
  render() {
    console.log(this.props.navigation.navigate);
    return (
      <View
        style={[
          styles.searchContainer,
          { margin: this.props.margin, height: 50, alignItems: "center" }
        ]}
      >
        <TouchableOpacity onPress={this.props.handleGoBack}>
          <Ionicons
            style={styles.searchIcon}
            name={this.props.icon}
            size={this.props.size}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.inputContainer}
          placeholder=""
          returnKeyType="search"
          onFocus={this.props.onFocus}
          onSubmitEditing={() => this.props.navigation.navigate("List")}    
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 20,
    flex: 1
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#e67e22",
    borderColor:'#e67e22'
  },
  searchIcon: {
    paddingLeft: 20
  }
});

export default withNavigation(Search);