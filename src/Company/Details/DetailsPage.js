import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class CompanyDetailsPage extends Component {
  render() {
    return (
      <View>
        <Text>CompanyDetailsPage</Text>
      </View>
    );
  }
}

export default connect(state => state)(CompanyDetailsPage);
