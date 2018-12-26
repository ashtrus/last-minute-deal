import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { dismissModal } from "src/utils/navUtils";

class AddDealPopup extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    switch (event.id) {
      case "saveNewDeal":
        this.save();
      case "closeAddDeal":
        dismissModal();
      default:
        return;
    }
  };

  render() {
    return (
      <View styleName="space-between horizontal">
        <Text>Add new deal form here</Text>
      </View>
    );
  }

  save() {
    dismissModal();
  }
}

export default connect(state => state)(AddDealPopup);
