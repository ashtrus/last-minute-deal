import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { changeRoot, ROOTS } from "src/common/actions/rootNavigation.actions";
import { Button, Divider } from "src/common/components";
import { Icon, Switch, View } from "@shoutem/ui";
import main from "src/common/styles";

import { updateNotification } from "src/common/actions/settings.actions";
class SettingsPage extends Component {
  render() {
    const {
      settings: {
        notifications: { enabled }
      }
    } = this.props;

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
              value={enabled}
            />
          </View>
        </TouchableOpacity>

        <Divider />

        <Button onPress={this.onLogout}>Logout</Button>
      </View>
    );
  }

  openCompanyProfile = () => {
    this.props.navigator.push({
      screen: "LastMinuteDeal.CompanyDetailsPage",
      title: "Company Profile",
      backButtonTitle: "Back"
      // passProps: data || {}
    });
  };

  onNotificationsChange = val => {
    this.props.dispatch(updateNotification(val));
  };

  onLogout = async () => {
    const { dispatch } = this.props;
    await dispatch(changeRoot(ROOTS.AUTH));
  };
}

SettingsPage.propTypes = {
  navigator: PropTypes.object,
  dispatch: PropTypes.func,
  settings: PropTypes.object
};

export default connect(state => state)(SettingsPage);
