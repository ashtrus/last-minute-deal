import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { Navigation } from "react-native-navigation";

class UserProfilePage extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  render() {
    return (
      <View>
        <Text> UserProfilePage </Text>
      </View>
    );
  }

  navigationButtonPressed({ buttonId }) {
    if (buttonId === "backButton") {
      Navigation.pop(this.props.componentId);
    }
  }
}

export default connect(state => state)(UserProfilePage);
