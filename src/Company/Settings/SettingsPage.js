import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { changeRoot, ROOTS } from "src/common/actions/rootNavigation.actions";
import { Button, Divider } from "src/common/components";
import { Icon, Switch, View } from "@shoutem/ui";
import main from "src/common/styles";

class SettingsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      switchOn: false
    };
  }

  render() {
    const { switchOn } = this.state;

    return (
      <View>
        <TouchableOpacity
          style={main.listItem}
          onPress={this.openCompanyProfile}
        >
          <View styleName="space-between horizontal">
            <Text>Company details</Text>
            <Icon styleName="disclosure" name="right-arrow" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={main.listItem}>
          <View styleName="space-between horizontal">
            <Text>Notify about new bookings</Text>
            <Switch
              onValueChange={this.onNotificationsChange}
              value={switchOn}
            />
          </View>
        </TouchableOpacity>

        <Divider />

        <Button onPress={this.onLogout}>Logout</Button>
      </View>
    );
  }

  openCompanyProfile() {
    // TODO: create component for reading company details
    return;
  }

  onNotificationsChange = val => {
    this.setState({ switchOn: val });
  };

  onLogout = async () => {
    const { dispatch } = this.props;
    await dispatch(changeRoot(ROOTS.AUTH));
  };
}

export default connect(state => state)(SettingsPage);
