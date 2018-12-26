import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class UserProfilePage extends Component {
  render() {
    return (
      <View>
        <Text> UserProfilePage </Text>
      </View>
    );
  }
}

export default connect(state => state)(UserProfilePage);
